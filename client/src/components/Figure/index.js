const Figure = ({image, title}) =>{
    return(
        <figure className="image">
            <img className="has-ratio" src={image} alt={title}/>
        </figure>
    )
}

export default Figure