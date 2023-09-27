import React, { useEffect, useState } from 'react';
import Piecharts from './Piecharts';

const Statistics = () => {
    const [nothing, setNothing]=useState(true)
    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        //let total = donatedItems.length 
        //console.log(total);
        if (donatedItems == null) {
            setNothing("Nothing to show in statistics. If You add donation then the statistics of your donation is shown")
        }
        else{
            setNothing(false)
        }
    },[])
    return (
        <div>
            {nothing? <p className='h-[80vh] flex justify-center items-center text-4xl font-medium px-7'>{nothing}</p>: <Piecharts></Piecharts>

            }
        </div>
    );
};

export default Statistics;