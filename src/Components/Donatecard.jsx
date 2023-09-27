import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Singdoncard from './Singdoncard';

const Donatecard = () => {

    const[donatecard, setDonatecard] = useState({})

    const {id} = useParams()
    //console.log(params);
    const alldonate = useLoaderData()
    //console.log(alldonate);

   useEffect(()=>{
    const finddonateCard = alldonate.find(donatecard=>donatecard.id == id)

    //console.log(finddonateCard);
    setDonatecard(finddonateCard)
   },[id,alldonate])

   //console.log(donatecard);

    return (
        <div>
            <Singdoncard donatecard={donatecard}></Singdoncard>
        </div>
    );
};

export default Donatecard;