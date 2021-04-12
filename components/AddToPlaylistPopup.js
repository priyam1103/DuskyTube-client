import React, { useContext, useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";
export default function AddToPlaylistPopup({ id, setPlaylistPopup }) {
  const [createform, setCreateForm] = useState(false);
  const [playlistname, setPlaylistName] = useState("");
  const {
    playlists,
    playlistsname,
    createPlaylist,
    addToPlaylist,
    removeFromPlaylist,
  } = useContext(GlobalContext);
  var data = [];
  useEffect(() => {
    console.log(playlists);
    //  data = playlists.filter(item => item.includes(id));
    console.log(data);
  }, []);
  return (
    <div className="playlist-popup">
      <div className="header">
        <p className="color-white">Save to...</p>
        <Icon
          name="close"
          onClick={() => setPlaylistPopup(false)}
          className="color-white"
          style={{ cursor: "pointer" }}
          size="large"
        />
      </div>
      {playlistsname.map((item, index) => (
        <div key={index} className="playlists">
          <input
            type="checkbox"
            id={index}
            name={item}
            checked={playlists[item].includes(id) ? true : false}
            value={item}
            onChange={(e) => {
              playlists[item].includes(id)
                ? removeFromPlaylist(item, id)
                : addToPlaylist(item, id);
            }}
          />
          <label for={index} className="color-white">
            {item}
          </label>
          <br></br>
        </div>
      ))}
      {createform ? (
        <div className="form">
          <label className="color-white">Name</label>
          <input
            type="text"
            onChange={(e) => setPlaylistName(e.target.value)}
            value={playlistname}
          />
                  <button onClick={() => {
                      createPlaylist(playlistname, id)
                      setPlaylistPopup(false)
                  }}>
            Create
          </button>
        </div>
      ) : (
        <div className="footer" onClick={() => setCreateForm(true)}>
          <p className="color-white">
            <Icon name="add" size="large" />
            Create a new playlist
          </p>
        </div>
      )}
    </div>
  );
}
