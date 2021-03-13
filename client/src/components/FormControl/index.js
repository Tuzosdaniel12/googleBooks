import Column from "../Column"
import Section from "../Section"
import React, { useRef, useEffect } from "react"
import api from "../../utils/Api"
import { useBookContext } from "../../utils/GlobalContext"
import { SEARCH } from "../../utils/action";

const FormControl = () =>{
    const [, dispatch] = useBookContext(); 

    useEffect(() => {
        async function fetchMyAPI() {
            const { data } = await api.getBooks("Batman")

            dispatch({
                type: SEARCH,
                books: await data.items.map( item => filterData(item))
            })
            
        }
        fetchMyAPI()
    }, [])

    const bookInput = useRef();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const userQuery = bookInput.current.value

        const { data } = await api.getBooks(userQuery)
        
        
        dispatch({
            type: SEARCH,
            books: await data.items.map( item => filterData(item))
        })
    }

    const filterData = (item) =>{
        return {
                authors: item.volumeInfo.authors,
                image: item.volumeInfo.imageLinks.thumbnail,
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                description: item.volumeInfo.description,
                link: item.volumeInfo.infoLink
            } 
    }
    return(
        <Column>
            <Section styling="section-shadow m-0">
                <Column>
                    <h1 className="bd-notification is-info is-size-5">Book Search</h1>

                    <p className="bd-notification is-info ">Book</p>

                    <form className="field has-addons" onSubmit={handleSubmit}>
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Search Book" ref={bookInput}/>
                        </p>

                        <p className="control">
                            <button className="button is-info" onClick={handleSubmit}>
                                Search
                            </button>
                        </p>
                    </form>
                </Column>
            </Section>
        </Column>
        
        )
}

export default FormControl