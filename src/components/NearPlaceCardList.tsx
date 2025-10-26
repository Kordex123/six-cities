import {NearPlaceCard} from './NearPlaceCard.tsx';
import {Offer} from '../types/Offer.ts';

interface NearPlaceCardListProps {
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

export const NearPlaceCardList = (props: NearPlaceCardListProps) => {
  const {offers, setOffers} = props;

  const nearestOffers = offers.slice(0, 3);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearestOffers.map((offer) => <NearPlaceCard key={offer.id} offer={offer} offers={offers} setOffers={setOffers}/>)}
      </div>
    </section>
  );
};
