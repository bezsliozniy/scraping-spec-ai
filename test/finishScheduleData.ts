type Product = {
  designation: string;
  manufacturerName?: string;
  productTypeName?: string;
  collection?: string;
  productName?: string;
  productNumber?: string;
  colorName?: string;
  colorNumber?: string;
  backing?: string;
  size?: string;
  shape?: string;
  finish?: string;
  //width
  //material
  // pattern
  // thickness
};

export type DesignationGroup = {
  designationGroup: string;
  products: Product[];
};

export const big_black_expected_results_array: {
  fileName: string;
  textProductsCount?: number;
  imgProductsCount?: number;
  data: DesignationGroup[];
}[] = [
  // {
  //   fileName:
  //     '0.2-manual-symbol-search-TL01-not-detectes-inline-text-601541.pdf',
  //   data: [],
  //   textProductsCount: 0, //+
  // },
  {
    fileName: '1.1 narrow table, 1 col, symbol first row.pdf',
    data: [
      {
        designationGroup: 'PL',
        products: [
          {
            designation: 'PL1',
            manufacturerName: 'FORMICA',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '912C-90',
            colorName: 'STORM',
            finish: 'GLOSS',
          },
          {
            designation: 'PL2',
            manufacturerName: 'ABET LAMINATI',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '440',
            colorName: 'VERDE BILIARDO',
            finish: 'SEI',
          },
          {
            designation: 'PL3',
            manufacturerName: 'FORMICA',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '1097-MC',
            colorName: 'CITADEL',
            finish: 'MICRODOT',
          },
          {
            designation: 'PL4',
            manufacturerName: 'FORMICA',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '1097-58',
            colorName: 'CITADEL',
            finish: 'MATTE',
          },
          {
            designation: 'PL5',
            manufacturerName: 'FORMICA',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '8910-NG',
            colorName: 'RAW BIRCHPLY',
            finish: 'NATURAL GRAIN',
          },
          {
            designation: 'PL6',
            manufacturerName: 'FORMICA',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Plastic Laminate',
            productNumber: '7223C-58',
            colorName: 'NEW WHITE',
            finish: 'MATTE',
          },
          {
            designation: 'SS1',
            manufacturerName: 'CORIAN',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Solid Surface Countertop',
            colorName: 'STORM GREY',
            finish: 'POLISHED',
            // material: "QUARTZ"
          },
          {
            designation: 'SS2',
            manufacturerName: 'CORIAN',
            productTypeName: 'Interior Architectural Woodwork',
            productName: 'Solid Surface Countertop',
            colorName: 'SNOW FLURRY',
            finish: 'POLISHED',
            // material: "QUARTZ"
            // pattern: "ZODIAQ"
          },
        ],
      },
      {
        designationGroup: 'CPT',
        products: [
          {
            designation: 'CPT1',
            manufacturerName: 'INTERFACE',
            productTypeName: 'Carpet Tile',
            productNumber: '139220250H',
            colorName: 'ANTHRACITE 100159',
            size: '24" x 24"',
            // pattern: "STRIATION"
          },
          {
            designation: 'CPT2',
            manufacturerName: 'MILLIKEN',
            productTypeName: 'Carpet Tile',
            productNumber: 'FXV118',
            colorName: 'CARBON',
            size: '19.7" X 19.7"',
            // pattern: "FIXATE"
          },
          {
            designation: 'CPT3',
            manufacturerName: 'SHAW CONTRACT',
            productTypeName: 'Carpet Tile',
            productNumber: '5T081',
            colorName: 'MAGIC 81505',
            // pattern: "COLOR FRAME"
          },
          {
            designation: 'CPT4',
            manufacturerName: 'SHAW CONTRACT',
            productTypeName: 'Carpet Tile',
            productNumber: '5T081',
            colorName: 'CHARMING 54505',
            // pattern: "COLOR FRAME"
          },
          {
            designation: 'CPT5',
            manufacturerName: 'SHAW CONTRACT',
            productTypeName: 'Carpet Tile',
            productNumber: '5T081',
            colorName: 'IMAGINE 81375',
            // pattern: "COLOR FRAME"
          },
        ],
      },
      {
        designationGroup: 'RB',
        products: [
          {
            designation: 'RB1',
            manufacturerName: 'TARKETT',
            productTypeName: 'Resilient Wall Base and Accessories',
            productNumber: '08',
            colorName: 'ICICLE',
            size: '2 1/2" HIGH',
          },
          {
            designation: 'RB2',
            manufacturerName: 'TARKETT',
            productTypeName: 'Resilient Wall Base and Accessories',
            productNumber: '83',
            colorName: 'MIDNIGHT',
            size: '2 1/2" HIGH',
          },
          {
            designation: 'RB3',
            manufacturerName: 'ROPPE',
            productTypeName: 'Resilient Wall Base and Accessories',
            productNumber: '662',
            colorName: 'ENVY',
            size: '2 1/2" HIGH',
          },
        ],
      },
      {
        designationGroup: 'APC',
        products: [
          {
            designation: 'APC1',
            manufacturerName: 'ARMSTRONG',
            productTypeName: 'Acoustical Panel Ceilings',
            productName: 'Calla Tegular',
            productNumber: '2824',
            colorName: 'WHITE',
            size: '24" X 24"',
            // style: "CALLA TEGULAR #2824"
          },
          {
            designation: 'APC2',
            manufacturerName: 'ARMSTRONG',
            productTypeName: 'Acoustical Panel Ceilings',
            productName: 'Calla Tegular',
            productNumber: '2825',
            colorName: 'WHITE',
            size: '24" X 48"',
            // style: "CALLA TEGULAR #2825"
          },
        ],
      },
      {
        designationGroup: 'RT',
        products: [
          {
            designation: 'RT1',
            manufacturerName: 'SHAW CONTRACT',
            productTypeName: 'Resilient Floor Tile',
            productNumber: '0364V',
            colorName: 'BARE 64200',
            size: '7" X 48"',
            // pattern: "GRAIN"
          },
          {
            designation: 'RT2',
            manufacturerName: 'ARMSTRONG',
            productTypeName: 'Resilient Floor Tile',
            productNumber: '51915',
            colorName: 'CHARCOAL',
            size: '12" X 12"',
            // pattern: "IMPERIAL TEXTURE STANDARD EXCELON"
          },
        ],
      },
      {
        designationGroup: 'FPS',
        products: [
          {
            designation: 'FPS1',
            manufacturerName: 'KNOLL',
            productTypeName: 'Stretched Fabric Wall Systems',
            productNumber: 'WC13941-1',
            colorName: 'TALC',
            backing: 'ACRYLIC BACKING REQUIRED',
            // width: "54\"",
            // pattern: "PETRA"
          },
          {
            designation: 'FPS2',
            manufacturerName: 'KNOLL',
            productTypeName: 'Stretched Fabric Wall Systems',
            productNumber: 'W 1926/11',
            colorName: 'AQUARIUM',
            backing: 'REFER TO MANUFACTURERS RECOMMENDATIONS',
            // width: "66\"",
            // pattern: "PIVOT"
          },
          {
            designation: 'FPS3',
            manufacturerName: 'DESIGNTEX',
            productTypeName: 'Stretched Fabric Wall Systems',
            productNumber: '2682-506',
            colorName: 'EMERALD',
            backing: 'REFER TO MANUFACTURERS RECOMMENDATIONS',
            // width: "55\"",
            // pattern: "APPLESEED"
          },
          {
            designation: 'FPS4',
            manufacturerName: 'MAHARAM',
            productTypeName: 'Stretched Fabric Wall Systems',
            productNumber: '466337-013',
            colorName: 'OXEYE',
            backing: 'REFER TO MANUFACTURERS RECOMMENDATIONS',
            // width: "54\"",
            // pattern: "MODE"
          },
        ],
      },
      {
        designationGroup: 'P',
        products: [
          {
            designation: 'P1',
            manufacturerName: 'BENJAMIN MOORE',
            productTypeName: 'Painting',
            productNumber: 'OC-149',
            colorName: 'DECORATORS WHITE',
            finish:
              'EGGSHELL @ WALLS, SEMIGLOSS @ DOORS & TRIM, FLAT @ CEILINGS',
          },
        ],
      },
      {
        designationGroup: 'CT',
        products: [
          {
            designation: 'CT1',
            manufacturerName: 'DALTILE',
            productTypeName: 'Ceramic Tile',
            colorName: 'GREY',
            // thickness: "5/16\"",
            size: '18" X 18"',
            // pattern: "SKYBRIDGE"
          },
          {
            designation: 'T1',
            manufacturerName: 'DALTILE',
            productTypeName: 'Ceramic Tile',
            colorName: 'MATTE LUNAR EL47',
            // thickness: "3/8\"",
            size: '6" X 18"',
            // pattern: "COLOR WHEEL LINEAR"
          },
          {
            designation: 'T2',
            manufacturerName: 'ROCA TILE',
            productTypeName: 'Ceramic Tile',
            colorName: 'COBALT',
            finish: 'POLISHED',
            size: '3" X 6"',
            // thickness: "7MM",
            // pattern: "BONE"
          },
        ],
      },
      {
        designationGroup: 'TB',
        products: [
          {
            designation: 'TB1',
            manufacturerName: 'DALTILE',
            productName: 'STRAIGHT TILE BASE',
            productTypeName: 'Ceramic Tile Base',
            colorName: 'MATTE LUNAR EL47',
            size: '2 1/2"',
            // pattern: "COLOR WHEEL LINEAR"
          },
        ],
      },
      {
        designationGroup: 'GL',
        products: [
          {
            designation: 'GL1',
            manufacturerName: 'MODERNUS',
            productTypeName: 'Glazing',
            productName: 'Demountable Glass System',
            finish: 'TEMPERED CLEAR GLASS, BLACK ANODIZED MULLION',
            // thickness: "1/2\" THICK"
          },
        ],
      },
      {
        designationGroup: 'F',
        products: [
          {
            designation: 'F1',
            manufacturerName: 'CAMIRA',
            productTypeName: 'Fixed Banquette Seating',
            colorName: 'SONG',
            // width: "67\"",
            // pattern: "SONUS"
          },
        ],
      },
      {
        designationGroup: 'GB',
        products: [
          {
            designation: 'GB1',
            manufacturerName: 'WORTHINGTON DIRECT',
            productTypeName: 'Glass Boards',
            productName: 'Visionary Magnetic Glass Whiteboard',
            productNumber: '83846',
            colorName: 'DESIGNER WHITE',
            size: "4' X 8'",
            // thickness: "1/4\""
          },
          {
            designation: 'GB2',
            manufacturerName: 'WORTHINGTON DIRECT',
            productTypeName: 'Glass Boards',
            productName: 'Visionary Magnetic Glass Whiteboard',
            productNumber: '83845',
            colorName: 'DESIGNER WHITE',
            size: "4' X 6'",
            // thickness: "1/4\""
          },
        ],
      },
    ],
    textProductsCount: 33, //+
  },
  {
    fileName: '1.2 narrow table, drawing above.pdf',
    data: [
      {
        designationGroup: 'C',
        products: [
          {
            designation: 'C-1',
            manufacturerName: 'Bentley Mills',
            productTypeName: 'Carpet Tile',
            // "productName": "Endgame",
            // "productNumber": "4ENT6",
            colorName: 'Level Up',
            colorNumber: '401340',
            size: '18" x 36"',
            // "finish": "Brick Install Pattern"
          },
        ],
      },
      {
        designationGroup: 'P',
        products: [
          {
            designation: 'P-1',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'GENERAL PAINT - TYPICAL & AT CEILINGS (U.O.N)',
            colorName: 'Chantilly Lace',
            colorNumber: 'OC-65',
          },
          {
            designation: 'P-2',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'ACCENT WALLS & OPEN CEILING PAINT',
            colorName: 'Iron Mountain',
            colorNumber: '2134-30',
          },
          {
            designation: 'P-3',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'SOFFIT & GYP. CEILING PAINT',
            colorName: 'White',
            colorNumber: 'OC-151/PM-2',
          },
          {
            designation: 'P-4',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'BLACK BASE COLOR',
            colorName: 'Jet Black',
            colorNumber: '2120-10',
          },
        ],
      },
      {
        designationGroup: 'B',
        products: [
          {
            designation: 'B-1',
            manufacturerName: 'Allstate Rubber',
            productTypeName: 'Rubber Base',
            colorNumber: 'A92',
            size: '4"H',
          },
          {
            designation: 'B-2',
            manufacturerName: 'Allstate Rubber',
            productTypeName: 'Rubber Base',
            colorNumber: 'A43',
            size: '4"H',
          },
          {
            designation: 'B-3',
            productTypeName: 'Paint Grade Wood Base',
            productName: '4"H Wood Base',
            colorName: 'Painted P-4',
          },
        ],
      },
      {
        designationGroup: 'SD',
        products: [
          {
            designation: 'SD-1',
            manufacturerName: 'Static Worx',
            productTypeName: 'Static Dissipative Tile',
            // "productName": "EC Rubber",
            colorName: 'Presto',
            size: '24" x 24"',
          },
        ],
      },
      {
        designationGroup: 'PL',
        products: [
          {
            designation: 'PL-1',
            manufacturerName: 'Formica',
            productTypeName: 'PANTRY CABINETS',
            productName: 'Aged Ash',
            productNumber: '8844',
          },
          {
            designation: 'PL-2',
            manufacturerName: 'Lamitech',
            productTypeName: 'PANTRY CABINETS',
            productName: 'Cinder',
          },
          {
            designation: 'PL-3',
            manufacturerName: 'Formica',
            productTypeName: 'COPY BASE CABINETS',
            productName: 'Storm',
            productNumber: '912-PX',
            finish: 'Plex Finish',
          },
          {
            designation: 'PL-4',
            manufacturerName: 'Formica',
            productTypeName: 'COPY LAMINATE OPEN SHELVING',
            productName: 'Bright White',
            productNumber: '459-58',
            finish: 'Matte Finish',
          },
        ],
      },
      {
        designationGroup: 'SS',
        products: [
          {
            designation: 'SS-1',
            manufacturerName: 'Compac',
            productTypeName: 'PANTRY COUNTERTOP & BACKSPLASH',
            colorName: 'Unique Calacatta',
            finish: 'Glace Finish',
            size: '3/4" Thick, Slab Size 64" x 130"',
          },
          {
            designation: 'SS-2',
            manufacturerName: 'Corian',
            productTypeName: 'COPY & WELLNESS COUNTERTOP',
            colorName: 'Designer White',
          },
        ],
      },
      {
        designationGroup: 'WT',
        products: [
          {
            designation: 'WT-1',
            manufacturerName: 'DFB Sales',
            productTypeName: 'Window Shades',
            // "productName": "Manual Operated Sol-R Shade 800 Series",
            colorName: 'White',
          },
          {
            designation: 'WT-2',
            manufacturerName: 'DFB Sales',
            productTypeName: 'Window Shades',
            // "productName": "Manual Operated Sol-R Shade Blackout Shade",
            colorName: 'White',
          },
        ],
      },
      {
        designationGroup: 'FILM',
        products: [
          {
            designation: 'FILM-1',
            manufacturerName: '3M',
            productTypeName: 'Frosted Film',
            // "productName": "Dusted Crystal"
          },
        ],
      },
      {
        designationGroup: 'RF',
        products: [
          {
            designation: 'RF-1',
            manufacturerName: 'Nora',
            productTypeName: 'Rubber Flooring',
            // "productName": "Norament Kivo",
            colorName: 'Flint',
            colorNumber: '5362',
            size: '39.5" x 39.5"',
          },
        ],
      },
      {
        designationGroup: 'CP',
        products: [
          {
            designation: 'CP-1',
            manufacturerName: 'Hafele',
            productTypeName: 'Cabinet Pulls',
            productName: 'Versa by Amerock',
            size: '119mm Length (96mm C-to-C)',
            productNumber: '133.53.405',
            finish: 'Matt Black',
          },
          {
            designation: 'CP-2',
            manufacturerName: 'Hafele',
            productTypeName: 'Appliance Pulls',
            size: '16" Length (15" C-to-C)',
            productNumber: '901.00.583',
            finish: 'Black',
          },
        ],
      },
    ],
    textProductsCount: 21, //+
  },
  // {
  //   fileName:
  //     '1.3 med table, 2 cols, name, value, multiple rows per symbol, symbol first row.pdf',
  //   data: [],
  //   textProductsCount: 0, //+
  // },
  // {
  //   fileName: '1-53 Huron Street NY.pdf',
  //   data: [],
  //   textProductsCount: 0, //+
  // },
  {
    fileName:
      '2.1 med table, vertical, pdf text, 2 cols, no headers, col1 symbol (vertical), col2 text.pdf',
    data: [
      {
        designationGroup: 'P',
        products: [
          {
            designation: 'P01',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'Decorators White',
            size: '24" x 24"',
          },
          {
            designation: 'P02',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
          {
            designation: 'P03',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
          {
            designation: 'P04',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
          {
            designation: 'P05',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
          {
            designation: 'P06',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
          {
            designation: 'P07',
            manufacturerName: 'Benjamin Moore',
            productTypeName: 'Paint',
            colorName: 'TBD',
            size: '24" x 24"',
          },
        ],
      },
      {
        designationGroup: 'WC',
        products: [
          {
            designation: 'WC01',
            manufacturerName: 'Wolf Gordon',
            productTypeName: 'CORK WALL COVERING',
            // "productName": "GOH 13488405 CORK",
            productNumber: '13488405',
            size: '24" x 24"',
          },
          {
            designation: 'WC02',
            manufacturerName: 'Sanfoot',
            productTypeName: 'WOOD WALL COVERING',
            size: '24" x 24"',
          },
          {
            designation: 'WC03',
            manufacturerName: 'Wolf Gordon',
            productTypeName: 'Vinyl Wall Covering',
            productName: 'GOH 12960663 RAISING CALN / SKY DIVE',
            size: '24" x 24"',
          },
          {
            designation: 'WC04',
            manufacturerName: 'Wolf Gordon',
            productTypeName: 'Vinyl Wall Covering',
            // "productName": "GOH 31682820 Elara / Chasm",
            productNumber: 'GOH 31682820 Elara / Chasm',
            size: '24" x 24"',
          },
        ],
      },
      {
        designationGroup: 'WV',
        products: [
          {
            designation: 'WV01',
            manufacturerName: 'Sanfoot',
            productTypeName: 'Wood Veneer',
            productName: 'Recon Cumulus Flat Cut',
          },
        ],
      },
      {
        designationGroup: 'WT',
        products: [
          {
            designation: 'WT01',
            manufacturerName: 'Nemo',
            productTypeName: 'Porcelain Wall Tile',
            // "productName": "Rake",
            colorName: 'TBD',
          },
        ],
      },
      {
        designationGroup: 'C',
        products: [
          {
            designation: 'C01',
            manufacturerName: 'Milliken',
            productTypeName: 'Carpet',
            collection: 'Major Frequency: One',
            // "productName": "Distortion",
            colorName: 'Interference',
            colorNumber: 'DTN183-118-152',
          },
          {
            designation: 'C02',
            manufacturerName: 'Milliken',
            productTypeName: 'Carpet',
            collection: 'Nordic Stories, Americas',
            // "productName": "Tectonic",
            colorName: 'Rock Powder',
            colorNumber: 'TTN27-52',
          },
        ],
      },
      {
        designationGroup: 'RF',
        products: [
          {
            designation: 'RF01',
            manufacturerName: 'Pliteq',
            productTypeName: 'Rubber Floor',
            productName: 'Geniemat 30',
            colorName: 'Grey',
            size: '24" x 24"',
          },
        ],
      },
      {
        designationGroup: 'FT',
        products: [
          {
            designation: 'FT01',
            manufacturerName: 'Mats Inc.',
            productName: 'Wineo Purline',
            colorName: 'Classic Oak Winter',
            productTypeName: 'Floor Tile - Yoga',
            size: '48" x 8"',
          },
          {
            designation: 'FT02',
            manufacturerName: 'Inalco',
            productTypeName: 'Porcelain Tile',
            productName: 'Senda',
            colorName: 'Gris Natural',
            size: '59" x 118.11"',
          },
        ],
      },
      {
        designationGroup: 'BF',
        products: [
          {
            designation: 'BF01',
            manufacturerName: 'Acme',
            productTypeName: 'Brick Facing',
            // "productName": "Pikes Peak Smooth Roman Plus Flats",
            size: '1/2" x 1-5 / 8" x 19-5/8"',
          },
        ],
      },
      {
        designationGroup: 'M',
        products: [
          {
            designation: 'M01',
            manufacturerName: 'UNKNOWN',
            productTypeName: 'Mirror',
          },
          {
            designation: 'M02',
            manufacturerName: 'Bendheim',
            productTypeName: 'Mirror',
            productName: 'AKK-1080 Black Mirror',
          },
        ],
      },
      {
        designationGroup: 'WB',
        products: [
          {
            designation: 'WB01',
            manufacturerName: 'Roppe',
            productTypeName: 'Wall Base',
            productName: 'Q6 Vinyl Wall Base',
            colorName: 'Snow',
            size: '4"',
          },
          {
            designation: 'WB02',
            manufacturerName: 'UNKNOWN',
            productTypeName: 'Wall Base',
            size: '3/4" X 4"',
            finish: 'STAIN TO MATCH',
          },
          {
            designation: 'WB03',
            manufacturerName: 'UNKNOWN',
            productTypeName: 'Wall Base',
            // "thickness": "3/4\""
          },
          {
            designation: 'WB04',
            manufacturerName: 'PSC',
            colorName: 'TBD',
            productTypeName: 'Wall Base',
          },
        ],
      },
    ],
    textProductsCount: 25, //+
  },
  // {
  //   fileName:
  //     '2.3 med table, vertical symbols, multiple tables, 2 cols, col1 symbol, col 2 specs.pdf',
  //   textProductsCount: 16, //+
  //   data: [
  //     {
  //       designationGroup: 'P',
  //       products: [
  //         {
  //           designation: 'P-1',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'ECO-SPEC',
  //           colorName: 'SUPER WHITE',
  //           finish: 'EGGSHELL',
  //         },
  //         {
  //           designation: 'P-2',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'ECO-SPEC',
  //           colorName: 'CHARCOAL SLATE HC-178',
  //           finish: 'EGGSHELL',
  //         },
  //         {
  //           designation: 'P-3',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'ECO-SPEC',
  //           colorName: 'SUPER WHITE',
  //           finish: 'FLAT',
  //         },
  //         {
  //           designation: 'P-4',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'ECO-SPEC',
  //           colorName: 'SUPER WHITE',
  //           finish: 'SEMI-GLOSS',
  //         },
  //         {
  //           designation: 'P-5',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'ECO-SPEC',
  //           colorName: 'SUPER WHITE',
  //           finish: 'SEMI-GLOSS',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WT',
  //       products: [
  //         {
  //           designation: 'WT-1',
  //           manufacturerName: 'DFB SALES',
  //           productTypeName: 'Window Treatment',
  //           collection: '4000 SERIES',
  //           colorName: 'CHALK',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'CP',
  //       products: [
  //         {
  //           designation: 'CP-1',
  //           manufacturerName: 'MOHAWK GROUP',
  //           productTypeName: 'Carpet Tile',
  //           productName: 'ACADEMIC VIEW BT433',
  //           colorName: 'SLATE',
  //           colorNumber: 'BT433',
  //           size: '24"X24"',
  //           // pattern: "MONOLITHIC",
  //           // installation: "GLUE-DONW METHOD"
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'VB',
  //       products: [
  //         {
  //           designation: 'VB-1',
  //           manufacturerName: 'JOHNSONITE MILLWORK REVEAL',
  //           productTypeName: 'Vinyl Base',
  //           colorName: 'ICICLE',
  //           colorNumber: '08',
  //           size: '4" COVE AT VCT, STRAIGHT AT CARPET',
  //         },
  //         {
  //           designation: 'VB-2',
  //           manufacturerName: 'JOHNSONITE MILLWORK REVEAL',
  //           productTypeName: 'Vinyl Base',
  //           colorName: 'BURNT UMBER',
  //           colorNumber: '63',
  //           size: '4" COVE AT VCT, STRAIGHT AT CARPET',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PL',
  //       products: [
  //         {
  //           designation: 'PL-1',
  //           manufacturerName: 'FORMICA',
  //           productTypeName: 'Plastic Laminate',
  //           productName: 'COLORCORE2',
  //           colorName: 'NEW WHITE',
  //           colorNumber: '7223C-90',
  //           finish: 'GLOSS',
  //         },
  //         {
  //           designation: 'PL-2',
  //           manufacturerName: 'FORMICA',
  //           productTypeName: 'Plastic Laminate',
  //           productName: 'COLORCORE2',
  //           colorName: 'NEW WHITE',
  //           colorNumber: '7223C-58',
  //           finish: 'MATTE',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'LVT',
  //       products: [
  //         {
  //           designation: 'LVT-1',
  //           manufacturerName: 'PARTERRE FLOORING',
  //           productTypeName: 'Luxury Vinyl Tile',
  //           productName: 'VERTU COLLECTION',
  //           colorName: 'COASTAL WALNUT',
  //           colorNumber: '11637',
  //           size: '6"X36" RANDOM MATCH',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'VCT',
  //       products: [
  //         {
  //           designation: 'VCT-1',
  //           manufacturerName: 'ARMSTRONG',
  //           productTypeName: 'Vinyl Composite Tile',
  //           productName: 'PREMIUM EXCELON CROWN TEXTURE',
  //           colorName: 'CHARCOAL',
  //           colorNumber: '5C915',
  //           size: '12"X12" RANDOM MATCH',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'GLT',
  //       products: [
  //         {
  //           designation: 'GLT-1',
  //           manufacturerName: 'NEMO TILE',
  //           productTypeName: 'Glass Mosaic Tile',
  //           productName: 'EMBARCADERO GLASS COLLECTION',
  //           colorName: 'MARKET',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WC',
  //       products: [
  //         {
  //           designation: 'WC-1',
  //           manufacturerName: 'DESIGNTEX',
  //           productTypeName: 'WALLCOVERING - FEATURE ACCENT WALL',
  //           // "pattern": "GLASS STITCH",
  //           colorName: 'ONYX',
  //           colorNumber: '6686-809',
  //           size: '52" WIDTH',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'ST',
  //       products: [
  //         {
  //           designation: 'ST-1',
  //           manufacturerName: 'QUARTZMASTER',
  //           productTypeName: 'Pantry Countertop',
  //           colorName: 'ORGANIC WHITE',
  //           colorNumber: 'QM9286',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   fileName:
  //     '2.4 med table, vertical, 2 column table with headers, col 1 Symbol, col 2 text, rows overflow - edge case.pdf',
  //   textProductsCount: 12, //+
  //   // WF - 2
  //   // VCT - 3
  //   // PL - 1
  //   // SS - 1
  //   // P - 3
  //   // B - 2
  //   data: [
  //     {
  //       //12 products
  //       designationGroup: 'WF',
  //       products: [
  //         {
  //           designation: 'WF-1',
  //           manufacturerName: 'ELKAY',
  //           productTypeName: 'Water Fountain and Bottle Fill',
  //           productName:
  //             'LZSTL8WSLP EZH2O Wall Mount Water Fountain and Bottle Fill Station and Versatile B-Level ADA Cooler',
  //           finish: 'Stainless Steel',
  //         },
  //         {
  //           designation: 'WF-2',
  //           manufacturerName: 'ELKAY',
  //           productTypeName: 'Water Fountain and Bottle Fill',
  //           productName:
  //             'LZSG8WSLK EZH2O Wall Mount Single Water Fountain and Bottle Fill Station ADA Cooler',
  //           finish: 'Stainless Steel',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'VCT',
  //       products: [
  //         {
  //           designation: 'VCT1',
  //           manufacturerName: 'ARMSTRONG',
  //           productTypeName: 'VCT Floor Tile',
  //           productName: 'Stone Texture',
  //           colorName: 'Beige',
  //           colorNumber: '52139',
  //           size: '12" x 12"',
  //           finish: 'Stack Pattern',
  //         },
  //         {
  //           designation: 'VCT2',
  //           manufacturerName: 'ARMSTRONG',
  //           productTypeName: 'VCT Floor Tile',
  //           productName: 'Premium Excelon',
  //           colorName: 'Silk',
  //           colorNumber: '5C234',
  //           size: '12" x 12"',
  //           finish: 'Floor Pattern to Best Match Existing 20th Design',
  //         },
  //         {
  //           designation: 'VCT3',
  //           manufacturerName: 'ARMSTRONG',
  //           productTypeName: 'VCT Floor Tile',
  //           productName: 'Premium Excelon',
  //           colorName: 'Silver Green',
  //           colorNumber: '5C802',
  //           size: '12" x 12"',
  //           finish: 'Floor Pattern to Best Match Existing 20th Design',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PL',
  //       products: [
  //         {
  //           designation: 'PL-1',
  //           manufacturerName: 'WILSONART',
  //           productTypeName: 'Plastic Laminate',
  //           colorName: 'Putty',
  //           colorNumber: '1503-60',
  //           finish: 'Matte Finish',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'SS',
  //       products: [
  //         {
  //           designation: 'SS-1',
  //           manufacturerName: 'CAESARSTONE QUARTZ',
  //           productTypeName: 'Sink Countertop Solid Surface',
  //           colorName: 'Organic White',
  //           colorNumber: '4600',
  //           size: '1-1/4" THK',
  //           // "finish": "Provide 4\"H Backsplash at Pantry Locations"
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'P',
  //       products: [
  //         {
  //           designation: 'P1',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'Eco-Advantage Exospec WB',
  //           colorName: 'TBD',
  //           finish: 'Eggshell @ Walls; Semi-Gloss @ Door/Trim/Connectors etc.',
  //         },
  //         {
  //           designation: 'P2',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'Regal Semiigloss #N333',
  //           colorName: 'TBD - To Best Match Existing',
  //           finish: 'Semi-Gloss @ Door/Elevator Door/Connectors etc.',
  //         },
  //         {
  //           designation: 'P3',
  //           manufacturerName: 'BENJAMIN MOORE',
  //           productTypeName: 'Paint',
  //           productName: 'Regal Semiigloss #N333',
  //           colorName: 'TBD - To Best Match Existing',
  //           finish: 'Semi-Gloss @ Door Trim/Elevator Frames/Connectors etc.',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'B',
  //       products: [
  //         {
  //           designation: 'B1',
  //           manufacturerName: 'JOHNSONITE',
  //           productTypeName: 'General Base',
  //           productName: 'TBD, 4"h',
  //           colorName: 'TBD - To Best Match Existing',
  //         },
  //         {
  //           designation: 'B2',
  //           manufacturerName: 'JOHNSONITE',
  //           productTypeName: 'General Base',
  //           productName: 'TBD, 4"h',
  //           colorName: 'TBD - To Best Match Existing',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   fileName:
  //     '2.5 med table, vertical, trade specific tables, header per page, all cols have headers, symbols as pictures.pdf',
  //   textProductsCount: 0, //+
  //   data: [],
  // },
  // {
  //   fileName:
  //     '2.8 med table, vertical, 3 cols, no headers, symbol(vertical), headers, text.pdf',
  //   textProductsCount: 38, //+
  //   // C - 1
  //   // CT - 7
  //   // B - 2
  //   // B - 2
  //   // P - 6
  //   // T - 2
  //   // PT - 1
  //   // AP - 4
  //   // W - 1
  //   // S - 1
  //   // U - 2
  //   // WP - 1
  //   // L - 2
  //   // KC - 1
  //   // T - 1
  //   // PL - 1
  //   // FP - 2
  //   // VT - 1
  //   data: [
  //     {
  //       designationGroup: 'C',
  //       products: [
  //         {
  //           designation: 'C1',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Existing Concrete',
  //           finish: 'Polished',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'CT',
  //       products: [
  //         {
  //           designation: 'CT1',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T426 Weathered Color Tile',
  //           colorName: 'Lake Still',
  //           colorNumber: '88411',
  //           size: '9"X36"',
  //         },
  //         {
  //           designation: 'CT2',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T157 Undertone Tile',
  //           colorName: 'Plaster',
  //           colorNumber: '57535',
  //           size: '9"X36"',
  //         },
  //         {
  //           designation: 'CT3',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T170 Primitive Tile',
  //           colorName: 'Tactile',
  //           colorNumber: '68496',
  //           size: '12"X48"',
  //         },
  //         {
  //           designation: 'CT4',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T170 Primitive Tile',
  //           colorName: 'Landscape',
  //           colorNumber: '68481',
  //           size: '12"X48"',
  //         },
  //         {
  //           designation: 'CT5',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T389 Balcony Tile',
  //           colorNumber: '88535',
  //           colorName: 'Quiet',
  //           size: '24"X24"',
  //         },
  //         {
  //           designation: 'CT6',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '59534 Gradient Tile',
  //           colorNumber: '34485',
  //           colorName: 'Sapphire Blue',
  //           size: '24"X24"',
  //         },
  //         {
  //           designation: 'CT7',
  //           manufacturerName: 'Shaw Contract',
  //           productTypeName: 'Carpet Tile',
  //           productName: '5T304 Exchange Tile',
  //           colorNumber: '01580',
  //           colorName: 'Crafted',
  //           size: '18"X36"',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'B',
  //       products: [
  //         {
  //           designation: 'B1',
  //           manufacturerName: 'Armstrong Flooring',
  //           productTypeName: 'Coved Wall Base',
  //           productNumber: 'R41FS',
  //           colorName: 'Flagstone',
  //           size: '4" H X 1/4" Thick, Custom to Fit',
  //         },
  //         {
  //           designation: 'B2',
  //           manufacturerName: 'SCHLUTER SYSTEMS',
  //           productTypeName: 'Metal Wall Base',
  //           productNumber: 'SCHULTER DESIGNBASE',
  //           colorName: 'BRUSHED STAINLESS STEEL',
  //           size: '4" H X 1/4" Thick, Custom to Fit',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'P',
  //       products: [
  //         {
  //           designation: 'P1',
  //           manufacturerName: 'Benjamin Moore Regal®',
  //           productTypeName: 'Paint',
  //           productNumber: '879',
  //           colorName: 'White Opulence',
  //           finish: 'Flat',
  //         },
  //         {
  //           designation: 'P2',
  //           manufacturerName: 'Benjamin Moore Regal®',
  //           productTypeName: 'Paint',
  //           productNumber: '2121-20',
  //           colorName: 'Steel Wool',
  //           finish: 'Eggshell',
  //         },
  //         {
  //           designation: 'P3',
  //           manufacturerName: 'Benjamin Moore Regal®',
  //           productTypeName: 'Paint',
  //           productNumber: '2120-20',
  //           colorName: 'Black Iron',
  //           finish: 'Eggshell',
  //         },
  //         {
  //           designation: 'P4',
  //           manufacturerName: 'Benjamin Moore Regal®',
  //           productTypeName: 'Paint',
  //           productNumber: '2111-70',
  //           colorName: 'Calm',
  //           finish: 'Flat',
  //         },
  //         {
  //           designation: 'P5',
  //           manufacturerName: 'Benjamin Moore Regal®',
  //           productTypeName: 'Paint',
  //           productNumber: '2064-10',
  //           colorName: 'Bold Blue',
  //           finish: 'Flat',
  //         },
  //         {
  //           designation: 'P6',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Paint',
  //           finish: 'Eggshell',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PT',
  //       products: [
  //         {
  //           designation: 'PT1',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Porcelain Floor Tile',
  //           colorName: 'Dark Gray',
  //           size: '24"X24"',
  //           finish: 'Matte',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'T',
  //       products: [
  //         {
  //           designation: 'T-1',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Polished Ceramic Wall Tile',
  //           colorName: 'Light Gray',
  //           size: '3" H X 12" W',
  //           finish: 'Polished',
  //         },
  //         {
  //           designation: 'T-2',
  //           manufacturerName: 'Nemo Tile',
  //           productTypeName: 'Ceramic Tile Mosaic Sheet',
  //           productName: 'Glazed Penny Round #MIKCHL006',
  //           colorName: 'Twilight',
  //           size: '12"X12"',
  //           finish: 'Glossy',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'AP',
  //       products: [
  //         {
  //           designation: 'AP1',
  //           manufacturerName: 'MDC Interior Solutions',
  //           productTypeName: 'Acoustic Panel',
  //           productName: 'Zintra',
  //           colorName: 'ZTR4723 Pebble',
  //           size: '1/2" THK, Refer to Elevation',
  //         },
  //         {
  //           designation: 'AP2',
  //           manufacturerName: 'MDC Interior Solutions',
  //           productTypeName: 'Acoustic Panel',
  //           productName: 'Zintra',
  //           colorName: 'ZTR4705 Pewter',
  //           size: '1/2" THK, Refer to Elevation',
  //         },
  //         {
  //           designation: 'AP3',
  //           manufacturerName: 'MDC Interior Solutions',
  //           productTypeName: 'Acoustic Panel',
  //           productName: 'Zintra',
  //           colorName: 'Frost',
  //           colorNumber: 'ZTR4702',
  //           size: '1/2" THK, Refer to Elevation',
  //         },
  //         {
  //           designation: 'AP4',
  //           manufacturerName: 'MDC Interior Solutions',
  //           productTypeName: 'Acoustic Panel',
  //           productName: 'Zintra',
  //           colorName: 'Cadet',
  //           colorNumber: 'ZTR4721',
  //           size: '1/2" THK, Refer to Elevation',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'W',
  //       products: [
  //         {
  //           designation: 'W1',
  //           manufacturerName: 'Barnwood2Go',
  //           productTypeName: 'Reclaimed Barnwood Wall',
  //           productName: 'MBW2GOARMB2GWW45HPBW24.5T0.2',
  //           colorName: 'Weathered White',
  //           size: '1/2"x4 1/2" Random Length',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'S',
  //       products: [
  //         {
  //           designation: 'S1',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Stainless Steel Panel',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'U',
  //       products: [
  //         {
  //           designation: 'U1',
  //           manufacturerName: 'Designtex',
  //           productTypeName: 'Upholstery',
  //           productName: 'Moquette',
  //           productNumber: '3786-401',
  //           colorName: 'Capetown',
  //           size: 'Custom to Fit',
  //         },
  //         {
  //           designation: 'U2',
  //           manufacturerName: 'Designtex',
  //           productTypeName: 'Upholstery',
  //           productName: 'Alcazar',
  //           productNumber: '3413-109',
  //           colorName: 'Jute',
  //           size: 'Custom to Fit',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WP',
  //       products: [
  //         {
  //           designation: 'WP1',
  //           manufacturerName: 'Photowall',
  //           productTypeName: 'Wallpaper',
  //           productNumber: 'E323385',
  //           colorName: 'Winter Blues in the Woods',
  //           size: 'Refer to Elevation',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'L',
  //       products: [
  //         {
  //           designation: 'L-1',
  //           manufacturerName: 'Wilsonart',
  //           productTypeName: 'Metal Wall Base',
  //           productNumber: '8201',
  //           colorName: 'Grey Elm',
  //           finish: '12 SOFT GRAIN FINISH W/ AEON',
  //           size: 'Custom to Fit',
  //         },
  //         {
  //           designation: 'L-2',
  //           manufacturerName: 'Wilsonart',
  //           productTypeName: 'Cabinetry',
  //           productNumber: 'Y0781',
  //           colorName: 'Meditation Oak',
  //           finish: '16 Casual Rustic Finish w/ Aeon',
  //           size: 'Custom to Fit',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'KC',
  //       products: [
  //         {
  //           designation: 'KC-1',
  //           manufacturerName: 'Wilsonart',
  //           productNumber: 'Q4056',
  //           finish: 'Polished',
  //           colorName: 'Calacatta Aquilea',
  //           size: 'Custom to Fit',
  //           productTypeName: 'QUARTZ COUNTERTOP',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'T',
  //       products: [
  //         {
  //           designation: 'T-1',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Carrara White Marble',
  //           size: 'Custom to Fit',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PL',
  //       products: [
  //         {
  //           designation: 'PL-1',
  //           manufacturerName: 'Canal Plastics Center',
  //           productTypeName: 'Acrylic Sheets',
  //           productNumber: 'FS-100192',
  //           colorName: 'Gray Mirror',
  //           colorNumber: '1050',
  //           size: '48"X48"X1/8"',
  //           finish: 'Glossy',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'FP',
  //       products: [
  //         {
  //           designation: 'FP1',
  //           manufacturerName: 'Carnegie Fabric',
  //           productTypeName: 'Fabric Panel',
  //           productName: 'Linen',
  //           colorName: '6291-5',
  //           size: 'Custom to Fit',
  //         },
  //         {
  //           designation: 'FP2',
  //           manufacturerName: 'Carnegie Fabric',
  //           productTypeName: 'Fabric Panel',
  //           productName: 'Float',
  //           colorName: '5386-63',
  //           size: 'Custom to Fit',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'VT',
  //       products: [
  //         {
  //           designation: 'VT1',
  //           manufacturerName: 'Armstrong Flooring',
  //           productTypeName: 'Vinyl Tile',
  //           productNumber: 'Z5930',
  //           colorName: 'Opal',
  //           size: '12"X24"X1/8"',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   fileName:
  //     '2.9 med table, vertical, 3 cols, trade as header row, symbol col, header column, descr column.pdf',
  //   textProductsCount: 0, //+
  //   data: [],
  // },
  // {
  //   fileName:
  //     '2.10 med table, std, image, 3 cols, trade row then col1 symbol, col2 headers, col 3 text.pdf',
  //   textProductsCount: 0, //+
  //   data: [],
  // },
  // {
  //   fileName:
  //     '2.11 med table, FS next to dense drawing, TEXT IN INFO SECTION, vertical, multiple columns, pdf text.pdf',
  //   textProductsCount: 46, //+
  //   // AC - 8
  //   // RB - 1
  //   // WB - 3
  //   // CP - 1
  //   // LT - 1
  //   // PC - 1
  //   // VT - 2
  //   // CB - 1
  //   // GS - 1
  //   // WD - 3
  //   // WC - 1
  //   // WT - 3
  //   // PT - 8
  //   // FM - 1
  //   // CT - 3
  //   // PL - 6
  //   // SS - 2
  //   data: [
  //     {
  //       designationGroup: 'AC',
  //       products: [
  //         {
  //           designation: 'AC01',
  //           manufacturerName: 'SUGATSUNE OR EQUAL',
  //           productTypeName: 'Cabinet Pull',
  //           productName: '4" WIREPULL, 5/16" DIA',
  //           finish: 'SATIN BRASS',
  //         },
  //         {
  //           designation: 'AC02',
  //           manufacturerName: 'SUGATSUNE OR EQUAL',
  //           productTypeName: 'WALLCOVERING TRIM/CAP MOULDING',
  //           finish: 'SATIN BRASS',
  //         },
  //         {
  //           designation: 'AC03',
  //           manufacturerName: 'DOUG MOCKETT',
  //           productTypeName: 'Metal Grommet',
  //           productName: 'MM4A 2-3/8" GROMMET WITH MM4 COVER',
  //           finish: 'POLISHED BRASS',
  //         },
  //         {
  //           designation: 'AC04',
  //           manufacturerName: 'DOUG MOCKETT',
  //           productTypeName: 'Plastic Grommet',
  //           productName: 'TG 2" GROMMET WITH COVER',
  //           finish: 'BLACK',
  //         },
  //         {
  //           designation: 'AC05',
  //           manufacturerName: 'HAFFLE',
  //           productTypeName: 'Cabinet Lock',
  //           productName: 'CABINET DOOR LOCK, L8173 SERIES KEYED DIFFERENTLY',
  //           finish: 'SATIN BRASS',
  //         },
  //         {
  //           designation: 'AC06',
  //           manufacturerName: 'DOUG MOCKETT OR EQUAL',
  //           productTypeName: 'Metal Leg',
  //           productName: '3" DIA.METAL TUBE LEG',
  //           finish: 'POWDER COAT SILVER',
  //         },
  //         {
  //           designation: 'AC07',
  //           manufacturerName: 'SCHLUTER',
  //           productTypeName: 'Tile Trim',
  //           productName: 'QUADEC, INCLUDE TOP CAPS',
  //           finish: 'SATIN CHROME',
  //         },
  //         {
  //           designation: 'AC08',
  //           manufacturerName: 'FRY REGLET',
  //           productTypeName: 'Expansion Joint',
  //           productName: '#DRM-5050-2-PC, 1/2" X 1/2"',
  //           finish: 'STANDARD - POWDER COAT WHITE',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'RB',
  //       products: [
  //         {
  //           designation: 'RB01',
  //           manufacturerName: 'JOHNSONITE',
  //           productTypeName: 'Rubber Wall Base',
  //           productName: 'RESILIENT BASE',
  //           size: '4"',
  //           colorName: 'GREY HAZE',
  //           colorNumber: '#24',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WB',
  //       products: [
  //         {
  //           designation: 'WB01',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'RECESSED SOLID WOOD WALL BASE',
  //           size: '5/8" X 3 - 5/8" X 5/8"',
  //           finish:
  //             '#5920, STAINED TO MATCH ARCH. CONTROL SAMPLE, 35 MEDIUM RUBBED EFFECT, SEMI- OPEN PORE',
  //         },
  //         {
  //           designation: 'WB02',
  //           manufacturerName: 'UNKNOWN',
  //         },
  //         {
  //           designation: 'WB03',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Surface Mounted Painted Wood Base',
  //           size: '5/8" X 3 - 5/8" X 5/8"',
  //           finish: 'PT/01, SATIN ENAMEL',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'CP',
  //       products: [
  //         {
  //           designation: 'CP01',
  //           manufacturerName: 'CONSTANTINE COMMERCIAL',
  //           productTypeName: 'Broadloom',
  //           productName: 'C.E.O. TRIMLINE',
  //           colorName: 'CHAIRMAN',
  //           colorNumber: 'C-1628',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'LT',
  //       products: [
  //         {
  //           designation: 'LT01',
  //           manufacturerName: 'Forbo',
  //           productTypeName: 'LINOLEUM VINYL FLOOR',
  //           productName: 'MARMOLEUM CONCRETE',
  //           colorName: 'Frosty Grey',
  //           colorNumber: '#3629',
  //           size: 'SHEETS, 79IN W X LENGTH',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PC',
  //       products: [
  //         {
  //           designation: 'PC01',
  //           manufacturerName: 'DALTILE',
  //           productTypeName: 'Porcelain Floor Tile',
  //           productName: 'AYERS ROCK',
  //           colorName: 'SOLAR SUMMIT',
  //           colorNumber: '#AY01',
  //           size: '13" X 13"',
  //           // installation: "Stacked"
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'VT',
  //       products: [
  //         {
  //           designation: 'VT01',
  //           manufacturerName: 'ARMSTRONG',
  //           productTypeName: 'Static Dissipative VCT',
  //           productName: 'STATIC DISSIPATIVE SDT',
  //           colorName: 'ARMOR GRAY',
  //           colorNumber: '#51951',
  //           size: '12" X 12"',
  //           // installation: "Straight"
  //         },
  //         {
  //           designation: 'VT02',
  //           manufacturerName: 'MILLIKEN LVT NATURAL',
  //           productTypeName: 'Vinyl Wood Floor',
  //           productName: 'FARGESIA BAMBOO',
  //           colorName: 'CANE FAR18',
  //           size: '9" X 59.7"',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'CB',
  //       products: [
  //         {
  //           designation: 'CB01',
  //           manufacturerName: 'DALTILE',
  //           productTypeName: 'Ceramic Wall Base',
  //           // "productName": "RITTENHOUSE SQUARE 3" COVE BASE",
  //           colorName: 'ALMOND',
  //           colorNumber: '#K165',
  //           size: '3" X 6"',
  //           finish: 'GLOSSY',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'GS',
  //       products: [
  //         {
  //           designation: 'GS01',
  //           manufacturerName: 'UNKNOWN',
  //           size: '1-1/2" THICK',
  //           finish: 'POLISHED, EASED EDGES',
  //           productTypeName: 'Granite Countertop',
  //           // "productName": "ABSOLUTE BLACK GRANITE",
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WD',
  //       products: [
  //         {
  //           designation: 'WD01',
  //           manufacturerName: 'CREATIVE WOOD',
  //           productTypeName: 'Wood Veneer',
  //           // "productName": "ANIGRE, QUARTER SLICED",
  //           finish:
  //             'STAINED TO MATCH ARCH CONTROL SAMPLE 35, MEDIUM RUBBED EFFECT, SEMI-OPEN PORE.',
  //         },
  //         {
  //           designation: 'WD02',
  //           manufacturerName: 'UNKNOWN',
  //           productTypeName: 'Wood Veneer',
  //         },
  //         {
  //           designation: 'WD03',
  //           manufacturerName: 'LOCALLY SOURCED',
  //           productTypeName: 'Wood Veneer',
  //           // "productName": "QUARTERED PLAIN SLICED ANIGRE VENEER",
  //           finish: 'MATCH WD-01 AND CONTROL SAMPLE',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WC',
  //       products: [
  //         {
  //           designation: 'WC01',
  //           manufacturerName: 'MAHARM',
  //           productName: 'CHISEL #399571',
  //           colorName: 'Bone',
  //           colorNumber: '#001',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'WT',
  //       products: [
  //         {
  //           designation: 'WT01',
  //           manufacturerName: 'DFB SALES SOL-R-VEIL',
  //           productTypeName: 'Window Treatment',
  //           // "productName": "2000 G-SEIRES",
  //           colorName: 'WHITE/PLATINUM',
  //         },
  //         {
  //           designation: 'WT03',
  //           manufacturerName:
  //             'DFB DOUBLE MANUAL SHADE SIDE BY SIDE WITH CLIP ENCLOSURE AND FASCIA',
  //           productTypeName: 'Window Treatment (Double)',
  //           // "productName": "2000 SERIES",
  //           colorName: 'WHITE/PLATINUM',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PT',
  //       products: [
  //         {
  //           designation: 'PT01',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Spring in Aspen',
  //           colorNumber: '#954',
  //           finish:
  //             'Eggshell or flat on all walls, satin-enamel on all doors, trims and frames',
  //         },
  //         {
  //           designation: 'PT02',
  //           productTypeName: 'CEILING PAINT',
  //           manufacturerName: 'Pittsburgh Paints',
  //           colorName: 'Gypsum',
  //           colorNumber: '520-1',
  //           finish: 'Flat',
  //         },
  //         {
  //           designation: 'PT03',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Cloud Cover',
  //           colorNumber: '#855',
  //           finish: 'Satin enamel on all doors, trims and frames',
  //         },
  //         {
  //           designation: 'PT04',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Ocean Beach',
  //           colorNumber: '#958',
  //           finish: 'Satin enamel on all doors, trims and frames',
  //         },
  //         {
  //           designation: 'PT05',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Collingwood',
  //           colorNumber: '#OC-28',
  //           finish:
  //             'Eggshell on all walls, semi-gloss on all doors, trims and frames',
  //         },
  //         {
  //           designation: 'PT06',
  //           productTypeName: 'ELEVATOR PAINT',
  //           manufacturerName: 'Scuffmaster',
  //           colorName: 'SM',
  //           colorNumber: '807',
  //           finish: 'Solid metal',
  //         },
  //         {
  //           designation: 'PT07',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Pigeon Grey',
  //           colorNumber: '#2133-50',
  //           finish: 'Flat',
  //         },
  //         {
  //           designation: 'PT08',
  //           productTypeName: 'WALL PAINT',
  //           manufacturerName: 'Benjamin Moore',
  //           colorName: 'Baja Dunes',
  //           colorNumber: '#A997',
  //           finish: 'Flat',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'FM',
  //       products: [
  //         {
  //           designation: 'FM01',
  //           productTypeName: 'Film for Glass',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'CT',
  //       products: [
  //         {
  //           designation: 'CT01',
  //           manufacturerName: 'DALTILE',
  //           productName: 'RITTENHOUSE SQUARE',
  //           colorName: 'ALMOND',
  //           colorNumber: '#K165',
  //           size: '3" X 6"',
  //           finish: 'GLOSSY',
  //           productTypeName: 'Ceramic Tile',
  //           // "instllation": "Brick",
  //         },
  //         {
  //           designation: 'CT02',
  //           manufacturerName: 'DALTILE',
  //           productTypeName: 'Ceramic Tile',
  //           productName:
  //             'RITTENHOUSE SQUARE 3" OR 6" BULLNOSE, VARIES PER LOCATION. GC TO COORDINATE.',
  //           colorName: 'ALMOND',
  //           colorNumber: '#K165',
  //           size: '3" X 6"',
  //           finish: 'GLOSSY',
  //           // "installation": "Brick",
  //         },
  //         {
  //           designation: 'CT03',
  //           manufacturerName: 'MARAZZI',
  //           productName: 'Midpark Mosaics',
  //           colorName: 'Cloud',
  //           size: '13" X 12"',
  //           productTypeName: 'Ceramic Tile',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'PL',
  //       products: [
  //         {
  //           designation: 'PL01',
  //           manufacturerName: 'PIONITE',
  //           productTypeName: 'Plastic Laminate',
  //           colorNumber: '#241',
  //           colorName: 'FOLKSTONE GRAY',
  //           finish: 'SUEDE FINISH',
  //         },
  //         {
  //           designation: 'PL02',
  //           manufacturerName: 'PIONITE',
  //           productTypeName: 'Plastic Laminate',
  //           colorNumber: '#SG211',
  //           colorName: 'INGOT GRAY',
  //           finish: 'SUEDE FINISH',
  //         },
  //         {
  //           designation: 'PL03',
  //           manufacturerName: 'NEVAMAR',
  //           productTypeName: 'Plastic Laminate',
  //           colorNumber: '#S-6020T',
  //           colorName: 'GUNMETAL',
  //           finish: 'TEXTURED',
  //         },
  //         {
  //           designation: 'PL04',
  //           manufacturerName: 'NEVAMAR',
  //           productTypeName: 'PLASTIC LAMINATE',
  //           colorNumber: '#NM55S-7024GL',
  //           colorName: 'CHALK WHITE THRU COLOR',
  //           finish: 'HIGH GLOSS',
  //         },
  //         {
  //           designation: 'PL05',
  //           manufacturerName: 'WILSONART',
  //           productTypeName: 'Plastic Laminate',
  //           colorNumber: '#D354-60',
  //           colorName: 'DESIGNER WHITE',
  //           finish: 'MATTE',
  //         },
  //         {
  //           designation: 'PL06',
  //           manufacturerName: 'NEVAMAR',
  //           productTypeName: 'Plastic Laminate',
  //           colorNumber: '#S-6020SM',
  //           colorName: 'GUNMETAL',
  //           finish: 'SUPER MATTE',
  //         },
  //       ],
  //     },
  //     {
  //       designationGroup: 'SS',
  //       products: [
  //         {
  //           designation: 'SS01',
  //           manufacturerName: 'SILESTONE BY CONSENTINO',
  //           productTypeName: 'Solid Surface',
  //           colorName: 'LUSSO',
  //           finish: 'POLISHED',
  //           // "thickness": "2cm"
  //         },
  //         {
  //           designation: 'SS02',
  //           manufacturerName: 'SILESTONE BY CONSENTINO',
  //           productTypeName: 'Solid Surface',
  //           colorName: 'CORAL GRAY',
  //           finish: 'POLISHED',
  //           // "thickness": "2cm"
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   fileName: '2.12 Narrow, Symbols in title area.pdf',
  //   textProductsCount: 32, //+
  //   data: [],
  // },
  // {
  //   fileName: '2.14 Med table, multiple tables on page.pdf',
  //   textProductsCount: 23, //+
  //   data: [],
  // },
  // {
  //   //problems
  //   fileName: '3.01-FINISH-SCHEDULE-Rev.6.pdf',
  //   textProductsCount: 70,
  //   data: [],
  // },
  {
    //problems
    fileName:
      '3.1 wide table, std symbol, trade specific tables, header per page, all cols have headers.pdf',
    textProductsCount: 98,
    data: [],
  },
  // {
  //   fileName:
  //     '3.2 wide table, std symbol, trade specific tables, header per table, all cols have headers, multiple trade rows.pdf',
  //   textProductsCount: 87,
  //   data: [],
  //   // CPT - 3
  //   // B-CPT - 1
  //   // G-CPT - 1
  //   // MT - 1
  //   // B-T - 1
  //   // G-T - 1
  //   // T - 1
  //   // VT - 1
  //   // CON - 1
  //   // CON - 1 - ??????? Empty
  //   // PT - 6
  //   // B-WC - 1
  //   // G-WC - 1
  //   // WC - 1
  //   // WT - 1
  //   // B-WD - 1
  //   // G-MW - 1
  //   // TB - 1
  //   // VB - 2
  //   // MB - 2
  //   // B-VB - 1
  //   // G-VB - 1
  //   // PL - 3
  //   // SS - 2
  //   // GL - 1 - (37 37 37)
  //   // LIGHT - DOUBLECHECK
  //   // A - 3
  //   // C - 1
  //   // E - 3
  //   // H - 1
  //   // L - 1
  //   // W - 1
  //   //
  //   // T - 5
  //   // VT - 1
  //   // EPX - 1
  //   // CON - 1
  //   // CON - 1 - ??????? Empty
  //   // WD - 1
  //   // WC - 1
  //   // WB - 1
  //   // VB - 1
  //   // TB - 2
  //   // SS - 1
  //   // PL - 4
  //   // WD - 1
  //   // GF - 3
  //   // LIGHT - DOUBLECHECK
  //   // A - 1
  //   // D - 1
  //   // E - 1
  //   // F - 1
  //   // G - 1
  //   // H - 1
  //   // J - 1
  //   // L - 1
  //   // Q - 1
  //   // R - 1
  //   // S - 1
  //   // W - 1
  //   // B - 1
  //   // X - 1
  //   // 61 w/o LIGHT
  //   // 24 LIGHT
  //   // 87 GENERAL
  // },
  // {
  //   //problems
  //   fileName:
  //     '3.3 wide table, std symbol, trade specific tables, header per page, all cols have headers, multiple tables in 1 page.pdf',
  //   textProductsCount: 62,
  //   data: [],
  // },
  {
    fileName: '3.6 wide table, pdf text, std symbol, dense drawing nearby.pdf',
    textProductsCount: 22, // +
    data: [],
    // C - 5
    // W - 6
    // B - 2
    // F - 2
    // GL - 1
    // MT - 1
    // SS - 1
    // WD - 3
    // WP - 1
  },
  {
    //problems
    fileName: '3.9 wide table.pdf',
    textProductsCount: 61,
    data: [],
  },
  {
    fileName: '3.10 wide table.pdf',
    textProductsCount: 60, // +
    data: [],
    // CT - 1
    // GL - 3
    // MT - 1
    // PR - 2
    // PT - 2
    // ST - 5
    // TL - 4
    // WB - 2
    // WD - 4
    // WF - 1
    // CPP - 2
    // CPT - 2
    // WC - 4
    // P - 10
    // PA - 3
    // CB - 2
    // GB - 1
    // GZ - 4
    // 60-LT - 7
  },
  {
    //problems
    fileName: '3.13 wide table.pdf',
    textProductsCount: 119,
    data: [],
  },
  {
    //problems
    fileName: '3.14-wide-table-on-right-next-to-drawing-594272_34.pdf',
    textProductsCount: 93,
    data: [],
  },
  {
    fileName: '3.16-two-wide-table-side-by-side-on-same-page.pdf',
    textProductsCount: 34,
    data: [],
    // CPT - 1
    // EF - 1
    // LVT - 1
    // PFT - 2
    // QT - 1
    // RT - 2
    // S.C. - 1 - ??
    // ST - 1
    // B - 4
    // FRP - 1
    // PT - 5
    // PWT - 2
    // WP - 1
    // PL - 3
    // QTZ - 2
    // ACT - 2
    // PTD. GYP. - 1
    // TR - 3
  },
  {
    fileName: '3.17-table-endswith-symbol-and-notused.13699.pdf',
    textProductsCount: 61, // +
    data: [],
    // ACP - 1
    // CHR.RL - 1
    // CONC - 2
    // CSWK - 2
    // CPT - 2
    // DR - 1
    // ELEV - 2
    // FRP - 1 - ?????
    // FT - 3
    // G - 5
    // GL - 6
    // MS - 1
    // P - 6
    // PLSTR - 3
    // PRCST - 2
    // RPT - 1
    // RP - 1
    // RT - 1
    // RSLT - 2
    // SS - 2
    // TWP - 2
    // WB - 5
    // WNDW - 1
    // WOM - 1
    // WT - 7
  },
  {
    fileName: '3.18-wide-table-symbol-with-suffix-12907-589046-fs.pdf',
    textProductsCount: 12, // +
    data: [],
    // SC - 1
    // T - 3
    // B - 1
    // P - 3
    // Q - 1
    // PLAM - 2
    // WT - 1
  },
  {
    //problems
    fileName: '3.20.wide-table-CPT500.pdf',
    textProductsCount: 170,
    data: [],
  },
  {
    //problems
    fileName: '3.21.wide-table-CPT200-A-B.pdf',
    textProductsCount: 171,
    data: [],
  },
  {
    //problems
    fileName: '3.22.wide-table-T-2 ALT-A.pdf',
    textProductsCount: 82,
    data: [],
    // CPT - 1
    // EX - 1
    // WF - 1
    // GR - 3
    // PT - 5
    // WC - 3
    // MB - 2
    // RB - 2
    // WB - 1
    // T - 5
    // PL - 2
    // SS - 2
    // WD - 2
    // ACP - 1
    // ACT - 1
    // DRP - 1
    // MT - 1
    // GL - 1
    // UPH - 1
    // FWP - 1
    // SC - 1
    // SH - 1
    // FWP-{number} ALT - 1
    // MB-{number} ALT - 3
    // P - 1
    // SH-{number} ALT - 1
    // SS-{number} ALT - 2
    // T-1 ALT - 2
    // T-2 ALT - 3
    // T-3 ALT - 1
    // P - 6
    // AP - 17
    // AC - 6
  },
  {
    //problems
    fileName: '3.23.wide-table-CPT-1.pdf',
    textProductsCount: 51,
    data: [],
  },
  {
    fileName: '3.24.wide-table-TL-1.pdf',
    textProductsCount: 22,
    data: [],
    // RB - 1
    // WB - 3
    // HDW - 1
    // P - 3
    // PL - 2
    // SS - 2
    // TL - 3
    // WD - 2
    // S - 5 -- DOUBLECHECK
  },
  {
    //problems
    fileName: '3.25.table-CPT3.pdf',
    textProductsCount: 128,
    data: [],
  },
  {
    fileName: '3.27-table-CPC-C-01.pdf',
    textProductsCount: 7,
    data: [],
    // CPC - 2
    // CPR - 5
  },
  {
    fileName: '3.28.LVT-1.pdf',
    textProductsCount: 21, // +
    data: [],
    // LVT - 2
    // RUG - 1
    // B - 2
    // CTW - 2
    // CTB - 1
    // CTF - 1
    // WDF - 1
    // PT - 5
    // WF - 1
    // PT - 1
    // PL - 2
    // SS - 2
  },
  {
    fileName: '3.29.table-CP2.pdf',
    textProductsCount: 43, // +
    data: [],
    // CP - 2
    // LVT - 2
    // SV - 1
    // VCT - 1
    // PTF - 1
    // TZT - 1
    // PTB - 1
    // SOSB - 1
    // RB - 3
    // SVB - 1
    // P - 6
    // FWP - 1
    // WC - 2
    // PTW - 2
    // APC - 2
    // WDC - 1
    // PGB - 1
    // PL - 2
    // SOSF - 2
    // PP - 1
    // SPF - 2
    // WWP - 1
    // WP - 2
    // CG - 2
    // RS - 1
    // DG - 1
  },
  {
    //problems
    fileName: '3.31-PC-SC.pdf',
    textProductsCount: 120,
    data: [],
  },
  {
    //problems
    fileName: '3.32.table-T-11.2.pdf',
    textProductsCount: 76,
    data: [],
  },
  {
    fileName: '4.2 narrow table, drawing above.pdf',
    textProductsCount: 25, //+
    data: [],
    // C 1
    // SC 1
    // SD 1
    // RF 1
    // B 3
    // P 4
    // WT 2
    // ??  1
    // PL  4
    // SS 2
    // CP 2
    // FILM 1
    // ALT 2
  },
  {
    fileName:
      '5.1 med table, vertical, 3 cols, col 1 symbol, col2 header, col 3 text, header alignment off - edge case.pdf',
    textProductsCount: 23, //+
    data: [],
    // CPT 2
    // LVT 1
    // TF 1
    // SDT 1
    // PT 3
    // WT 3
    // PT 1
    // SS 1
    // WD 1
    // RB 1
    // WB 2
    // AFP 1
    // ACT 1
    // SC 1
    // PM 1
    // PT 1
    // AB 1
  },
  {
    fileName:
      '5.2 med table, std symbol, trade row then col1, symbol, col2 headers, col 3 text.pdf',
    textProductsCount: 43, // +
    data: [],
    // PT - 3
    // CSG - 1
    // WC - 1
    // FRP - 1
    // WT - 15
    // GF - 1
    // WB - 3
    // SS - 1
    // SS - 1
    // PL - 2
    // WD - 2
    // CSG - 2
    // CPT - 3
    // LRAR - 1
    // T - 2
    // SC - 1
    // VCT - 1
    // ACT - 2
  },
  {
    fileName:
      'A3_02A MS North Room Finish Schedule_ Material And Color Schedule_7.pdf',
    textProductsCount: 29, // +
    data: [],
  },
  {
    //problems
    fileName: 'Acaydia Spa.pdf',
    textProductsCount: 122,
    data: [],
  },
  {
    //problems
    fileName: 'CELINA SCHOOL - Combined totals and notes.pdf',
    textProductsCount: 42, // +
    data: [],
    // LVT - 7
    // VT - 5
    // CPT - 3
    // WCT - 2
    // HC - 1
    // RA - 1
    // RES - 5
    // RST - 2
    // RB - 2
    // TS - 9
    // VT - 5
    // and 4 products as alternative
  },
  {
    fileName: '2.15-ocr-weird-font-597583_12.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName:
      '3.4 wide table, OCR required, std symbol, col 2 is symbol, rows grouped by trade column (col 1), col2+ has headers.pdf',
    imgProductsCount: 21,
    textProductsCount: 0,
    data: [],
  },
  {
    fileName:
      '3.5 wide table, OCR required, std symbol, col 1 is symbol, has headers.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: '3.7 wide table, OCR required.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: '3.8 wide table.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: '3.11 wide table.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName:
      '3.19.three-wide-tables-side-by-side-on-sampe-page-13569-594261-fs.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: '3.26.table-CPT.pdf',
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: '2.13 Narrow, OCR, vertical symbols in a shape.pdf',
    imgProductsCount: 23,
    textProductsCount: 0,
    data: [],
  },
  {
    fileName: 'Caleb - Tractor Supply MuskegonMI641SOW.pdf',
    textProductsCount: 0,
    data: [],
  },
];
// WIP
export const finish2_12Data: DesignationGroup[] = [
  {
    designationGroup: 'RB',
    products: [
      {
        designation: 'RB01',
        manufacturerName: 'ALLSTATE',
        productTypeName: 'Rubber Wall Base',
        colorName: 'WHITE',
        colorNumber: 'A01',
        size: '2.5"H X 1/8" THICK',
      },
    ],
  },
  {
    designationGroup: 'MT',
    products: [
      {
        designation: 'MT01',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Metal Trim',
        colorName: 'ARUBA CERAMIC WHITE',
        finish: 'BHMA 613 / US10B OIL RUBBED BRONZE',
      },
      {
        designation: 'MT02',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Metal Base',
        // "thickness": "1/8" THICK"
      },
    ],
  },
  {
    designationGroup: 'WB',
    products: [
      {
        designation: 'WB01',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Wood Base',
        size: ' 2.5"H',
        productName: 'STRAIGHT BASE',
        colorName: 'TO MATCH PT-01',
      },
      {
        designation: 'WB02',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Wood Base',
        finish: '2.5"H STRAIGHT BASE',
        colorName: 'BENJAMIN MOORE CLOUD GRAY',
        colorNumber: '2140-40',
      },
    ],
  },
  {
    designationGroup: 'AC',
    products: [
      {
        designation: 'AC01',
        manufacturerName: 'HAFELE',
        productTypeName: 'Pantry Cabinet Pull',
        productNumber: '#106.70.040',
        finish: 'FLAT MATTE BLACK',
      },
      {
        designation: 'AC02',
        manufacturerName: 'SCHLUTER',
        productName: 'JOLLY TRIM',
        productTypeName: 'Bathroom Corner Transition',
        finish: 'STAINLESS STEEL',
      },
      {
        designation: 'AC03',
        manufacturerName: 'SCHLUTER',
        productTypeName: 'Bathroom Tile Transition',
        productName: 'SCHIENE',
        finish: 'STAINLESS STEEL',
      },
    ],
  },
  {
    designationGroup: 'CT',
    products: [
      {
        designation: 'CT01',
        manufacturerName: 'WALKER ZANGER',
        productTypeName: 'Wall Tile',
        colorName: '6TH AVENUE COCOON FOG',
        colorNumber: '1SIX1FOGCOC',
        finish: 'GLOSSY',
        size: 'MOSAIC',
      },
      {
        designation: 'CT02',
        manufacturerName: 'TILEBAR',
        productTypeName: 'Wall Tile',
        colorName: 'ARUBA CERAMIC WHITE',
        finish: 'POLISHED',
        size: '5" X 10"',
      },
    ],
  },
  {
    designationGroup: 'WV',
    products: [
      {
        designation: 'WV01',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Wood Veneer',
      },
    ],
  },
  {
    designationGroup: 'PL',
    products: [
      {
        designation: 'PL01',
        manufacturerName: 'FORMICA',
        productTypeName: 'Plastic Laminate',
        colorName: 'MILLENNIUM OAK',
        colorNumber: '5887-58',
        finish: 'MATTE',
      },
    ],
  },
  {
    designationGroup: 'SS',
    products: [
      {
        designation: 'SS01',
        manufacturerName: 'ABC STONE',
        productTypeName: 'Solid Surface',
        colorName: 'THALIA GREY',
        finish: 'HONED FINISH',
      },
      {
        designation: 'SS02',
        manufacturerName: 'CAMBRIA',
        productTypeName: 'Solid Surface',
        colorName: 'IRONSBRIDGE',
        finish: 'HONED FINISH',
      },
    ],
  },
  {
    designationGroup: 'WT',
    products: [
      {
        designation: 'WT01',
        manufacturerName: 'MECHOSHADE',
        productTypeName: 'Window Treatment',
        // "productName": "1500 SERIES THERMOVEIL DENSE BASKETWEAVE",
        colorName: 'EGGSHELL',
        colorNumber: '#1516',
      },
    ],
  },
  {
    designationGroup: 'CP',
    products: [
      {
        designation: 'CP01',
        manufacturerName: 'BENTLEY CARPET',
        productTypeName: 'Carpet',
        productName: '4SET40AA0T SHAPESHIFTER',
        productNumber: '400021',
        colorName: 'WAVEFORM',
        finish:
          'GC TO PROVIDE SEAMING DIAGRAM FOR ARCHITECT REVIEW AND APPROVAL',
      },
      {
        designation: 'CP02',
        manufacturerName: 'MODULYSS',
        productTypeName: 'Carpet',
        productName: 'ALPHA',
        productNumber: '983',
        colorName: 'GREY',
        finish:
          'GC TO PROVIDE SEAMING DIAGRAM FOR ARCHITECT REVIEW AND APPROVAL',
      },
    ],
  },
  {
    designationGroup: 'PB',
    products: [
      {
        designation: 'PB01',
        manufacturerName: 'TILEBAR',
        colorName: 'ARUBA CERAMIC WHITE',
        finish: 'POLISHED',
        size: '5" X 10"',
        productTypeName: 'Porcelain Base',
      },
    ],
  },
  {
    designationGroup: 'PT',
    products: [
      {
        designation: 'PT01',
        manufacturerName: 'BENJAMIN MOORE',
        productTypeName: 'Ceiling Paint',
        colorName: 'WHITE OC-152',
        finish: 'ULTRA FLAT #508,WATERBORNE CEILING PAINT',
      },
      {
        designation: 'PT02',
        manufacturerName: 'BENJAMIN MOORE',
        productTypeName: 'Wall Paint',
        colorName: 'WHITE OC-151',
        finish:
          'EGGSHELL ON ALL WALLS, SEMI-GLOSS ON ALL DOORS, TRIMS AND FRAMES',
      },
      {
        designation: 'PT03',
        manufacturerName: 'SHERWIN WILLIAMS',
        productTypeName: 'Wall Paint',
        colorName: 'COLONNADE GRAY SW 7641',
        finish:
          'EGGSHELL ON ALL WALLS, SEMI-GLOSS ON ALL DOORS, TRIMS AND FRAMES',
      },
      {
        designation: 'PT04',
        manufacturerName: 'BENJAMIN MOORE',
        productTypeName: 'Ceiling Paint',
        colorName: 'CHANTILLY LACE OC-65',
        finish: 'ULTRA FLAT #508,WATERBORNE CEILING PAINT',
      },
      {
        designation: 'PT05',
        manufacturerName: 'SCUFFMASTER PAINTS',
        productTypeName: 'Elevator Doors',
        colorName: 'SOLID METALS, COLOR TO MATCH MT-01',
        finish: 'SPRAYED FINISH',
      },
      {
        designation: 'PT06',
        manufacturerName: 'SHERMAN WILLIAMS',
        productTypeName: 'Ceiling Paint',
        colorName: '6990 CAVIAR',
        finish: 'ULTRA FLAT #508,WATERBORNE CEILING PAINT',
      },
    ],
  },
  {
    designationGroup: 'SDT',
    products: [
      {
        designation: 'SDT01',
        manufacturerName: 'EXCELON SDT',
        productTypeName: 'Static Dissipative Tile',
        colorName: 'PEARL WHITE/ 51953',
      },
    ],
  },
  {
    designationGroup: 'WC',
    products: [
      {
        designation: 'WC01',
        manufacturerName: 'MAHARAM',
        productTypeName: 'Wallcovering',
        productName: 'TEK-WALL TRUSS',
        colorName: 'STONE 399821-001',
        finish: 'PROVIDE LEVEL 5 FINISH AT ALL LOCATIONS',
      },
      {
        designation: 'WC02',
        manufacturerName: 'KOROSEAL',
        productTypeName: 'Wallcovering',
        colorName: 'STREAM 67333',
        finish: 'PROVIDE LEVEL 5 FINISH AT ALL LOCATIONS',
      },
      {
        designation: 'WC03',
        manufacturerName: 'MAHARAM',
        productTypeName: 'Wallcovering',
        productName: 'TEK-WALL TRUSS',
        colorName: '1003-006',
        finish: 'PROVIDE LEVEL 5 FINISH AT ALL LOCATIONS',
      },
    ],
  },
  {
    designationGroup: 'VT',
    products: [
      {
        designation: 'VT01',
        manufacturerName: 'JOHNSONITE',
        productTypeName: 'Vinyl Tile',
        colorName: 'MELODIA 603 ANCHOR CG',
      },
    ],
  },
  {
    designationGroup: 'CC',
    products: [
      {
        designation: 'CC01',
        manufacturerName: 'UNKNOWN',
        productTypeName: 'Exposed Concrete',
        finish:
          'POLISHED TO A 3000 GRIT STANDARD HIGH GLOSS SEAL WITH PERMAGUARD SPS',
      },
    ],
  },
  {
    designationGroup: 'PC',
    products: [
      {
        designation: 'PC01',
        manufacturerName: 'ATLAS CONCORDE',
        productTypeName: 'Porcelain Floor Tile',
        productName: 'MARK GYPSUM RT',
        size: '12" X 24" STACKED INSTALLATION AT RESTROOMS. 24" X 24" STACKED INSTALLATION AT ELEVATOR LOBBY AND CORRIDORS',
      },
    ],
  },
  {
    designationGroup: 'LVT',
    products: [
      {
        designation: 'LVT01',
        manufacturerName: 'SIBERIAN FLOORS- ENGINEERED WOOD FLOOR',
        productTypeName: 'Luxury Vinyl Tile',
        colorName: 'RUSSIAN WHITE OAK',
      },
    ],
  },
];
