import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BookProvider } from "./utils/GlobalContext";

function App() {
  return (
    <Router>
      <BookProvider>
        <Header/>
        <Switch>
            <Route exact strict  path="/" component={Search}/>
            <Route exact strict  path="/saved" component={Saved}/>
            <Route exact path="*" component={Search} />
          </Switch>
      </BookProvider>
    </Router>
    
  );
}

export default App;
