import React from 'react';
import Card from './Card/Card';
import './Works.scss';

export default function Works() {
  return <div className='card__container'>
    <Card html={'html 5'}/>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>;
}
