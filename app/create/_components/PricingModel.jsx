import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'

function PricingModel() {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
        />

        <div className='//grid grid-cols-1 md:grid-cols-2 gap-10 flex flex-cols '>
            {Lookup.pricingOption.map((pricing, index) => (
               <div key={index} className='flex flex-cols items-center p-5 border rounded-2xl'>
                <Image src={pricing.icon} alt={pricing.title}
                width={60}
                height={60}
                />
               </div>
            ))}
        </div>

        </div>
  )
}

export default PricingModel
