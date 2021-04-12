import React,{useContext} from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {GlobalContext} from "../context/GlobalState";

export default function Sidebar() {
  const { openclosesearchbox,searchbox } = useContext(GlobalContext);

  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="sidebar">
      <Link href="/" >
        <div
          onClick={()=>openclosesearchbox(false)}
          className={
            router.pathname == "/"
              ? "color-blue options"
              : "color-white options"
          }
        >
          <Icon name="home" size="large" style={{ paddingLeft: "0.5rem" }} />
          <p className="icon-label">Home</p>
        </div>
      </Link>
      <Link href="/likedvideos">
        <div
           onClick={()=>openclosesearchbox(false)}
          className={
            router.pathname == "/likedvideos"
              ? "color-blue options"
              : "color-white options"
          }
        >
          <Icon
            name="thumbs up"
            
            size="large"
            style={{ paddingLeft: "0.5rem" }}
          />
          <p className="icon-label">Liked</p>
        </div>
      </Link>

      <Link href="/playlists">
        <div
           onClick={()=>openclosesearchbox(false)}
          className={
            router.pathname == "/playlists"
              ? "color-blue options"
              : "color-white options"
          }
        >
          <Icon name="list"
        
            size="large" style={{ paddingLeft: "0.5rem" }} />

          <p className="icon-label">Playlists</p>
        </div>
      </Link>
    </div>
  );
}
