import React from "react";


function individualEnforcer( { enforcer } ) {

    const { name, badge_number } = enforcer

    return(
        <div>
            <h4>{name}</h4>
            <h4>Badge #: {badge_number}</h4>
            
        </div>
    )

}

export default individualEnforcer;