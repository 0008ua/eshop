export interface ICatalog {
  _id: string;
  name: string;
  ancestors: string[];
  parent: string;
  scrollableForIds: string[];
  auth: string;
  order?: number;
  picture?: string;
  description?: string;
  prefix: string;
  seoTitle: string;
  seoMeta: string;
}

export interface IProduct {
  _id: string;
  name: string;
  parent: string;
  picture?: string;
  description?: string;
  seoTitle: string;
  seoMeta: string;
}
