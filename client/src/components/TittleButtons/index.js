
import { useBookContext } from "../../utils/GlobalContext";
import Column from "../Column"
import { REMOVE_BOOK } from "../../utils/action";
import Api from "../../utils/Api";
import { useHistory } from "react-router-dom"

const TittleButtons = ({title, savedOrDelete, link, _id}) =>{
    const [state, dispatch] = useBookContext();

    const history = useHistory()

    const handleOnClick = async (event) =>{
        event.preventDefault();
        try{
            const dataId = event.target.getAttribute("data-id")
            const action = event.target.getAttribute("saved-or-delete")

            if(action === "Save"){

                await Api.saveBook(state.books[dataId])
                
                history.push("/saved"); 

                return
            }
            await Api.deleteBook(dataId);

            dispatch({
                    type: REMOVE_BOOK,
                    _id: dataId
                })

        }catch(err){
            console.log(err)
        }
           
    }
    
    return(
        <Column>
            <div className="is-flex is-justify-content-space-between">

                <p className="bd-notification is-info is-size-5">{title}</p>

                <div>
                    <a className="button is-warning is-small" href={link}>View</a>
                    <button className={`button ${savedOrDelete === "Save"?"is-success":"is-danger"} is-small`} 
                            saved-or-delete={savedOrDelete}    
                            data-id={_id} 
                            onClick={handleOnClick}

                    >{savedOrDelete}</button>
                </div>
            </div>
        </Column>
    )
}

export default TittleButtons