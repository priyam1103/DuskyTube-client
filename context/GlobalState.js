import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initial_data = {
  videoslist: [],
  likedvideos: [],
  dislikedvideos: [],
  mobilebrands: [],
  videotypes: [],
  filters: [],
  playlists: {},
  playlistsname: [],
  searchbox: false,
};

export const GlobalContext = createContext(initial_data);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initial_data);

  function updateState(values) {
    console.log(values);
    dispatch({
      type: "UPDATE_STATE",
      payload: values,
    });
  }
  function likevideo(id) {
    const duskytube_like = state.likedvideos;
    const duskytube_dislike = state.dislikedvideos;

    if (duskytube_dislike.length > 0) {
      duskytube_dislike.splice(duskytube_dislike.indexOf(id), 1);
    }

    duskytube_like.push(id);
    localStorage.setItem("dusktube_likevideos", JSON.stringify(duskytube_like));
    updateLikes({ likes: duskytube_like, dislikes: duskytube_dislike });

    localStorage.setItem(
      "dusktube_dislikevideos",
      JSON.stringify(duskytube_dislike)
    );
  }
  function dislikevideo(id) {
    const duskytube_like = state.likedvideos;
    const duskytube_dislike = state.dislikedvideos;

    if (duskytube_like.length > 0) {
      duskytube_like.splice(duskytube_like.indexOf(id), 1);
    }

    duskytube_dislike.push(id);
    localStorage.setItem(
      "dusktube_dislikevideos",
      JSON.stringify(duskytube_dislike)
    );
    updateLikes({ likes: duskytube_like, dislikes: duskytube_dislike });

    localStorage.setItem("dusktube_likevideos", JSON.stringify(duskytube_like));
  }
  function createPlaylist(name, id) {
    var playlists = state.playlists;
    var playlistsname = state.playlistsname;
    if (playlists[name]) {
      if (playlists[name].includes(id)) {
        return;
      }
      playlists[name] = playlists[name].concat(id);
    } else {
      playlistsname = playlistsname.concat(name);
      playlists = { ...playlists, [name]: [id] };
    }
    localStorage.setItem("dusktube_playlist", JSON.stringify(playlists));
    localStorage.setItem(
      "dusktube_playlistsname",
      JSON.stringify(playlistsname)
    );
    updatePlaylist({ playlists: playlists, playlistsname: playlistsname });
  }

  function addToPlaylist(name, id) {
    var playlists = state.playlists;
    var playlistsname = state.playlistsname;
    playlists[name] = playlists[name].concat(id);
    localStorage.setItem("dusktube_playlist", JSON.stringify(playlists));

    updatePlaylist({ playlists: playlists, playlistsname: playlistsname });
  }

  function removeFromPlaylist(name, id) {
    var playlists = state.playlists;
    console.log(playlists[name].indexOf(id));
    var playlistsname = state.playlistsname;
    playlists[name].splice(playlists[name].indexOf(id), 1);
    console.log(playlists);
    localStorage.setItem("dusktube_playlist", JSON.stringify(playlists));

    updatePlaylist({ playlists: playlists, playlistsname: playlistsname });
  }
  function updateLikes(values) {
    dispatch({
      type: "UPDATE_LIKES",
      payload: values,
    });
  }
  function updatePlaylist(values) {
    dispatch({
      type: "UPDATE_PLAYLIST",
      payload: values,
    });
  }

  function openclosesearchbox(bol) {
    dispatch({
      type: "UPDATE_SEARCHBOX",
      payload: bol,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        videoslist: state.videoslist,
        likedvideos: state.likedvideos,
        dislikedvideos: state.dislikedvideos,
        mobilebrands: state.mobilebrands,
        videotypes: state.videotypes,
        playlists: state.playlists,
        filters: state.filters,
        searchbox:state.searchbox,
        playlistsname: state.playlistsname,
        updateState,
        dislikevideo,
        likevideo,
        createPlaylist,
        openclosesearchbox,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
