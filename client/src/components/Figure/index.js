const Figure = ({image}) =>{
    return(
        <figure className="image">
            <img className="has-ratio" src={image}/>
        </figure>
    )
}

export default Figure