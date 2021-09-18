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
        
        const displayEnforcerName = () => (enforcerName);

        const displayOffenderName = () => (offenderName);

        const viewCitations = citations.map((cit) => {
            if (cit.enforcer_id === enforcerID || cit.offender_id === offenderID) {
                return (
            <IndividualCitation
            key = {cit.id}
            citation = {cit}
            displayEnforcerName = {displayEnforcerName()}
            displayOffenderName = {displayOffenderName()}
            />
                )
            }
            else return (
                <h3>
                    No Active Citations
                </h3>
            )
        }
    )
     return (
            <div>
                {viewCitations}
            </div>
            )
        
}

export default CitationContainer;