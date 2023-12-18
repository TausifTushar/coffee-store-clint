import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { dataContext } from '../Context/Context';

const AllCard = () => {

    // const allCoffeeCard = useLoaderData()
    // console.log(allCoffeeCard);

    const {coffee, } = useContext(dataContext);
    console.log(coffee)
    return (
        <div>
            <h1 className='text-3xl flex justify-center'>All Coffee Card{coffee._id}</h1>
            <input  type=" search" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
            {
                coffee.map((card)=><Cards key={card._id} card={card} ></Cards>)
            }
        </div>
    );
};

export default AllCard;