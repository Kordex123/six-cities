import {OFFER_IMAGE_URL} from '../const.ts';

export const getImageUrl = (i: number) => `${OFFER_IMAGE_URL}/${i % 20 + 1}.jpg`;
