//
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


function Profile() {
    
    const { data, error } = useSWR('https://greenshophorizontteam.herokuapp.com/product', fetcher)
    console.log(data,'res');
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    const filter1 = () => {
        let res = dataProducts.filter((item) => {
            return item.type === "houseplants";
        });
        setData(res);
        setActive("houseplants");
    };
    
  return (
    <div>
        {data[0].title}
      <Image
    alt="The guitarist in the concert."
/>
    
    </div>
  )
}
export default  Profile
