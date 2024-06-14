import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Sorting from "./Components/Sorting/Sorting";
import Searching from "./Components/Searching/Searching";
import Home from "./Components/Home/Home";
import GraphTraversal from "./Components/GraphTraversal/GraphTraversal";
import Stack from "./Components/Stack/Stack";

// import About from './Components/About/About';
import Cards from "./Components/Home/Cards";

import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <main>
        <div className="App">
          <Router basename="/">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sort" component={Sorting} />
              <Route exact path="/searching" component={Searching} />
              <Route exact path="/graphTraversal" component={GraphTraversal} />
              <Route exact path="/stack" component={Stack} />
              <Route exact path='/about' component= {Home} />
              <Route exact path="/exploreMe" component={Cards} />
            </Switch>
          </Router>
        </div>
      </main>
    </ThemeProvider>
  );
}
export default App;
