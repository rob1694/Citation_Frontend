import React from "react";
import CitationContainer from "./CitationContainer";

function IndividualEnforcer( { enforcer } ) {

    const { name, badge_number } = enforcer

    return(
        <div class = "card">
            <h2 class = "card-header">{name} Badge #: {badge_number}</h2>
        <div class = "card-body">

            <CitationContainer
            enforcerID = {enforcer.id}
            enforcerName = {enforcer.name}
            />
        </div>
            
        </div>
    )

}

export default IndividualEnforcer;