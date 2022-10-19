import React from "react";
import PlayBtn from "../../assets/playButton.svg";
import BeforLike from "../../assets/beforLike.svg";
import AfterLike from "../../assets/afterLike.svg";
import './style.css'


const SectionOneIndex = (props) => {
  const Data = props.sectionOneData;
  return (
    <div className="section">
      <p className="section-sub-title">{Data.acknowledgement}</p>
      <h2 className="section-title">{Data.title}</h2>
      <div className="product-container">
        <img src={PlayBtn} alt="play-icon" />
        <img src={BeforLike} alt="befor-icon" />
        <img src={AfterLike} alt="after-icon" />

        {Data.content &&
          Data.content.map((e) => {
            return (
              <>
                {e.video ? (
                  <div className="container">
                    <video controls poster={e.video.thumbnail}>
                      <source src={e.video.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  e.imgUrl && (
                    <div className="container">
                      <img src={e.imgUrl} alt="item-products" />
                    </div>
                  )
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default SectionOneIndex;
