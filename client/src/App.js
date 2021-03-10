import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CenterContainer from "./components/CenterContainer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Section>
          <div className="column is-full">
            <h1 className="bd-notification is-info p-5 is-size-5">Results</h1>
          </div>

          <div className="column">
          <div>
            <p className="bd-notification is-info p-5 is-size-5">Harry Porter's</p>
            <p>The Great Book behing The Hogwarts Adventures</p>
            <p>Author</p>
          </div>
            
          </div>

        </Section>
      </div>
      
    </Router>
    
  );
}

export default App;
