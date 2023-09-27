import React from 'react';

const Baanner = () => {
    return (
        // <div className='flex items-center justify-center h-[60vh] bg-[url("https://i.ibb.co/x1KRTKb/Rectangle-4281.png")]'>

        //     <div className=''>
        //         <h1 className='text-4xl font-bold'>I Grow By Helping People In Need</h1>
        //         <div className='text-center mt-5'>
        //         <input type="text" placeholder="Search here....." className='input input-bordered w-[320px]' name="" id=""/><button className='btn -ml-6 -mt-1 bg-red-500 text-white border-none'>Search</button>
        //         </div>
        //     </div>
        // </div>
        <div className="h-[60vh] text-center grid bg-cover bg-[url('https://i.ibb.co/x1KRTKb/Rectangle-4281.png')]">
            <div className="col-start-1 row-start-1 bg-white bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <h1 className='text-4xl font-bold mb-7'>I Grow By Helping People In Need</h1>
                <input type="text" placeholder='Search Here....' className='input input-bordered w-[420px]' />
                <span className='-ml-4'><button className='btn bg-red-600 border-none text-white'>Search Here</button></span>
            </div>
        </div>
    );
};

export default Baanner;