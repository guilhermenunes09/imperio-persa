import React from 'react';
import Carousel from 'react-images';

const images = [{ src: require('../galery/Shaggy3d.jpg')},
{ src: require('../galery/thum1.jpg.jpg')}];

const CarpetsIndex = () => {
    return (
        <div className="Carpets">
            <h1>Tapetes</h1>
            <p>Tapetes Tradicionais</p>
            <Carousel views={images} />;

            <p>Tapetes Modernos</p>
            <Carousel views={images} />;
        </div>
    );
}

export default CarpetsIndex;