import React from "react";


function individualCitation({ 
    citation, 
    displayEnforcerName, 
    displayOffenderName, 
    deleteCitation, 
    payCitation,
    switchPaytoPaid 
}) {

    const { id, violation, amount, due_date, summons, summons_date, created_at, updated_at } = citation

    function handleDeleteCitation () {
        deleteCitation(id)
    }

    function handlePayCitation() {
        payCitation(id)
    }

    return(
        <div>
            <h4>Offender: {displayOffenderName}</h4>
            <h4>Enforced By: {displayEnforcerName}</h4>
            <h4>Violation: {violation}</h4>
            <h4>Amount Due: {amount}</h4>
            <h4>Payment Due: {due_date}</h4>
            <h4>Summons: {summons}</h4>
            <h4>Summmons Date (If Applicable){summons_date}</h4>
            <h4>Date Issued: {created_at}</h4>
            <h4>Date Updated: {updated_at}</h4>
            <button onClick = {handleDeleteCitation}>Resolve Citation</button>
            <button onClick = {handlePayCitation}>Pay Citation</button>
            <button >Dispute</button> 
        </div>
    )

}

export default individualCitation;