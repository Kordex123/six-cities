import {PlaceCard} from './PlaceCard.tsx';
import {City} from '../types/City.ts';
import {Offer} from '../types/Offer.ts';
import {useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {SortType} from '../types/SortType.ts';

const filteredByCity = (offers:Offer[], city?: City) =>
  offers.filter((offer) => !city?.title || offer.city.title === city?.title);


const sortedByPrice = (offers: Offer[], sortType?: SortType | null) => !sortType ? offers : offers.toSorted((a: Offer, b: Offer) => {
  switch (sortType) {
    case SortType.PriceAsc:
      return a.price - b.price;
    case SortType.PriceDesc:
      return b.price - a.price;
    case SortType.RatingAsc:
      return a.rating - b.rating;
    case SortType.RatingDesc:
      return b.rating - a.rating;
  }
});

interface PlacesProps {
  currentCity?: City;
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

export const Places = (props: PlacesProps) => {

  const {currentCity, offers, setOffers } = props;
  const [placeSortType, setPlaceSortType] = useState<SortType | null>(null);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const onPlaceSortClick = (sortType: SortType) =>
    setPlaceSortType(placeSortType === sortType ? null : sortType);

  const handleSortOptionsClick = () => {
    setShowSortOptions(!showSortOptions);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredByCity(offers, currentCity).length} places to stay in Amsterdam</b>
      <OutsideClickHandler onOutsideClick={() => {
        setShowSortOptions(false);
      }}
      >
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0} onClick={handleSortOptionsClick}>Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          {showSortOptions && (
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0} onClick={() => onPlaceSortClick(SortType.PriceAsc)}>Price: low
                to
                high
              </li>
              <li className="places__option" tabIndex={0} onClick={() => onPlaceSortClick(SortType.PriceDesc)}>Price:
                high
                to low
              </li>
              <li className="places__option" tabIndex={0} onClick={() => onPlaceSortClick(SortType.RatingDesc)}>Top
                rated
                first
              </li>
            </ul>
          )}
        </form>
      </OutsideClickHandler>
      <div className="cities__places-list places__list tabs__content">
        {sortedByPrice(filteredByCity(offers, currentCity), placeSortType).map((offer) => (
          <PlaceCard key={offer.id} offer={offer} offers={offers} setOffers={setOffers}/>
        ))}
      </div>
    </section>
  );
};
