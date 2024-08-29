import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ProductListItem',
  decorators: [withKnobs]
};

export const standard = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg")}
  />
)