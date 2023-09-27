import React from 'react';

const Donationpagecard = ({ donate }) => {
    //console.log(donate);
    const { id, card_bg, photo, title, category, price, category_bg, textcol } = donate
    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" className='h-full' /></figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor: category_bg, color: textcol }} className="btn border-none">{category}</button>
                    </div>
                    <h2 className="card-title font-bold">{title}</h2>
                    <p style={{color:textcol}} className='text-xl font-semibold'>${price}</p>
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor:textcol }} className="btn border-none text-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donationpagecard;