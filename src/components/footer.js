import React from 'react';
import Menu from '../components/menu.js';

const Footer = () => {
    return (
        <div className="Footer row">
            <div className="border col">
                <Menu horizontal={false} />
            </div>

            <div className="border col border">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-around align-self-stretch p-1 border">
                        Copyright
                    </div>
                    <div className="d-flex justify-content-around align-self-stretch p-1 border">
                        Copyright
                    </div>
                    <div className="d-flex justify-content-around align-self-stretch p-1 border">
                        Copyright
                    </div>
                </div>
            </div>

            <div className="border col">
                <div className="d-flex flex-row">
                    <div className="border">
                        Social Network
                    </div>
                    <div className="border">
                        Social Network
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;