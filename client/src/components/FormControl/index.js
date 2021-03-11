import Column from "../Column"
import Section from "../Section"
import React, { useRef } from "react"
import api from "../../utils/Api"

const FormControl = () =>{

    const bookInput = useRef()

    const handleSubmit = event =>{
        event.preventDefault();

        //bookInput.current.value

        const { data } = api.getBooks()
    }
    return(
        <Column>
            <Section styling="section-shadow m-0">
                <Column>
                    <h1 className="bd-notification is-info is-size-5">Book Search</h1>

                    <p className="bd-notification is-info ">Book</p>

                    <form className="field has-addons" onSubmit={handleSubmit}>
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Search Book" />
                        </p>

                        <p className="control">
                            <button className="button is-info">
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