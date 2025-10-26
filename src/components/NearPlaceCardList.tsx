import {NearPlaceCard} from './NearPlaceCard.tsx';
import {getOffers} from '../mocks/offers.ts';

export const NearPlaceCardList = () => {

  const nearestOffers = getOffers().slice(0, 3);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearestOffers.map((offer) => <NearPlaceCard key={offer.id} offer={offer}/>)}
      </div>
    </section>
  );
};
