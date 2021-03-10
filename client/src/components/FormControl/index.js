import Column from "../Column"
import Section from "../Section"

const FormControl = () =>{
    return(
        <Column>
            <Section styling="section-shadow m-0">
                <Column>
                    <h1 className="bd-notification is-info is-size-5">Book Search</h1>

                    <p className="bd-notification is-info ">Book</p>

                    <form className="field has-addons">
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