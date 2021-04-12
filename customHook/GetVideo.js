import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const useGetvideo = (id) => {
    const { videoslist } = useContext(GlobalContext);

    const video = videoslist.filter(item => item.id == id);
console.log(video)
    return video;
}