import { distance } from 'fastest-levenshtein';
import {
  big_black_expected_results_array,
  DesignationGroup,
} from '../../test/finishScheduleData';
import {
  AI_RESULTS_FOLDER,
  COMPARISON_RESULTS_FOLDER,
} from './../../src/pdf-upload/logger';
import * as fs from 'fs';

const globalEvaluation = [];

export const compareResult = (fileName) => {
  let iteration = 0;
  const diffs = [];

  try {
    const expectedDesignation = big_black_expected_results_array.find(
      (item) => item.fileName === fileName,
    );
    if (!expectedDesignation?.textProductsCount) {
      // if (!expectedDesignation?.data?.length) {
      fs.writeFileSync(
        `${COMPARISON_RESULTS_FOLDER}/${fileName}.json`,
        JSON.stringify(
          {
            ERROR: 'NO PRODUCTS IN EXPECTED RESULTS',
            additional: expectedDesignation?.data,
          },
          null,
          2,
        ),
        'utf-8',
      );
      globalEvaluation.push({
        fileName: fileName,
        accuracy: expectedDesignation.textProductsCount === 0 ? 100 : 0,
        productsFound: 0,
        productsExpected: expectedDesignation.textProductsCount,
        productsCountCompletionPercentage:
          expectedDesignation.textProductsCount === 0 ? 100 : 0,
      });
      fs.writeFileSync(
        `${COMPARISON_RESULTS_FOLDER}/overall.json`,
        JSON.stringify(
          { ...globalEvaluation, overall: calculateStats(globalEvaluation) },
          null,
          2,
        ),
        'utf-8',
      );
      return;
    }

    const jsonData = JSON.parse(
      fs.readFileSync(`${AI_RESULTS_FOLDER}/${fileName}.json`, 'utf-8'),
    );
    const expectedResults = expectedDesignation?.data;
    expectedResults.forEach((expectedDesignationGroup) => {
      diffs.push({
        designationGroup: expectedDesignationGroup.designationGroup,
        products: [],
      });

      expectedDesignationGroup.products.forEach((expectedProduct) => {
        let match = undefined;

        jsonData.forEach((mdDesignation) => {
          const fit = mdDesignation.products.find(
            (mdProduct) =>
              mdProduct?.designation === expectedProduct?.designation ||
              mdProduct?.designation === expectedProduct?.productTypeName ||
              (mdProduct?.manufacturerName ===
                expectedProduct?.manufacturerName &&
                mdProduct?.productTypeName ===
                  expectedProduct?.productTypeName),
          );
          if (fit) match = fit;
        });

        if (!match) {
          diffs[iteration].products.push({
            ...expectedProduct,
            ERROR: '❌ Object not found in MD file',
          });
          return;
        }

        const diffObj = { designation: expectedProduct.designation };

        for (const key in expectedProduct) {
          if (key === 'designation') continue;

          if (!(key in match)) {
            diffObj[`➖${key}`] = expectedProduct[key];
          } else if (
            typeof expectedProduct[key] === 'string' &&
            typeof match[key] === 'string'
          ) {
            if (
              expectedProduct[key].toLowerCase() !== match[key].toLowerCase()
            ) {
              diffObj[`⚠️${key}`] = `${expectedProduct[key]} ➡️ ${match[key]}`;
            } else diffObj[`✅${key}`] = expectedProduct[key];
          } else if (expectedProduct[key] !== match[key]) {
            diffObj[`⚠️${key}`] = `${expectedProduct[key]} ➡️ ${match[key]}`;
          } else {
            diffObj[`✅${key}`] = expectedProduct[key];
          }
        }

        for (const key in match) {
          if (key === 'designation') continue;
          if (!(key in expectedProduct)) {
            diffObj[`➕${key}`] = match[key];
          }
        }

        diffs[iteration].products.push(diffObj);
      });

      iteration++;
    });

    jsonData.forEach((mdDesignation) => {
      mdDesignation.products.map((mdProduct) => {
        let exists = false;
        expectedResults.forEach((designation) => {
          if (exists) return;

          designation.products.forEach((product) => {
            if (
              mdProduct?.designation === product?.designation ||
              mdProduct?.designation === product?.productTypeName ||
              (mdProduct?.manufacturerName === product?.manufacturerName &&
                mdProduct?.productTypeName === product?.productTypeName)
            )
              exists = true;
          });
        });

        if (!exists) {
          diffs.push({
            designation: mdProduct,
            error:
              '⚠️ Object exists in MD file but missing from expected results',
          });
        }
      });
    });

    fs.writeFileSync(
      `${COMPARISON_RESULTS_FOLDER}/${fileName}.json`,
      JSON.stringify(diffs, null, 2),
      'utf-8',
    );

    globalEvaluation.push({
      fileName: fileName,
      accuracy:
        expectedResults.length === 0
          ? 0
          : calculateStrictMatchPercentage(expectedResults, jsonData),
      productsFound: calculateProducts(jsonData),
      productsExpected: expectedDesignation.textProductsCount,
      productsCountCompletionPercentage:
        (100 / expectedDesignation.textProductsCount) *
        calculateProducts(jsonData),
    });

    fs.writeFileSync(
      `${COMPARISON_RESULTS_FOLDER}/overall.json`,
      JSON.stringify(
        { ...globalEvaluation, overall: calculateStats(globalEvaluation) },
        null,
        2,
      ),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
    fs.writeFileSync(
      `${COMPARISON_RESULTS_FOLDER}/${fileName}.json`,
      JSON.stringify({ error }, null, 2),
      'utf-8',
    );
  }
};

function stringSimilarity(str1, str2) {
  if (str1 === str2) return 1;
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;
  return 1 - distance(str1, str2) / maxLength;
}

function calculateStats(data) {
  const accuracies = data
    .filter((item) => item.productsExpected > 0)
    .map((item) => item.accuracy);

  const average =
    accuracies.reduce((sum, val) => sum + val, 0) / accuracies.length;

  const sorted = [...accuracies].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  const countAccuracies = data.map(
    (item) => item.productsCountCompletionPercentage,
  );

  const averageCountAccuracy =
    countAccuracies.reduce((sum, val) => sum + val, 0) / countAccuracies.length;

  let skippedFiles = 0;
  data.forEach((item) => {
    if (item.productsFound === 0 && item.productsExpected > 0) skippedFiles++;
  });

  return { average, median, averageCountAccuracy, skippedFiles };
}

function compareObjectsStrict(expectedObj, actualObj) {
  let matchedFields = 0;
  let totalFields = 0;

  const expectedKeys = Object.keys(expectedObj);
  //   const actualKeys = Object.keys(actualObj);

  for (const key of expectedKeys) {
    totalFields++;
    const expectedValue = expectedObj[key];
    const actualValue = actualObj[key];

    if (actualValue === undefined) continue;

    if (
      typeof expectedValue === 'object' &&
      expectedValue !== null &&
      typeof actualValue === 'object' &&
      actualValue !== null
    ) {
      const { matched, total } = compareObjectsStrict(
        expectedValue,
        actualValue,
      );
      matchedFields += matched;
      totalFields += total;
    } else if (
      typeof expectedValue === 'string' &&
      typeof actualValue === 'string'
    ) {
      matchedFields += stringSimilarity(
        expectedValue.toLowerCase(),
        actualValue.toLowerCase(),
      );
    } else {
      matchedFields += expectedValue === actualValue ? 1 : 0;
    }
  }

  // Punishment for fields that are not exist in expected results
  // const extraFields = actualKeys.filter(key => !expectedKeys.includes(key));
  // totalFields += extraFields.length;

  return { matched: matchedFields, total: totalFields };
}

function calculateStrictMatchPercentage(expectedArray, actualArray) {
  let totalMatched = 0;
  let totalFields = 0;

  for (const expectedGroup of expectedArray) {
    const actualGroup = actualArray.find(
      (g) => g.designationGroup === expectedGroup.designationGroup,
    );
    if (!actualGroup) {
      for (const product of expectedGroup.products) {
        totalFields += Object.keys(product).length;
      }
      continue;
    }

    const actualDesignations = actualGroup.products.map((p) => p.designation);
    const expectedDesignations = expectedGroup.products.map(
      (p) => p.designation,
    );

    const extraProducts = actualDesignations.filter(
      (des) => !expectedDesignations.includes(des),
    );

    extraProducts.forEach((designationName) => {
      const actualObject = actualGroup.products.find(
        (item) => item.designation === designationName,
      );
      if (actualObject) totalFields += Object.keys(actualObject).length;
    });

    for (const expectedProduct of expectedGroup.products) {
      const actualProduct = actualGroup.products.find(
        (p) => p.designation === expectedProduct.designation,
      );
      if (!actualProduct) {
        totalFields += Object.keys(expectedProduct).length;
        continue;
      }

      const { matched, total } = compareObjectsStrict(
        expectedProduct,
        actualProduct,
      );
      totalMatched += matched;
      totalFields += total;
    }
  }

  const expectedGroups = expectedArray.map((g) => g.designationGroup);
  const actualGroups = actualArray.map((g) => g.designationGroup);
  const extraGroups = actualGroups.filter(
    (group) => !expectedGroups.includes(group),
  );
  totalFields += extraGroups.length;

  return totalFields === 0 ? 100 : (totalMatched / totalFields) * 100;
}

function calculateProducts(data: DesignationGroup[]) {
  let count = 0;

  data.forEach((element) => {
    count += element.products.length;
  });

  return count;
}
