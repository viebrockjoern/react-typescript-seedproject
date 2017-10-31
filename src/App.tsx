import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Home from './Components/Home/Home';
import News from './Components/News/News';
import Info from './Components/Info/Info';
import NotFound from './Components/404/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div className="wrapper">
          <nav className="menu-wrapper">
              <Link to="/">Home</Link>
              <Link to="/weitere-informationen">Info</Link>
              <Link to="/news">News</Link>
          </nav>
            <div className="content-wrapper">
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/weitere-informationen" component={Info}/>
                    <Route path="/news" component={News}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
