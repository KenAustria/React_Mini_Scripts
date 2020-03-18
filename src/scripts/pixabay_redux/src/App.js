import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
					<Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;