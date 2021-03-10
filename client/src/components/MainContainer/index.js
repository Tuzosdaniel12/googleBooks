import Column from "../Column"
import Description from "../Description"
import Figure from "../Figure"
import Section from "../Section"
import TittleButtons from "../TittleButtons"

const MainContainer = () => {
    return (
        <Column>
            <Section styling="section-shadow m-0">
                <Column>
                    <h1 className="bd-notification is-info  is-size-5"></h1>
                </Column>

                <div className="column">
                    <Section className="columns is-multiline">

                        <TittleButtons/>

                        <p className="column is-full pt-0 pb-0">The Great Book behing The Hogwarts Adventures</p>
                        <p className="column is-full pt-0">Author</p>
                    </Section>

                    <Section styling="ml-1 mr-1 mb-1">
                        <Figure/>
                        <Description/>
                    </Section>    
                    
                    
                </div>
            </Section>
        </Column>
    )
}

export default MainContainer