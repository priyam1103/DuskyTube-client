import React, { useState, useContext } from "react";
import { searchValues } from "../helper/SearchValues";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";
export default function SearchBox({ videoslist, setShowSearchBox }) {
  const [searchdata, setSearchData] = useState([]);
  const { openclosesearchbox } = useContext(GlobalContext);
  const [nodata,setNoData] = useState(false);
  const [searchText, setSearchText] = useState("");
  function handleSearch(val) {
    setSearchText(val);
    if (val.length > 3) {
      const filter_search = searchValues(videoslist, val);
      if (filter_search.length===0) {
        setNoData(true)
      } else {
        setNoData(false);
        setSearchData(filter_search);
      }
    } else if (val.length <= 3) {
      setSearchData([]);
    }
  }
  return (
    <div className="search-box">
      <div className="header">
        <Icon
          size="large"
          onClick={() => openclosesearchbox(false)}
          name="arrow left"
          color="red"
        />
        <input
          value={searchText}
          placeholder="Search.."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      {!nodata ? (
        <>
          {searchdata.map((item, index) => (
            <div key={index}>
              <Link href={`/playvideo/${item.id}`}>
                <div
                  className="search-data"
                  onClick={() => {
                    setSearchText("");
                    setShowSearchBox(false);
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
  );
}
