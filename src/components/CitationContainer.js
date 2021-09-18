import React from "react";
import { useEffect, useState } from "react";
import IndividualCitation from "./IndividualCitation";

function CitationContainer( { enforcerID, enforcerName, offenderID, offenderName } ) {


    const [citations, setCitations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/citations')
          .then(r => r.json())
          .then((json) => setCitations(json))
        }, []);
        
        function displayEnforcerName (citation) {
            if (enforcerID === citation.enforcer_id) {
                return (enforcerName)
            }
        }

        function displayOffenderName (citation) {
            if (offenderID === citation.offender_id) {
                return ( offenderName)
            }
        }

        const viewCitations = citations.map((cit) => {
            if (cit.enforcer_id === enforcerID || cit.offender_id === offenderID) {
                return (
            <IndividualCitation
            key = {cit.id}
            citation = {cit}
            displayEnforcerName = {displayEnforcerName(cit)}
            displayOffenderName = {displayOffenderName(cit)}
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