import { useContext, useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeGrid from "../components/HomeGrid";
import fetch from "isomorphic-fetch";
import { getFilters } from "../customHook/GetFilters";
import { GlobalContext } from "../context/GlobalState";

export default function Home() {
  const { videoslist, filters } = useContext(GlobalContext);
  const [filtereddata, setFilteredData] = useState([]);

  const [d, setD] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function handlem(index) {
    setD((prevState) => {
      console.log(prevState);
      prevState[index] = 1;
      return { ...prevState };
    });
  }
  function handleout(index) {
    setD((prevState) => {
      console.log(prevState);
      prevState[index] = 0;
      return { ...prevState };
    });
  }
  function handleFilter(type, value) {
    setFilteredData(getFilters(type, value, videoslist));
  }
  return (
    <div className="home-page">
      <HomeHeader filters={filters} handleFilter={handleFilter} />
      <HomeGrid
        data={filtereddata.length > 0 ? filtereddata : videoslist}
        d={d}
        handlem={handlem}
        handleout={handleout}
      />
    </div>
  );
}
