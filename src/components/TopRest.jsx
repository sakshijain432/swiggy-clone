import { useEffect, useState } from "react";
import Card from './Card';
import {FaArrowRight ,FaArrowLeft, FaArrowsLeftRight} from "react-icons/fa6";

export default function TopRest() {
    const[data,setData] = useState([]);

    const fetchTopRestaurant = async() => {
        const response = await fetch("http://localhost:3000/top-restaurant-chains");
        const apidata = await response.json();
        setData(apidata);
    }
    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )
    return(
        <div className='max-w-[1200px] mx-auto px-3'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top Restaurant in Jaipur</div>
                <div className='flex'>
                    <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft /></div>
                    <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex gap-5 overflow-hidden">
                {
                    data.map(
                        (d,i) =>{
                            return <Card width="w-full md:w-[273px]" {...d} key={i}/>
                        }
                    )
                }
                
            </div>
               <hr className='my-8 border-[1px]' />
       </div>
    )
}