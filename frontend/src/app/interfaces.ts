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
