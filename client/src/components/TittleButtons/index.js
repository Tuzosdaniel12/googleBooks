import Column from "../Column"

const TittleButtons = ({title, scr, savedOrDelete}) =>{
    return(
        <Column>
            <div className="is-flex is-justify-content-space-between">

                <p className="bd-notification is-info is-size-5">{title}</p>

                <div>
                    <a class="button is-warning is-small" href={scr}>{scr}</a>
                    <button class={`button ${savedOrDelete === "save"?"is-success":"is-danger"} is-small`}>{savedOrDelete}</button>
                </div>
            </div>
        </Column>
    )
}

export default TittleButtons