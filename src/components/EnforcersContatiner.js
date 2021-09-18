import React from "react";
import { useEffect, useState } from "react";
import IndividualEnforcer from "./IndividualEnforcer";

function EnforcersContainer() {

const [enforcers, setEnforcers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/enforcers')
          .then(r => r.json())
          .then((json) => setEnforcers(json))
        }, []);

        const viewEnforcers = enforcers.map((enf) => (
            <IndividualEnforcer
            key = {enf.id}
            enforcer = {enf}
            />
            )
        )

    return(
        <div>
            {viewEnforcers}
        </div>
    )
}

export default EnforcersContainer;