import React from 'react';
import '../style.css';

function Top_block() {
  return (
      <div className='top'>
    <div className='top1'>
            <p><i class="fa-regular fa-money-bill-1" ></i></p>
        <div className='data1'>
        Total Revenues
        &nbsp;
        <strong>$2,129,430</strong>
        </div>
    </div>
    
    <div className='top2'>
    <i className="fa-solid fa-tags"></i>
    <div className='data2'>
        Total Transactions
        &nbsp;
        <strong>1,520</strong>
        </div>
    </div>
    <div className='top3'>
    <i class="fa-regular fa-thumbs-up"></i>
    <div className='data3'>
        Total Likes
        &nbsp;
        <strong>9,721</strong>
        </div>
    </div>
    <div className='top4'>
    <i class="fa-solid fa-user-group"></i>
    <div className='data4'>
        Total Users
        &nbsp;
        <strong>892</strong>
        </div>
    </div>
      </div>
  )
}

export default Top_block