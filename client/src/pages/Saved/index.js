import { useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import Section from "../../components/Section";
import Api from "../../utils/Api";
import { useBookContext } from "../../utils/GlobalContext";
import { SAVED_BOOKS } from "../../utils/action";
//import "./style.sass"

function Saved() {
  const [state, dispatch] = useBookContext(); 

    useEffect(() => {
        async function fetchMyAPI() {
            const { data } = await Api.getSavedBooks()

            dispatch({
                type: SAVED_BOOKS,
                books: data
            })
            
        }
        fetchMyAPI()
    }, [])
  return (
    <div className="width-height">
        <Section styling="p-1 m-0">

          <MainContainer list={state.savedBooks} savedOrDelete={"Delete"}/>

        </Section>
    </div>
    
  );
}

export default Saved;