import React from 'react'
import { useState ,useEffect} from 'react';
import Card from './Card';

export default function OnlineDelievery() {
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
  return (
    <div>
      <div className='max-w-[1200px] mx-auto px-2 '>
                  <div className='flex my-5 items-center justify-between'>
                      <div className='text-[25px] font-bold'>Restaurant with online food delievery in Jaipur</div>
                  </div>
        < div className=' grid grid-cols-2 md:grid-cols-4 gap-4 '>
                    {
                        data.map(
                        (d,i) => {
                            return <Card key={i} {...d} />
                        }
                        
                    )
                    }
                </div>
                </div>
            </div>
  )
}
