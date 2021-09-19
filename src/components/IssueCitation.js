import React from "react";
import { useState } from "react";

function IssueCitation ( { onAddCitation }) {

    const [formData, setFormData] = useState({

        violation: "",
        amount: "",
        due_date: "",
        summons_date: ""
    })

    function clearForm() {
        setFormData({
        violation: "",
        amount: "",
        due_date: "",
        summons_date: ""
        })
    }

    function handleChange(e) {
        const value = e.target.value
        const name = [e.target.name]
        setFormData({
          ...formData,
          [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

    const newCitation = {
        violation: formData.violation,
        amount: formData.amount,
        due_date: formData.due_date,
        summons_date: formData.summons_date
    }

    fetch( 'https://citation-backend.herokuapp.com/citations', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCitation),
      })
        .then((r) => r.json())
        .then(onAddCitation)
        .then(clearForm)

    }

    return (
        <div>
            <h3>Issue Citation</h3>  
                <form onSubmit = {handleSubmit}>
                {/* <input name = "Offender Name" placeholder = "Offender Name" value = {formData} onChange = {handleChange}/> */}
                  <input name = "violation" placeholder = "Violation" value = {formData.violation} onChange = {handleChange}/>                
                  <input name = "amount" placeholder = "Amount" value = {formData.amount} onChange = {handleChange}/>              
                  <input name = "due_date" placeholder = "Due date" value = {formData.due_date} onChange = {handleChange}/>
                  <input name = "summons_date" placeholder = "Summons date" value = {formData.summons_date} onChange = {handleChange}/>
                  <button> Issue </button>
                </form>
        </div>
    )
}

export default IssueCitation;