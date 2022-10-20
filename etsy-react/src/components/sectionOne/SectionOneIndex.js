import React from "react";
import PlayBtn from "../../assets/playButton.svg";
import BeforLike from "../../assets/beforLike.svg";
import AfterLike from "../../assets/afterLike.svg";
import Arrow from "../../assets/arrow.svg";
import './style.css'


const SectionOneIndex = (props) => {
  
  stopVideo=(e)=>{
   e.target.pause();
  }

  playVideo=(e)=>{
   e.target.play();
  }

  const Data = props.sectionOneData;
  return (
    <div className="section">
      <p className="section-sub-title">{Data.acknowledgement}</p>
      <h2 className="section-title">{Data.title}</h2>
      <div className="product-container">
        
        {Data.content &&
          Data.content.map((e) => {
            return (
              <>
                {e.video ? (
                  <div className="container" >
                    <div className="container-icon video-icon">
                      <img src={PlayBtn} alt="play-icon" />
                    </div>
                    <div className="container-icon img-icon">
                       <img src={BeforLike} alt="befor-icon" />
                    </div>
                    <div className="container-icon img-icon">
                       <img src={AfterLike} alt="after-icon" />
                    </div>
                    <video controls poster={e.video.thumbnail} onMouseOver={()=>{playVideo();}} onMouseOut={()=>{stopVideo();}}>
                      <source src={e.video.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  e.imgUrl && (
                    <div className="container">
                      <div className="container-icon img-icon">
                        <img src={BeforLike} alt="befor-icon" />
                      </div>
                      <div className="container-icon img-icon">
                        <img src={AfterLike} alt="after-icon" />
                      </div>
                      <img src={e.imgUrl} alt="item-products" />
                    </div>
                  )
                )}
              </>
            );
          })}
      </div>
      <div className="sectionBottom">
        <p>{Data.sectionBottomInfo}</p>
        <div>
          <img src={Arrow} alt="arrow-svg"/>
        </div>
      </div>
    </div>
  );
};

export default SectionOneIndex;
