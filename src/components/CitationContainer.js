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

        function deleteCitation(CitationID) {
            const newURL = `${'http://localhost:3000/citations'}/${CitationID}`;
            const config = { method: "DELETE" };
            fetch(newURL, config)
              .then(r => r.json())
              .then(() => {
                const deleteCitations = citations.filter(citation => citation.id !== CitationID);
               setCitations(deleteCitations)
              })
          }

          function patchCitation(CitationID, updatedCitation) {
            fetch(`${'http://localhost:3000/citations'}/${CitationID}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedCitation),
            })
              .then((r) => r.json())
              .then((updatedCitation) => {
                const updatedCitations = citations.map((citation) => {
                if (citation.id === updatedCitation.id) return updatedCitation;
                  return citation;
                });
                setCitations(updatedCitations);
              })
          }

          function payCitation(CitationID) {
              const setAmountTo0 = {amount: 0}

              patchCitation(CitationID, setAmountTo0)
          }

        const viewCitations = citations.map((cit) => {
            if (cit.enforcer_id === enforcerID || cit.offender_id === offenderID) {
                return (
            <IndividualCitation
            key = {cit.id}
            citation = {cit}
            displayEnforcerName = {displayEnforcerName()}
            displayOffenderName = {displayOffenderName()}
            deleteCitation = {deleteCitation}
            payCitation = {payCitation}
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