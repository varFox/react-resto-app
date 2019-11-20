import React from 'react';
import './menu-list-item.scss';
import Meet from './meet.png';
import Salad from './salad.jpg';
import Pizza from './pizza.png';

const MenuListItem = ({menuItem}) => {
	const {title, price, url, category} = menuItem;
	let img = new Image();
	img.src = url;
	let defaultUrl = category === 'salads' ? Salad : category === 'meat' ? Meet : Pizza; 
	return (
		<li className="menu__item">
			<div className="menu__title">{title}</div>
			<img className="menu__img" src={url} alt={title} 
				onError={event => event.target.src=defaultUrl}></img>

			<div className="menu__category">Category: <span>{category}</span></div>
			<div className="menu__price">Price: <span>{price}$</span></div>
			<button className="menu__btn">Add to cart</button>
		</li>
	)
}

export default MenuListItem;