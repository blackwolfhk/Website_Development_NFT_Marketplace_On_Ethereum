import "../styles/globals.css";

// INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
