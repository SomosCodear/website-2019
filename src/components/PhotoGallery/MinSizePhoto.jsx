import * as R from 'ramda';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImagePropTypes } from './propTypes';

const findBiggerImage = R.curry((minSize, images) => {
  const sortedImages = R.sortBy(R.prop('width'))(images);
  const biggerImage = R.find(R.lte(minSize))(sortedImages);

  return R.defaultTo(R.last(sortedImages))(biggerImage);
});

export const MinSizePhoto = ({ minSize, images, alt, ...props }) => {
  const { source } = useMemo(() => findBiggerImage(minSize, images), [minSize, images]);

  return <LazyLoadImage src={source} alt={alt} {...props} threshold={1000} />;
};

MinSizePhoto.propTypes = {
  minSize: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape(ImagePropTypes)).isRequired,
  alt: PropTypes.string.isRequired
};
