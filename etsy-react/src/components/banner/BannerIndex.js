import React from 'react'
import './style.css'

const BannerIndex=(props)=>{
    const data=props.bannerData;
    return(
        <section className='banner'>
            <h2>{data.bannerTitle}</h2>
            <div className='bannerContent'>
                {
                 data.bannerContent && data.bannerContent.map((e)=>{
                     return(
                        <div className="optionsTemplate">
                            <div className="img-container">
                              <img src={e.imgUrl} alt=""/>
                            </div>
                            <p>{e.title}</p>
                        </div>
                     )
                 })
                }
            </div>
        </section>
  )
}

export default BannerIndex
