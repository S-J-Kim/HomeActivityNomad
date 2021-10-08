import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import FoodRecipe from './FoodRecipe';

const CurationDetailRelatedInfo = ({ item }) => {
  const { type } = item;
  const [relatedInfo, setRelatedInfo] = useState(() => {
    switch (type) {
      case 'Food':
        return {
          title: '레시피',
          component: <FoodRecipe item={item} />,
        };
      case 'Dessert':

      case 'Media':
      case 'Workout':
    }
  });

  return (
    <Fragment>
      <h2>{relatedInfo.title}</h2>
      {relatedInfo.component}
    </Fragment>
  );
};

export default CurationDetailRelatedInfo;
