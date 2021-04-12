import React from "react";
import { Icon } from "semantic-ui-react";

export default function MainVideo({
  current_video,
  likedvideos,
  id,
  likevideo,
  dislikedvideos,
    dislikevideo,
  setPlaylistPopup
}) {
  console.log(likedvideos);
  return (
    <>
      {current_video && (
        <div className="main-video">
          <div className="video-cards">
          <iframe
           
            className="mainvideopx"
            src={`${current_video.videourl}?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
          
          <p className="name">{current_video.name}</p>
          <div className="video-nav">
            <p className="view-date color-grey">
              {current_video.views}
              <span>.</span>
              {current_video.date}
            </p>
            <div className="options">
              {likedvideos && (
                <Icon
                  onClick={() => {
                    {
                      likedvideos.includes(id) ? null : likevideo(id);
                    }
                  }}
                  name={`${
                    likedvideos.includes(id) ? "thumbs up" : "thumbs up outline"
                  }`}
                  size="big"
                  className={`${
                    likedvideos.includes(id)
                      ? "color-white cursor"
                      : "color-grey cursor"
                  }`}
                />
              )}
              {dislikedvideos && (
                <Icon
                  onClick={() => {
                    {
                      dislikedvideos.includes(id) ? null : dislikevideo(id);
                    }
                  }}
                  name={`${
                    dislikedvideos.includes(id)
                      ? "thumbs down"
                      : "thumbs down outline"
                  }`}
                  size="big"
                  className={`${
                    dislikedvideos.includes(id)
                      ? "color-white cursor"
                      : "color-grey cursor"
                  }`}
                />
              )}

              <Icon onClick={()=>{setPlaylistPopup(true)}} name="list" size="big" className="color-grey cursor" />
            </div>
          </div>
          <div className="border color-grey"></div>
          <div className="postedby">
            <img src={current_video.postedby.icon} />
            <p className="color-white">{current_video.postedby.name}</p>
          </div>
          <p className="description color-white">{current_video.description}</p>
        </div>
      )}
    </>
  );
}
