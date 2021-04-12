import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const useGetLikedVideo = (id) => {
  const { likedvideos, videoslist } = useContext(GlobalContext);
 
  const videolist = videoslist.filter(
    (item) => likedvideos.indexOf(item.id.toString()) > -1
  );
  
  return videolist;
};
