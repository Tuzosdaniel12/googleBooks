import FormControl from "../../components/FormControl";
import MainContainer from "../../components/MainContainer";
import Section from "../../components/Section";
import "./style.sass"

function Search() {
  return (
    <div className="width-height">
    
        <Section styling="p-1 m-0">
        
          <FormControl/>

          <MainContainer/>

        </Section>
    </div>
    
  );
}

export default Search;