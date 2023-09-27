import React, { useEffect, useState } from 'react';
import Donationpagecard from './Donationpagecard';

const Donationspage = () => {

    const [donates, setDonates] = useState([])
    const [noFound, setNoFound] = useState(false)
    const[isShow,setIsShow] = useState(false)
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        if (donatedItems) {
            setDonates(donatedItems)
        } else {
            setNoFound("Nothing is donated")
        }
    }, [])
    //console.log(donates);
    return (
        <div className='max-w-7xl mx-auto'>
            {noFound ? <p className='h-[80vh] flex justify-center items-center text-4xl font-medium'>{noFound}</p> :
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 m-5'>
                        {
                            isShow? donates.map(donate=><Donationpagecard key={donate.id} donate={donate}></Donationpagecard>)
                            :
                            donates.slice(0,4).map(donate=><Donationpagecard key={donate.id} donate={donate}></Donationpagecard>)
                        }
                    </div>
                    {
                        donates.length>4 && <button onClick={()=>setIsShow(!isShow)} className="btn px-5 bg-green-800 block mx-auto text-white">
                        {isShow ? "See less" : "See All"}
                      </button>
                    }
                </div>}
        </div>
    );
};

export default Donationspage;