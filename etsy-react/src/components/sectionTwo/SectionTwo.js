import React from 'react'
import './style.css'

function SectionTwo(props) {
    const Data = props.sectionTwoData;
  return (
    <div className='section-two'>
      <h2>{Data.title}</h2>
      <div className='section-two-contents'>
         <div className='content-title'>
        {
            Data.content.map((e)=>{
                return(
                  <div>
                      <h2>{e.contentTitle}</h2>
                  </div>            
                )
            })
        }
         </div>
      </div>
    </div>
  )
}

export default SectionTwo
