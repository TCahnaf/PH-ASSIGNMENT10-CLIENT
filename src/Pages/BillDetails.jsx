import React from 'react';
import { useLoaderData } from 'react-router';

const BillDetails = () => {

    const bill = useLoaderData();
    return (
        <div>

            <div className='flex gap-5 mt-20'>

            <div className = "flex flex-col">
                  <div>
                <img className='image' src= {bill.image}></img>
            </div>

            <div>
                <h1>Bill Description</h1>
                {/* add a border */}
                <p></p>
            </div>
            </div>

            <div className='flex flex-col'>

                <div className='border-2  border-sky-700 h-[109px]'>
                    {/* bill title */}
                </div>
                <div>
                    {/* bill category */}
                </div>

            </div>
    


            </div>

            

          


          
        </div>
    );
};

export default BillDetails;