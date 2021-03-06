import React from "react";
import "./App.css";
import Navigation from "./navigation";
import PaulsApple from "./PaulsApple/pauls_apple";
import Home from "./home";
import IAmDifferent from "./IAmDifferent/i_am_different";
import PeopleAndMask from "./PeopleAndMask/people_and_mask";
import OtherSideOfMask from "./OtherSideofMask/other_side_of_mask";
import Mirror from "./mirror/mirror";
import Sky from "./Sky/sky";
// import SkyArtist from "./Sky/skyArtist";
import SkyArtist1 from "./Sky/skyArtist1";
import SkyArtist2 from "./Sky/skyArtist2";
import SkyArtist3 from "./Sky/skyArtist3";
import IAmDifferentForm from "./IAmDifferent/i_am_different_form";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import SkyV1 from "./Sky/sky_v1";
import UnbeingChinese from "./unbeingChinese/unbeingChinese";
import UnbeingChineseCH from "./ch/unbeingChinese/unbeingChineseCH"
import SkyV1_ch from "./ch/Sky-ch/sky_v1-ch";
import Sky_ch from "./ch/Sky-ch/sky-ch";
import IAmDifferent_ch from "./ch/IAmDifferent-ch/i_am_different-ch";
import IAmDifferentForm_ch from "./ch/IAmDifferent-ch/i_am_different_form-ch";
import Home_ch from "./ch/Home-ch/home-ch";
import PaulsApple_ch from "./ch/PaulsApple-ch/pauls_apple-ch";
import PeopleAndMask_ch from "./ch/PeopleAndMask-ch/people_and_mask-ch";
import Mirror_ch from "./ch/Mirror-ch/mirror-ch";
import HeaderV1 from "./header_v1.js";
import HeaderV2 from "./header_v2.js";
import twftorlogo from "./assets/twftorlogo.png";
import twflogo from "./assets/taiwanfest-eng+chi.png";
import twfvanlogo from "./assets/vantwflogo.png";
import featureImage from "./assets/tor-feature-image1.jpg";
import Home2 from "./homeComponents/home_v2";
import Home2_ch from "./ch/Home-ch/home_v2_ch";
import ReactGA from 'react-ga';
import OtherSideOfMask_ch from "./ch/OtherSideOfMask-ch/other_side_of_mask-ch";
import SkyArtist_ch from "./ch/Sky-ch/skyArtist_ch";
import SkyArtist_ch1 from "./ch/Sky-ch/skyArtist1_ch";
import SkyArtist_ch2 from "./ch/Sky-ch/skyArtist2_ch";
import SkyArtist_ch3 from "./ch/Sky-ch/skyArtist3_ch";
import { createBrowserHistory } from 'history';

import mirror_test from './mirror/mirrorBirdTest';
import test  from "./IAmDifferent/test";


// import SkyArtist from "./Sky/sky";

// import"./Sky/sky_v1.css";

function App() {
  const history = createBrowserHistory();
ReactGA.initialize('UA-2521987-19');
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

  return (
      <div className="App">
        {/*}<HeaderV1 />*/}
        <HeaderV2 />
        <Router>
          <Switch>
        {/* <hr id="mobileLine"/> */}
        <Route exact path="/">
          <Redirect to="/GalleryHome" />
        </Route>
        <Route exact path="/-ch">
          <Redirect to="/GalleryHome-ch" />
        </Route>


          {/*<Route path="/" component={() => {
     window.location.href = "https://torontotaiwanfest.ca/";}}/>*/}
        {/* <Route path="/test" component={test}></Route>*/}
          <Route path="/GalleryHome" exact component={Home2} />
          <Route path="/PaulsApple" component={PaulsApple} />
          <Route path="/PeopleAndMask" component={PeopleAndMask} />
          <Route path="/OtherSideOfMask" component={OtherSideOfMask} />
          <Route path="/Mirror" component={Mirror} />
          {/*}<Route path="/SkyV2" component={Sky} />*/}
          <Route path="/Sky" component={SkyV1}/>
          <Route path="/IAmDifferent" component={IAmDifferent} />
          <Route path="/IAmDifferentForm" component={IAmDifferentForm}/>
          <Route path="/UnbeingChinese" component={UnbeingChinese}/>


          <Route path="/GalleryHome-ch" exact component={Home2_ch}/>
          <Route path="/PaulsApple-ch" component={PaulsApple_ch}/>
          <Route path="/PeopleAndMask-ch" component={PeopleAndMask_ch}/>
          <Route path="/OtherSideOfMask-ch" component={OtherSideOfMask_ch} />
          <Route path="/Mirror-ch" component={Mirror_ch}/>
          <Route path="/SkyV2-ch" component={Sky_ch} />
          <Route path="/Sky-ch" component={SkyV1_ch}/>
          <Route path="/IAmDifferent-ch" component={IAmDifferent_ch}/>
          <Route path="/IAmDifferentForm-ch" component={IAmDifferentForm_ch}/>
          <Route path="/UnbeingChinese-ch" component={UnbeingChineseCH}/>



          {/*<Route path="/Home-ch" component={IAmDifferent_ch}/>*/}
          {/*}<Route path="/Home2" component={Home2}/>
          <Route path="/Home2-ch" component={Home2_ch}/>*/}


          </Switch>
        </Router>
      </div>
  );
}

export default App;
