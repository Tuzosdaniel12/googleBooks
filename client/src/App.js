import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
            <Route exact strict  path="/" component={Search}/>
            <Route exact strict  path="/saved" component={Saved}/>
            <Route exact path="*" component={Search} />
          </Switch>
      
    
    </Router>
    
  );
}

export default App;
