import React from "react";
import CitationContainer from "./CitationContainer";

function individualEnforcer( { enforcer, offender } ) {

    const { name, badge_number } = enforcer

    return(
        <div>
            <h2>{name} Badge #: {badge_number}</h2>
            <CitationContainer
            enforcer = {enforcer}
            />
        </div>
    )

}

export default individualEnforcer;