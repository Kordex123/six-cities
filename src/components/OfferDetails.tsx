import {useParams} from 'react-router-dom';
import {Reviews} from './Reviews.tsx';
import {NearPlaceCardList} from './NearPlaceCardList.tsx';
import {Offer} from '../types/Offer.ts';
import {OfferMap} from './OfferMap.tsx';
import styled from 'styled-components';

interface OfferDetailsProps {
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

export const OfferDetails = (props:OfferDetailsProps) => {
  const { offers, setOffers } = props;
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === Number(id))!;

  const handleBookmarkClick = () => {
    setOffers(offers.map((offerItem) => ({
      ...offerItem,
      isFavorite: offerItem.id === currentOffer.id ? !currentOffer.isFavorite : offerItem.isFavorite
    })));
  };

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {currentOffer?.images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {currentOffer?.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{currentOffer?.title}</h1>
              <button className="offer__bookmark-button button" type="button" onClick={handleBookmarkClick} >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{'width': '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{currentOffer?.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {currentOffer?.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer?.bedrooms}
              </li>
              <li className="offer__feature offer__feature--adults">
                {currentOffer?.maxAdults}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer?.goods.map((furnishingItem: string) => (
                  <li key={furnishingItem} className="offer__inside-item">
                    {furnishingItem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74" height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {currentOffer?.host.name}
                </span>
                {currentOffer?.host.isPro && (<span className="offer__user-status">Pro</span>)}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {currentOffer?.description}
                </p>
                <p className="offer__text">
                  {currentOffer?.description}
                </p>
              </div>
            </div>
            <Reviews />
          </div>
        </div>
        <MapWrapper className="offer__map map">
          <OfferMap offers={offers}/>
        </MapWrapper>
      </section>
      <NearPlaceCardList offers={offers} setOffers={setOffers}/>
    </>
  );
};

const MapWrapper = styled.section`
  display: flex;
  justify-content: center;
  #map {
    width: 1200px;
    height: 600px;
  }
`;
