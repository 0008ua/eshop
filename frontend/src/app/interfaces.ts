export interface IUser {
  _id: string;
  displayName: string;
  role: string;
  photoUrl?: string;
  provider?: string;
  loading?: boolean;
  error?: string;
  q?: string;
}

export class User implements IUser {
  constructor(
    public _id: string | null,
    public displayName: string,
    public role: 'guest',
    public photoURL?: string, // TODO add default
    public provider?: string, // TODO add default
    public loading?: boolean, // TODO add default
    public error?: string, // TODO add default
  ) { }
}

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
  parent: string[];
  display: boolean;
  mainImage: string;
  briefImage: string;
  assets: string[];
  techAssets: string[];
  description: string;
  recommendations: string;
  techDescriptions: [
    {
      name: string;
      unit: string;
      value: string;
    }
  ];
  certAssets: string[];
  designs: string[];
  seoTitle: string;
  seoMeta: string;
}

export interface IPictureSize {
  [key: string]: {
    w: number,
    h: number
  };
}

export interface IPictureState {
  size: {
    w: number,
    h: number
  };
  link: string;
}

export enum ScreenTypes {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

export enum PictureTypes {
  ProductPicture = 'ProductPicture',
  DashboardProductPicture = 'DashboardProductPicture',
  ModalProductPicture = 'ModalProductPicture'
}

export interface IFeedback {
  message: string;
  contacts: string;
  name: string;
}
