import React from "react";
import { useEffect, useState } from "react";
import IndividualCitation from "./IndividualCitation";
import IssueCitation from "./IssueCitation";

function CitationContainer( { enforcerID, enforcerName, offenderID, offenderName } ) {


    const [citations, setCitations] = useState([])

    useEffect(() => {
        fetch('https://citation-backend.herokuapp.com/citations')
          .then(r => r.json())
          .then((json) => setCitations(json))
        }, []);

        function deleteCitation(CitationID) {
            const newURL = `${'https://citation-backend.herokuapp.com/citations'}/${CitationID}`;
            const config = { method: "DELETE" };
            fetch(newURL, config)
              .then(r => r.json())
              .then(() => {
                const deleteCitations = citations.filter(citation => citation.id !== CitationID);
               setCitations(deleteCitations)
              })
          }

          function patchCitation(CitationID, updatedCitation) {
            fetch(`${'https://citation-backend.herokuapp.com/citations'}/${CitationID}`, {
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
              const paid = {amount: 0, due_date: "No amount owed"}
              patchCitation(CitationID, paid)
          }

          function disputeCitation(CitationID) {
            const dispute = {due_date: "Pending Dispute"}
            patchCitation(CitationID, dispute)
          }

          const displayEnforcerName = () => (enforcerName);

          const displayOffenderName = () => (offenderName);

          function addCitation(citation) {
            setCitations([...citations, citation]);
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
            disputeCitation = {disputeCitation}
                />
               )
            }
          }
        )

        

     return (
            <div>
                <IssueCitation onAddCitation = {addCitation}/>
                {viewCitations}
            </div>
            )
        
}

export default CitationContainer;