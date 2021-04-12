import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function UpdateData({ data }) {
  console.log(data);
  const { updateState } = useContext(GlobalContext);
  useEffect(() => {
    async function getData() {
      const duskytube_like = (await localStorage.getItem("dusktube_likevideos"))
        ? JSON.parse(localStorage.getItem("dusktube_likevideos"))
        : [];
      const duskytube_dislike = (await localStorage.getItem(
        "dusktube_dislikevideos"
      ))
        ? JSON.parse(localStorage.getItem("dusktube_dislikevideos"))
        : [];
      const duskytube_playlists = (await localStorage.getItem(
        "dusktube_playlist"
      ))
        ? JSON.parse(localStorage.getItem("dusktube_playlist"))
        : {};
      const duskytube_playlistsname = (await localStorage.getItem(
        "dusktube_playlistsname"
      ))
        ? JSON.parse(localStorage.getItem("dusktube_playlistsname"))
        : [];

      updateState({
        videodata: data.videodata,
        barnds: data.brands,
        type: data.type,
        likes: duskytube_like,
        dislikes: duskytube_dislike,
        filters: data.filters,
        playlists: duskytube_playlists,
        playlistsname: duskytube_playlistsname,
      });
    }
    getData();
  }, []);
  return <div></div>;
}
