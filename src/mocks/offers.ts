import {getArray} from '../util/arrayUtil.ts';
import {CITIES} from './cities.ts';
import {OFFER_TYPES} from '../types/OfferType.ts';
import * as faker from 'faker';

export const getOffers = () =>
  getArray(100).map((i: number) => ({
    id: i,
    city: CITIES[i % CITIES.length],
    type: OFFER_TYPES[i % OFFER_TYPES.length],
    position:  CITIES[i % CITIES.length].position,
    title: faker.address.streetAddress(),
    price: faker.datatype.number(),
    isFavorite: i % 3 === 0,
    isPremium: faker.datatype.boolean(),
    rating: faker.datatype.number(),
    description: faker.datatype.string(),
    bedrooms: faker.datatype.number(),
    goods: [faker.datatype.string()],
    host: { name: faker.name.firstName(), avatarUrl: faker.internet.url(), isPro: faker.datatype.boolean()},
    images: [faker.internet.url(), faker.internet.url()],
    maxAdults: faker.datatype.number(),
    previewImage: faker.internet.url(),
  }));
