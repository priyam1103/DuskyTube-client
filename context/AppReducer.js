export default (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      console.log(action.payload.dislikes);
      return {
        ...state,
        videoslist: action.payload.videodata,
        mobilebrands: action.payload.brands,
        videotypes: action.payload.type,
        likedvideos: action.payload.likes,
        dislikedvideos: action.payload.dislikes,
        filters: action.payload.filters,
        playlists: action.payload.playlists,
        playlistsname: action.payload.playlistsname,
      };
    case "UPDATE_LIKES":
      return {
        ...state,
        likedvideos: action.payload.likes,
        dislikedvideos: action.payload.dislikes,
      };
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlists: action.payload.playlists,
        playlistsname: action.payload.playlistsname,
      };
    case "UPDATE_SEARCHBOX":
      return {
        ...state,
        searchbox: action.payload,
      };
    default:
      return;
  }
};
