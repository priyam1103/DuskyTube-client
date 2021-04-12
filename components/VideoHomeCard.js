import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const registerObserver = (ref, setShowVideo) => {
  const observer = new IntersectionObserver(
    (enteries, observer) => {
      enteries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setShowVideo(true);
        observer.disconnect();
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(ref);
};

export default function VideoHomeCard({
  id,
  index,
  d,
  handlem,
  item,
  handleout,
}) {
  const [showvideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    registerObserver(videoRef.current, setShowVideo);
  }, []);
  if (showvideo) {
    return (
      <Link href={`/playvideo/${item.id}`}>
        <div className="home-card">
          <div
            className="backd"
            onMouseOut={() => {
              handleout(index);
            }}
            onMouseOver={() => {
              handlem(index);
            }}
          ></div>
          <iframe
            className="videop"
            src={`${item.videourl}?controls=0&autoplay=${d[index]}&end=5&mute=1&loop=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="details">
            <img src={item.postedby.icon} />
            <p className="color-white">{item.name}</p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="home-card" ref={videoRef}>
      <div
        className="backd"
        onMouseOut={() => {
          handleout(index);
        }}
        onMouseOver={() => {
          handlem(index);
        }}
      ></div>
      <div className="ref-image videop"></div>
      <div className="details">
        <img src={item.postedby.icon} />
        <p className="color-white">{item.name}</p>
      </div>
    </div>
  );
}
