import { apiAxios } from '../index';
import { IPhoto } from '../../types/photos';

export const getPhotos = async () => {
  return apiAxios<IPhoto[]>('photos');
};
