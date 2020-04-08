import React from 'react';

const MenuList = (props) => {
    return(
        <React.Fragment>
            <div className={props.padding}>Loja</div>
            <div className={props.padding}>Tapetes</div>
            <div className={props.padding}>Móveis</div>
            <div className={props.padding}>Objetos</div>
            <div className={props.padding}>Profissionais</div>
            <div className={props.padding}>Contato</div>
        </React.Fragment>
    );
}

const Horizontal = () => {
    return(
        <div className="d-flex justify-content-around align-self-stretch p-1 border">
            <MenuList padding={'p-2'} />
        </div>);
}

const Vertical = () => {
    return(
        <div className="d-flexflex-column">
            <MenuList />
        </div>
    );
}

const Menu = (props) => {
    return (
        <div>
            {props.horizontal && (
                <Horizontal />
            )}

            {!props.horizontal && (
                <Vertical />
            )}  
        </div>
    );
}

export default Menu;