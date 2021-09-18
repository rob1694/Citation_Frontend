import React from "react";


function individualCitation( { citation } ) {

    const { offender_id, enforcer_id, violation, amount, due_date, summons, summons_date, created_at } = citation

    function displayOffenderName (offenderID) {
        if (offenderID === offender_id) {
            return ( offenderID.name)
        }
    }

    // function displayEnforcerName () {

    // }

    return(
        <div>
            <h4>Offender: {}</h4>
            <h4>Enforced By: {}</h4>
            <h4>Violation: {violation}</h4>
            <h4>Amount Due: {amount}</h4>
            <h4>Payment Due: {due_date}</h4>
            <h4>Summons: {summons}</h4>
            <h4>Summmons Date (If Applicable){summons_date}</h4>
            <h4>Date Issued: {created_at}</h4>
            <h4>{}</h4>
            
        </div>
    )

}

export default individualCitation;