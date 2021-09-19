import React from "react";
import CitationContainer from "./CitationContainer";

function IndividualEnforcer( { enforcer } ) {

    const { name, badge_number } = enforcer

    return(
        <div>
            <h2>{name} Badge #: {badge_number}</h2>
            <CitationContainer
            enforcerID = {enforcer.id}
            enforcerName = {enforcer.name}
            />
            
        </div>
    )

}

export default IndividualEnforcer;