import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageLazy = ({ alt, src, height=300, width=300, rounded=false  }) => (
    <div className="image">
        <LazyLoadImage
            style={{ borderRadius: rounded ? 50 : 0 }}
            alt={alt}
            height={height}
            effect="blur"
            src={src} // use normal <img> attributes as props
            width={width} />
    </div>
);

ImageLazy.propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    rounded: PropTypes.bool
};

export default ImageLazy;