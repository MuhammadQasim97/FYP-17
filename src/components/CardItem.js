import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

function CardItem(props) {
    return (
        <>
          <li className="cards_item" >
            <Link className="cards__item__link" to={props.path} >
                <figure className="cards__item__pic-wrap" className="cards__wrapper" data-category={props.label}>
                    <img src={props.src} alt="Travel Image"  
                    className="cards__item__log"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
                <button className="btn" className="btn--primary" className="btn--outline_2" className="btn--medium">Watch Now</button>
            </Link>
          </li>  
        </>
    )
}

export default CardItem;            
