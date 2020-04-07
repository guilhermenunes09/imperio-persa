import React from 'react';
import logotipo from '../img/logotipo.png';
import arabesco from '../img/arabesco_2.png';

const Header = () => {
    return (
        <div className="Header d-flex flex-column">
            
                
                <div className="border text-center p-2"><img src={logotipo} width={290} /></div>

                <div className="border text-center p-2"><img src={arabesco} width={170} /></div>
                
               
                <div className="d-flex justify-content-around align-self-stretch p-1 border">
                    <div className="p-2 bd-highlight">Flex Item</div>
                    <div className="p-2 bd-highlight">Flex Item</div>
                    <div className="p-2 bd-highlight">Flex Item</div>
                    <div className="p-2 bd-highlight">Flex Item</div>
                    <div className="p-2 bd-highlight">Flex Item</div>
                    <div className="p-2 bd-highlight">Flex Item</div>
                </div>
        


        </div>
    );
}

export default Header;