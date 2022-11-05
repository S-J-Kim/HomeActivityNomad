import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import OttContentDetail from './OttContentDetail';

const CurationDetailRelatedInfo = ({ item }) => {
  const { type } = item;
  const [relatedInfo, setRelatedInfo] = useState(() => {
    switch (type) {
      case 'Food':
      case 'Dessert':
      case 'Media':
      case 'Workout':
      default:
        return {
          title: '레시피',
          component: <OttContentDetail item={item} />,
        };
    }
  });

  return (
    <Fragment>
      {/* <h2>{relatedInfo.title}</h2> */}
      {relatedInfo.component}
    </Fragment>
  );
};

export default CurationDetailRelatedInfo;
