// Types for the extracted data
export interface Product {
  designation: string;
  manufacturerName: string;
  productTypeName: string;
  collection: string;
  productName: string;
  productNumber: string;
  colorName: string;
  colorNumber: string;
  backing: string;
  size: string;
  shape: string;
  finish: string;
}

export interface ProductGroup {
  designationGroup: string;
  products: Product[];
}

export interface PdfProcessingResult {
  success: boolean;
  text?: string;
  data: ProductGroup[] | 'not_found';
  processedPages?: number;
  error?: string;
}
