import React from "react";
import { useEffect, useState } from "react";
import IndividualEnforcer from "./IndividualEnforcer";
import EnforcerForm from "./EnforcerForm";

function EnforcersContainer() {

const [enforcers, setEnforcers] = useState([])

    useEffect(() => {
        fetch('https://citation-backend.herokuapp.com/enforcers')
          .then(r => r.json())
          .then((json) => setEnforcers(json))
        }, []);

        function addEnforcer(enforcer) {
            setEnforcers([...enforcers, enforcer]);
          }

        const viewEnforcers = enforcers.map((enf) => (
            <IndividualEnforcer
            key = {enf.id}
            enforcer = {enf}

            />
            )
        )

    return(
        <div>
            <EnforcerForm 
            onAddEnforcer = {addEnforcer}
            />
            {viewEnforcers}
        </div>
    )
}

export default EnforcersContainer;