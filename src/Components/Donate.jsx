import React from 'react';
import Singd from './Singd';

const Donate = ({ donate }) => {
    //console.log(donate);
    //const { photo, title,card_bg,textcol,category_bg} = donate
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
            {/* <div className="card w-full h-[300px] bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes"/></figure>
                <div style={{backgroundColor:card_bg}} className="card-body">
                <button style={{backgroundColor:category_bg, color:textcol}}>Button</button>
                    <h2 style={{color:textcol}} className="card-title">{title}</h2>
        
                </div>
            </div> */}
            {
                donate.map(singd=>
                <Singd key={singd.id} single ={singd}></Singd>)
            }
        </div>
    );
};

export default Donate;