import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import fetch from "isomorphic-fetch";

import { GlobalProvider } from "../context/GlobalState";
import UpdateData from "../components/UpdateData";
MyApp.getInitialProps=async(appContext)=> {
  const res = await fetch(`https://duskytube.herokuapp.com/api/videolist`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
  props: { data }, 
  };
}
function MyApp({ Component, pageProps,props }) {
  console.log(props)
  return (
    <div className="bg-color">
      <GlobalProvider>
        <UpdateData data={props.data}/>
        <Navbar />
        <Sidebar />
        <Component {...pageProps} />
      </GlobalProvider>
    </div>
  );
}

export default MyApp;
