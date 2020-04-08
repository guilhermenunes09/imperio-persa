import React from 'react';
import logotipo from '../img/logotipo.png';
import arabesco from '../img/arabesco_2.png';
import Menu from '../components/menu.js';

const Header = () => {
    return (
        <div className="Header d-flex flex-column">
            
                
                <div className="border text-center p-2"><img src={logotipo} width={290} /></div>

                <div className="border text-center p-2"><img src={arabesco} width={170} /></div>
                
               
                <Menu horizontal={true} />
        


        </div>
    );
}

export default Header;