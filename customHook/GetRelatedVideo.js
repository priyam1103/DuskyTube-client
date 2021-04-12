import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const useGetRelatedVideo = (id) => {
    const { videoslist } = useContext(GlobalContext);

    const videolist = videoslist.filter(item => item.id != id);

    return videolist;
}