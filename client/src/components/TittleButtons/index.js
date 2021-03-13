
import { useBookContext } from "../../utils/GlobalContext";
import Column from "../Column"
import { ADD_BOOK, REMOVE_BOOK } from "../../utils/action";
import Api from "../../utils/Api";
import { Link } from "react-router-dom";

const TittleButtons = ({title, savedOrDelete, link, _id}) =>{
    const [state, dispatch] = useBookContext();

    const handleOnClick = async (event) =>{
        event.preventDefault();
        
        const dataId = event.target.getAttribute("dataId")
        const action = event.target.getAttribute("savedOrDelete")

        if(action === "Save"){

            const { data } = await Api.saveBook(state.books[dataId])
            
            

            return
        }

        dispatch({
                type: REMOVE_BOOK,
                _id: dataId
            })
            
    }
    return(
        <Column>
            <div className="is-flex is-justify-content-space-between">

                <p className="bd-notification is-info is-size-5">{title}</p>

                <div>
                    <a className="button is-warning is-small" href={link}>View</a>
                    <Link to="/saved" className={`button ${savedOrDelete === "Save"?"is-success":"is-danger"} is-small`} 
                            savedOrDelete={savedOrDelete}    
                            dataId={_id} 
                            onClick={handleOnClick}

                    >{savedOrDelete}</Link>
                </div>
            </div>
        </Column>
    )
}

export default TittleButtons