import {Link} from 'react-router-dom';
import {Offer} from '../types/Offer.ts';

interface NearPlaceCardProps {
  offer: Offer;
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

export const NearPlaceCard = (props:NearPlaceCardProps) => {

  const {offer, offers, setOffers } = props;

  const handleBookmarkClick = () => {
    setOffers(offers.map((offerItem) => ({
      ...offerItem,
      isFavorite: offerItem.id === offer.id ? !offer.isFavorite : offerItem.isFavorite
    })));
  };

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`} onClick={ () => {
          window.scrollTo(0, 0);
        }}
        >
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={handleBookmarkClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * 20}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} >{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};
