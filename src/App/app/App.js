import React from "react";
import { Route, Switch, Redirect } from "react-router";
import AboutUs from "./components/AboutUs/AbousUs";
import Support from "./components/Footer/Support";
import TermsOfUse from "./components/Footer/TermsOfUse";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy"

import MainPage from "./components/PaginaPrincipala/MainPage";
import Prices from "./components/Prices/Prices";


function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/home'></Redirect>
      </Route>
      <Route path='/home'>
        <MainPage />
      </Route>
      <Route path='/tarife'>
        <Prices />
      </Route>
      <Route path='/desprenoi'>
        <AboutUs />
      </Route>
      <Route path='/support'>
        <Support />
      </Route>
      <Route path='/termsofuse'>
        <TermsOfUse />
      </Route>
      <Route path='/privacypolicy'>
        <PrivacyPolicy />
      </Route>
    </Switch>
  );
}

export default App;
