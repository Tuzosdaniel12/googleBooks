
import Column from "../Column"
import Description from "../Description"
import Figure from "../Figure"
import Section from "../Section"
import TittleButtons from "../TittleButtons"

const MainContainer = ({list, savedOrDelete}) => {
console.log("here", list)
    return (
        <Column>
        {list.map((item, index)=>{
            return <Section styling="section-shadow m-0" key={index}>
            <Column>
                <h1 className="bd-notification is-info  is-size-5"/>
            </Column>

            <div className="column">
                <Section className="columns is-multiline">

                    <TittleButtons {...item} savedOrDelete={savedOrDelete} _id={index}/>

                    <p className="column is-full pt-0 pb-0">{item.subtitle}</p>
                    <p className="column is-full pt-0">{item.authors}</p>
                </Section>

                <Section styling="ml-1 mr-1 mb-1">
                    <Figure image={item.image}/>
                    <Description description={item.description}/>
                </Section>    
                
                
            </div>
        </Section>
        })}
            
        </Column>
    )
}

export default MainContainer