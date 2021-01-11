import {Switch, Route} from "react-router-dom"
import Movies from './pages/Movies'
import Movie from './pages/components/editMovie.js'
import Home from './pages/Home'
// import TvShows from './pages/TvShows.js'
import Header from './pages/Header'
import './App.css';
import TvShows from "./pages/TvShows";

function App() {
  return (
    <div className="App">
      <Header />
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/movies">
          <Movies />
          {/* <Movie /> */}
      </Route>

      <Route path="/tvshows">
          <TvShows />
      </Route>

    </Switch>
    </div>
  );
}

export default App;
