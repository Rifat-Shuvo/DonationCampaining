import React from 'react';
import swal from 'sweetalert';

const Singdoncard = ({donatecard}) => {
    //console.log(donatecard);
    const {id, photo, title,description,textcol,price} = donatecard

    const handleAddtoDonate = ()=>{
        //console.log(donatecard);
        const addedDonatesArray = []
        
        const donatedItems = JSON.parse(localStorage.getItem('donated'))

        if (!donatedItems) {
            addedDonatesArray.push(donatecard)
            localStorage.setItem('donated',JSON.stringify(addedDonatesArray))
            swal("Great job!", "You sucessfully added your donation!", "success");
            // alert('already added')
        } else {

            const isExist = donatedItems.find(donatecard=>donatecard.id == id)
            if (!isExist) {
                addedDonatesArray.push(...donatedItems,donatecard)
                localStorage.setItem('donated',JSON.stringify(addedDonatesArray))
                // alert('already added')
                 swal("Great job!", "You sucessfully added your donation!", "success")
            } 
            else {
                swal("Ooopppss!", "You Allready Donated!", "error"); 
            }

            
        }
    }

    return (
        <div className='px-5'>
            <div className='my-6 py-5 relative'>
                <img src={photo} alt="" className='w-full h-[60vh] rounded-none' />
                <div style={{backgroundColor:"rgba(11, 11, 11, 0.50)"}} className='w-full h-24 absolute bottom-5 left-0'>
                <button style={{backgroundColor:textcol}} onClick={handleAddtoDonate} className='m-7 btn border-none text-white'>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className='my-5'>{description}</p>
            </div>
        </div>
    );
};

export default Singdoncard;