import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CenterContainer from "./components/CenterContainer";
import Header from "./components/Header";
import Section from "./components/Section";
import FormControl from "./components/FormControl";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Section styling="p-1 m-0">

          <FormControl/>

          <MainContainer/>

        </Section>
      </div>
      
    </Router>
    
  );
}

export default App;
