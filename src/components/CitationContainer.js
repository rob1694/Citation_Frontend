import React from "react";
import { useEffect, useState } from "react";
import IndividualCitation from "./IndividualCitation";

function CitationContainer() {


    const [citations, setCitations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/citations')
          .then(r => r.json())
          .then((json) => setCitations(json))
        }, []);
        

        const viewCitations = citations.map((cit) => (
            <IndividualCitation
            key = {cit.id}
            citation = {cit}
            />
            )
        )
     return (
            <div>
                {viewCitations}
            </div>
            )
        
}

export default CitationContainer;