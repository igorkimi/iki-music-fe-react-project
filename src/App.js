import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Acoustic from "./pages/Acoustic";
import Production from "./pages/Production";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.css";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/acoustic" component={Acoustic} />
        <Route path="/production" component={Production} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
