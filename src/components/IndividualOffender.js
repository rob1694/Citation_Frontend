import React from "react";
import CitationContainer from "./CitationContainer";


function individualOffender( { offender } ) {

    return(
        <div>
            <h2>{offender.name}</h2>   
            <CitationContainer/>        
        </div>
    )

}

export default individualOffender;