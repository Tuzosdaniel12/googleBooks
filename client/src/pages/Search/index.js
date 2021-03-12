import FormControl from "../../components/FormControl";
import MainContainer from "../../components/MainContainer";
import Section from "../../components/Section";
import { useBookContext } from "../../utils/GlobalContext";
import "./style.sass"

function Search() {
  const [state, dispatch] = useBookContext();
  return (
    
    <div className="width-height">
    
        <Section styling="p-1 m-0">
        
          <FormControl/>

          <MainContainer list={state.books} savedOrDelete={"Save"}/>

        </Section>
    </div>
    
  );
}

export default Search;