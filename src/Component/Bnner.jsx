import React from 'react';

const Bnner = () => {
    return (
        <div className='flex flex-col justify-center items-center  w-[122vh]  bg-[url("images/bnr.png")] bg-cover bg-no-repeat h-[55vh]  pt-28'>
            <p className='text-[#ffffffd6] px-[12%]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex justify-center items-center w-full mt-10 gap-5'>
                <button className='bg-[#0BE58A] rounded-full font-bold p-3 px-7'>Explore Now</button>
                <button className='bg-transparent border-[1px] border-[#ffffffe1] rounded-full font-bold p-3 px-7 text-white'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Bnner;