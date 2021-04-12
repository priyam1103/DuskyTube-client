import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const useGetVideoOtherPlaylist = (ids) => {
  const { videoslist } = useContext(GlobalContext);

  const videolist = videoslist.filter(
    (item) => ids.includes(item.id.toString()) == false
  );

  return videolist;
};
