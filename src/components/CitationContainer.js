import React from "react";
import { useEffect, useState } from "react";
import IndividualCitation from "./IndividualCitation";

function CitationContainer( { enforcer } ) {


    const [citations, setCitations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/citations')
          .then(r => r.json())
          .then((json) => setCitations(json))
        }, []);
        
        function displayEnforcerName (citation) {
            if (enforcer.id === citation.enforcer_id) {
                return (enforcer.name)
            }
        }

        // function displayOffenderName (citation) {
        //     if (offender.id === citation.offender_id) {
        //         return ( offender.name)
        //     }
        // }

        const viewCitations = citations.map(cit => {
            if (cit.enforcer_id === enforcer.id) {
                return (
            <IndividualCitation
            key = {cit.id}
            citation = {cit}
            displayEnforcerName = {displayEnforcerName(cit)}
            />
                )
            }
        }
    )
     return (
            <div>
                {viewCitations}
            </div>
            )
        
}

export default CitationContainer;