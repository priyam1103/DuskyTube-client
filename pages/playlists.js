import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import VideoCard from "../components/VideoCard";
import { useGetvideo } from "../customHook/GetVideo";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
export default function Playlists() {
  const { playlists, playlistsname } = useContext(GlobalContext);
  return (
    <div className="playlist-page">
      {playlistsname.map((item, index) => (
        <div key={index} className="group">
          <div className="header">
            <p className="heading color-white">{item}</p>
            <Link
              href={{
                pathname: `/playvideo/${playlists[item][0]}`,
                query: { playlistids: playlists[item], playlistname: item },
              }}
            >
              <Icon
                name="play"
                color="green"
                size="large"
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div className="content">
            {playlists[item].map((item_, index_) => {
              return (
                <div key={index_}>
                  <VideoCard
                    item={useGetvideo(parseInt(item_))[0]}
                    width="200"
                    height="100"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
