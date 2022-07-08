import React from 'react'

export default function Rewardsdescription({title,img,description}) {
  return (
    <div className='reward-container'>
                    <div className='reward-img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='reward-text'>
                        <p className='reward-title'>{title} </p>
                        <p className='reward-description'>{description}</p>
                    </div>
                </div>
  )
}
