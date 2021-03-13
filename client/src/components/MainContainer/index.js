
import Column from "../Column"
import Description from "../Description"
import Figure from "../Figure"
import Section from "../Section"
import TittleButtons from "../TittleButtons"
import CenterContainer from "../CenterContainer"

const MainContainer = ({list, savedOrDelete}) => {

    return (
        <Column>
        {list.length?
            list.map((item, index)=>{
            return <Section styling="section-shadow m-0" key={index}>
            
            <div className="column">
                <Section className="columns is-multiline">

                    <TittleButtons {...item} savedOrDelete={savedOrDelete} _id={item._id?item._id:index}/>

                    <p className="column is-full pt-0 pb-0">{item.subtitle}</p>
                    <p className="column is-full pt-0">{item.authors}</p>
                </Section>

                <Section styling="ml-1 mr-1 mb-1">
                    <Figure image={item.image}/>
                    <Description description={item.description}/>
                </Section>    
                
                
            </div>
        </Section>
        }):
        <CenterContainer>Search or Save Books</CenterContainer>
    }
            
        </Column>
    )
}

export default MainContainer