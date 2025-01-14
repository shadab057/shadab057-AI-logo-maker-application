import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'


function LogoPalette() {
  return (
    <div>
      <HeadingDescription
      title={Lookup.LogocolorPaletteTitle}
      description={Lookup.LogocolorPaletteDesc} />

<div className='grid grid-flow-col-2 md:grid-cols-3 gap-5 mt-5'>
      {Colors.map((Palette,index)=>(
        <div className='flex' key={index}>
          {Palette?.colors.map((Color,index)=>(
            <div className='h-24 w-full'
            key={index}
            style={{
              backgroundColor:Color
            }}> 
          </div>
      ))}
    </div>
      ))}
    </div>
    </div>
  )
}

export default LogoPalette