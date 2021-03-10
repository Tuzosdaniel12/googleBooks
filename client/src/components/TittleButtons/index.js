import Column from "../Column"

const TittleButtons = () =>{
    return(
        <Column>
            <div className="is-flex is-justify-content-space-between">

                <p className="bd-notification is-info is-size-5">Harry Porter's</p>

                <div>
                    <button class="button is-warning is-small">Warning</button>
                    <button class="button is-success is-small">Danger</button>
                </div>
            </div>
        </Column>
    )
}

export default TittleButtons