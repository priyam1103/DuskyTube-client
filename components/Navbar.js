import Link from "next/link";
import React, { useState, useContext } from "react";
import { Icon } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";
import SearchBox from "../components/SearchBox";
import {searchValues} from "../helper/SearchValues";
export default function Navbar() {
  const { videoslist,openclosesearchbox,searchbox } = useContext(GlobalContext);
  const [showsearch, setShowSearch] = useState(false);
  const [searchdata, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showsearchbox, setShowSearchBox] = useState(false);
  function handleSearch(val) {
    setSearchText(val);
    if (val.length > 3) {
      setShowSearch(true);
      const filter_search = searchValues(videoslist,val);
      setSearchData(filter_search);
    } else if (val.length <= 3 && showsearch) {
      setShowSearch(false);
    }
  }
  return (
    <div className="navbar">
      <Link href="/">
      <div className="brand-name" style={{cursor:"pointer"}}>
        <Icon name="youtube" size="big" color="red" />
        <p className="color-white">DuskyTube</p>
        </div>
        </Link>
      <div className="search">
        <input
          type="text"
          value={searchText}
          placeholder="Search.."
          className="color-white"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <div
          className={
            showsearch ? "search-result show" : "search-result show-neg"
          }
        >
          {searchdata.length > 0 ? (
            <>
              {searchdata.map((item, index) => (
                <div key={index}>
                  <Link href={`/playvideo/${item.id}`}>
                    <div
                      className="search-data"
                      onClick={() => {
                        setSearchText("");
                        setShowSearch(false);
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <p className="no-result">No results found.. !!</p>
          )}
        </div>
      </div>
      <div className="search-sym color-white">
        <Icon name="search" size="large" onClick={()=>openclosesearchbox(true)}/>
      </div>
      {searchbox && <SearchBox videoslist={videoslist} setShowSearchBox={setShowSearchBox}/>}
    </div>
  );
}
