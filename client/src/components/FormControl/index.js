import Column from "../Column"
import Section from "../Section"
import React, { useRef, useState } from "react"
import api from "../../utils/Api"

const FormControl = () =>{

    const bookInput = useRef();

    const [bookList, setBookListState] = useState([]);

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const userQuery = bookInput.current.value

        const { data } = await api.getBooks(userQuery)
        
        const filterData = data.items.map(item =>{
            return{
                authors: item.volumeInfo.authors,
                image: item.volumeInfo.imageLinks.thumbnail,
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                description: item.volumeInfo.description
            }
        
        })
        setBookListState(filterData)
        console.log(bookList)
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