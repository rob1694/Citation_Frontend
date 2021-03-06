import React from "react";
import { useEffect, useState } from "react";
import IndividualOffender from "./IndividualOffender";

function OffendersContainer() {

const [offenders, setOffenders] = useState([])

    useEffect(() => {
        fetch('https://citation-backend.herokuapp.com/offenders')
          .then(r => r.json())
          .then((json) => setOffenders(json))
        }, []);

        const viewOffenders = offenders.map((offe) => (
            <IndividualOffender
            key = {offe.id}
            offender = {offe}
            
            />
            )
        )

    return(
        <div>
            {viewOffenders}            
        </div>
    )
}

export default OffendersContainer;