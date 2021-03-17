import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import Footer from './Footer';
import Assessments from './assessments';
import { Button_4 } from './Button';
import img from '../images/01.jpg';
function Cards(props) {
    const { name, datetime, id } = props;
    return (
        <>
            <div className="cards" >
                <div className="card">
                    <img src={img}
                        alt="myPic" width="100px" height="100px" className="cards__img" />
                    <div className="card_info">
                        <span className="card__category"> {name} </span>
                        <h3 className="card__title"> {datetime} </h3>
                        <a /*href={props.link}*/
                            target="_blank">
                            <Button_4 name={name} datetime={datetime} id={id}>Submit Solution</Button_4>
                        </a>
                    </div>
                </div>
            </div>
        </>
        //<Cards />
    )
}
export default Cards;



// {function cards()
// {
// return(
// <>
// <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
// title="A Netflix original Series"
// sname="the Witcher"
// link="https://www.netflix.com/title/80990668" />
// </>
// )
// }}














{/*function Cards() {
    return (
        <div className='cards'>
            <h1 className="heading_Style"> Chcek out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items" >
                        <CardItem 
                            src='https://wallpapercave.com/wp/wp4056410.jpg'                  
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/courses'   
                        />
                        <CardItem 
                            src='https://wallpapercave.com/wp/wp4056410.jpg'
                            text='Travel through an irelands of Bali in a Privaet Cruise'
                            label='Luxry'
                            path='/courses'   
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/courses'   
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Travel through an irelands of Bali in a Privaet Cruise'
                            label='Luxry'
                            path='/courses'   
                        />
                        <CardItem 
                            src='images/img-2.jpg'      
                            text='Travel through an irelands of Bali in a Privaet Cruise'
                            label='Luxry'
                            path='/courses'   
                         />
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;*/}
