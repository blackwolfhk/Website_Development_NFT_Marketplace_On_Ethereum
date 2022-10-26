import "../styles/globals.css";

// INTERNAL IMPORT
import { NavBar } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />;
  </div>
);

export default MyApp;
