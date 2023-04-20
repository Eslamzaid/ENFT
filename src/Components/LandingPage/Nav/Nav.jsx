import React from 'react';
import TextLogo from './../../../assets/Icons/LogoText.png'

const Nav = () => {
    return (
        <div className=' child:text-white font-bodyFont font-semibold child:px-5 flex items-center justify-end w-[100em] py-6'>
            <img src={TextLogo} alt="ENFT" className=' mr-auto h-14'/>
            <button>MarketPlace</button>
            <button>Collection</button>
            <button>Community</button>
            <button>Bid now</button>
            <button className=' '>Connect Wallet</button>
        </div>
    );
};

export default Nav;