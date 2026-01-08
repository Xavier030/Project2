import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/mystyle.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
