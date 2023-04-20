import React from 'react'
import '../style.css'
import { useEffect, useState } from "react";
import Chart from './chart';

function Mid_block() {
    const [data, setdata] = useState();

    useEffect(() => {
      const fetchDatas = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
        const data = await res.json();
        console.log(data);
        setdata(data?.data);
      };
      fetchDatas();
    }, []);
  
  return (
    <div className='mid_main'>
        <div className='p1'> 
            <p><strong>Activities</strong></p>
        </div>

        <div className='p2'>
        <p>May-June 2021</p>
        </div>
        <Chart data={data}></Chart>
    </div>
  )
}

export default Mid_block