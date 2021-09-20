import React from "react";


function individualCitation({ 
    citation, 
    displayEnforcerName, 
    displayOffenderName, 
    deleteCitation, 
    payCitation,
    disputeCitation
}) {

    const { id, violation, amount, due_date, summons_date, created_at, updated_at } = citation

    function handleDeleteCitation () {
        deleteCitation(id)
    }

    function handlePayCitation() {
        payCitation(id)
    }

    function handleDisputeCitation() {
        disputeCitation(id)
    }
    

    return(
        <div class = "container" >
            <h4 class="list-group-item" >Offender: {displayOffenderName}</h4>
            <h4 class="list-group-item">Enforced By: {displayEnforcerName}</h4>
            <h4 class="list-group-item">Violation: {violation}</h4>
            <h4 class="list-group-item">Amount Due: {amount}</h4>
            <h4 class="list-group-item">Payment Due: {due_date}</h4>
            <h4 class="list-group-item">Summons Date (If Applicable){summons_date}</h4>
            <div class ="card-footer text-muted">
                <h4>Date Issued: {created_at}</h4>
                <h4>Date Updated: {updated_at}</h4>
            </div>
            <div>
                <button type="button" class="btn btn-success btn-lg" onClick = {handleDeleteCitation}>Resolve Citation</button>
            </div>

            <button type="button" class="btn btn-primary "onClick = {handlePayCitation}>Pay Citation</button>
            <button type="button" class="btn btn-warning"onClick = {handleDisputeCitation}>Dispute</button> 
        </div>
    )

}

export default individualCitation;