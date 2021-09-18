import React from "react";
import CitationContainer from "./CitationContainer";


function individualOffender( { offender } ) {

    return(
        <div>
            <h2>{offender.name}</h2>   
            
            <CitationContainer
            offenderID = {offender.id}
            offenderName = {offender.name}
            />        
        </div>
    )

}

export default individualOffender;