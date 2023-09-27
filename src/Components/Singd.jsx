import React from 'react';
import { Link } from 'react-router-dom';

const Singd = ({ single }) => {
    //console.log(single);
    const { id, photo, card_bg, category, title, textcol, category_bg } = single
    return (
        <div>
            {/* <div style={{backgroundColor:card_bg}} className="card card-compact shadow-xl">
                <figure><img src={photo} alt="Shoes" className="h-40 w-full" /></figure>
                <div className="card-body">
                    <div>
                        <button style={{backgroundColor:category_bg, color:textcol}} className="btn border-none">{category}</button>
                    </div>
                    <h2 style={{color:textcol}} className="card-title text-lg">{title}</h2>
                   <Link to={`/donate/${id}`}>
                   <button className='btn'>click</button>
                   </Link>
                </div>
            </div> */}
            <Link to={`/donate/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="card card-compact shadow-xl">
                    <figure><img src={photo} alt="Shoes" className="h-40 w-full" /></figure>
                    <div className="card-body">
                        <div>
                            <button style={{ backgroundColor: category_bg, color: textcol }} className="btn border-none">{category}</button>
                        </div>
                        <h2 style={{ color: textcol }} className="card-title text-lg">{title}</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Singd;