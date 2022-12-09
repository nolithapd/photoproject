import logo from './logo.svg';
import GetPhotos from './GetPhotos';
import "./Styles.css";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Leftbars from './Components/LeftBars';
import Wallpapers from './views/Wallpapers';
import Nature from './views/Nature';
import Home from './views/Home';
import Animals from './views/Animals';

import Travel from './views/Travel';
import Experimental from './views/Experimental';


function App() {
  return (
    <div>
      <Router>
        <Leftbars/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/wallpapers" exact element={<Wallpapers/>}></Route>
          <Route path="/nature" exact element={<Nature/>}></Route>
          <Route path="/animals" exact element={<Animals/>}></Route>
          <Route path="/experimental" exact element={<Experimental/>}></Route>
          <Route path="/travel" exact element={<Travel/>}></Route>
        </Routes>
 
        </Router>

      {/* <GetPhotos /> */}
    </div>
  );
}

export default App;
