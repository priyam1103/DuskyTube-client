import { registerObserver } from "../helper/RegisterObserver";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function VideoCard({ item, width, height, playlistids }) {
  const [showvideo, setShowVideo] = useState(false);
  const videoRef = useRef();
  useEffect(() => {
    registerObserver(videoRef.current, setShowVideo);
  }, []);
  if (showvideo) {
    return (
      <Link
        href={
          playlistids
            ? {
                pathname: `/playvideo/${item.id}`,
                query: { playlistids: playlistids },
              }
            : `/playvideo/${item.id}`
        }
      >
        <div className="home-card videocard">
          <div className="card">
            <div className="backd-video-card"></div>
            <iframe
              className="videooption"
           
              src={`${item.videourl}?controls=0&autoplay=0&end=5&mute=1&loop=1&modestbranding=1&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-details">
            <p className="name color-white">{item.name}</p>
            <p className="postedby color-grey">{item.postedby.name}</p>
            <p className="views color-grey">{item.views}</p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={
        playlistids
          ? {
              pathname: `/playvideo/${item.id}`,
              query: { playlistids: playlistids },
            }
          : `/playvideo/${item.id}`
      }
    >
      <div className="home-card videocard" ref={videoRef}>
        <div className="card">
          <div className="backd-video-card"></div>
          <div className="ref-video videooption"></div>
        
        </div>
        <div className="card-details">
          <p className="name color-white">{item.name}</p>
          <p className="postedby color-grey">{item.postedby.name}</p>
          <p className="views color-grey">{item.views}</p>
        </div>
      </div>
    </Link>
  );
}
