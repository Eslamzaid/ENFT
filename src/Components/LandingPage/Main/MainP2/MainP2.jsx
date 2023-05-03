import React from 'react';
import data2 from "./MainP2D.js"

const MainP2 = () => {
    return (
        <section>
            <h1>Hi</h1>
            {data2.map(item => {
                return (
                    <img src={item.nft}/>
                )
            })}
        </section>
    );
};

export default MainP2;