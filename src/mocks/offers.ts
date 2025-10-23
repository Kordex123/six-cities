import {getArray} from "../util/arrayUtil.ts";
import {CITIES} from "./cities.ts";

export const getOffers = () => {
  return getArray(100).map((i: number) => ({ id: i, city: CITIES[i % CITIES.length].title}));
}
