import {NearPlaceCard} from './NearPlaceCard.tsx';

export const NearPlaceCardList = () => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      <NearPlaceCard />
    </div>
  </section>
);
