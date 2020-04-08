import React from 'react';
import BigImage from './bigimages.js';
import CarpetsIndex from '../carpets/index.js';

import StoreIndex from '../pages/store/index.js';
import FurnitureIndex from '../pages/furniture/index.js';
import ObjectsIndex from '../pages/objects/index.js';
import ProfessionalsIndex from '../pages/professionals/index.js';
import ContactIndex from '../pages/contact/index.js';


const Pages = () => {
    return (
        <div className="Pages">
            <BigImage />
            
            <StoreIndex />
            <CarpetsIndex />
            <FurnitureIndex />
            <ObjectsIndex />
            <ProfessionalsIndex />
            <ContactIndex />
            
           
            
            Estas são páginas
        </div>
    );
}

export default Pages;