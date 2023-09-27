import React, { useEffect, useState } from 'react';
import Donate from './Donate';
import { useLoaderData } from 'react-router-dom';
import Baanner from './Baanner';

const Home = () => {

    // const [donations, setDonations] = useState([])

    // useEffect(()=>{
    //     fetch('donation.json')
    //     .then(res=> res.json())
    //     .then(data => setDonations(data))
    // })
const alldonation = useLoaderData()
//console.log(alldonation);
    return (
        <>
        {/* <Baanner></Baanner> */}
        <div className='mt-32 max-w-7xl mx-auto'>
            <Donate donate={alldonation}></Donate>
        </div>
        </>
    );
};

export default Home;