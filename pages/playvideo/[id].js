import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetvideo } from "../../customHook/GetVideo";
import { useGetRelatedVideo } from "../../customHook/GetRelatedVideo";
import { useGetVideoOtherPlaylist } from "../../customHook/GetVideoOtherPlaylist";
import { useGetPlaylistRelatedVideo } from "../../customHook/GetPlaylistRelatedVideo";
import MainVideo from "../../components/MainVideo";
import VideoCard from "../../components/VideoCard";
import HomeHeader from "../../components/HomeHeader";
import { getFilters } from "../../customHook/GetFilters";
import { GlobalContext } from "../../context/GlobalState";
import Backdrop from "../../components/Backdrop";
import AddToPlaylistPopup from "../../components/AddToPlaylistPopup";
export default function PlayVideo() {
  const router = useRouter();
  const {
    likedvideos,
    dislikedvideos,
    likevideo,
    dislikevideo,
    filters,
  } = useContext(GlobalContext);
  console.log(router.query);
  const { id, playlistids, playlistname } = router.query;
  const [playlistpopup, setPlaylistPopup] = useState(false);
  const current_video = useGetvideo(id)[0];
  var video_list = [];
  var playlist_video_list = [];
  const [filtereddata, setFilteredData] = useState([]);
  function handleFilter(type, value) {
    setFilteredData(getFilters(type, value, video_list));
  }

  if (playlistids) {
    playlist_video_list = useGetPlaylistRelatedVideo(playlistids, id);
    video_list = useGetVideoOtherPlaylist(playlistids);
  } else {
    video_list = useGetRelatedVideo(id);
  }

  return (
    <>
      <div className="video-page">
        
        <MainVideo
          current_video={current_video}
          likedvideos={likedvideos}
          dislikedvideos={dislikedvideos}
          likevideo={likevideo}
          id={id}
          dislikevideo={dislikevideo}
          setPlaylistPopup={setPlaylistPopup}
          />
      
        <div className="related-videos">
          <HomeHeader filters={filters} handleFilter={handleFilter} />

          {playlist_video_list.length > 0 && (
            <div className="playlist-videos">
              <p className="header color-white">Playlist - {playlistname}</p>
              <div className="videos">
                {playlist_video_list.map((item, index) => (
                  <div key={index}>
                    <VideoCard
                      item={item}
                      width="200"
                      height="100"
                      playlistids={playlistids}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filtereddata.length > 0 ? (
            <>
              {filtereddata.map((item) => (
                <VideoCard item={item} width="200" height="100" />
              ))}
            </>
          ) : (
            <>
              {video_list.map((item, index) => (
                <div key={index}>
                  <VideoCard item={item} width="200" height="100" />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {playlistpopup && (
        <>
          <Backdrop />
          <AddToPlaylistPopup id={id} setPlaylistPopup={setPlaylistPopup} />
        </>
      )}
    </>
  );
}
