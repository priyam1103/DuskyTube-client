import React from "react";
import Link from "next/link";
import VideoHomeCard from "./VideoHomeCard";
export default function HomeGrid({ data, d, handlem, handleout }) {
  return (
    <div className="home-video-grid">
      {data.map((item, index) => (
        <VideoHomeCard
          key={index}
          d={d}
          handlem={handlem}
          handleout={handleout}
          index={index}
          item={item}
        />
      ))}
    </div>
  );
}
