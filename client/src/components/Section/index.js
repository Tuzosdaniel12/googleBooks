const Section = ({children, styling}) =>{
    return(
        <section className={`columns is-multiline ${styling}`}>
            {children}
        </section>
    )
}

export default Section