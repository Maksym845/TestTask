export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export enum REACT_QUERY {
  PHOTOS = 'PHOTOS',
}
