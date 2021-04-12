import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const useGetPlaylistRelatedVideo = (ids, id) => {
  const { videoslist } = useContext(GlobalContext);

  const videolist = videoslist.filter(
    (item) => item.id != id && ids.includes(item.id.toString())
  );

  return videolist;
};
