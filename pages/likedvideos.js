import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import HomeGrid from "../components/HomeGrid";
import { useGetLikedVideo } from "../customHook/GetLikedVideos";
import VideoCard from "../components/VideoCard";
import Link from "next/link";
export default function LikedVideos() {
  const liked_videos = useGetLikedVideo();

  return (
    <div className="liked-page">
      {liked_videos &&
        liked_videos.map((item, index) => (
          <div key={index}>
            <VideoCard item={item} width="200" height="100" />
          </div>
        ))}
    </div>
  );
}
