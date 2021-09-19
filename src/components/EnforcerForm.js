import React from "react";
import { useState } from "react";

function EnforcerForm ( { onAddEnforcer } ) {

    const [formData, setFormData] = useState({
        name: "",
        badge_number: ""
    })

    function clearForm() {
        setFormData({
            name: "",
            badge_number: ""
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

    const newEnforcer = {
        name: formData.name,
        badge_number: formData.badge_number
    }

    fetch( 'https://citation-backend.herokuapp.com/enforcers', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEnforcer),
      })
        .then((r) => r.json())
        .then(onAddEnforcer)
        .then(clearForm)

    }
        return (
            <div>
                <h3>Register Enforcer</h3>  
                  <form onSubmit = {handleSubmit}>
                     <input name = "name" placeholder = "Name" value = {formData.name} onChange = {handleChange}/>
                     <input name = "badge_number" placeholder = "Badge Number" value = {formData.badge_number} onChange = {handleChange}/>
                     <button> Submit </button>
                  </form>
            </div>
        )
        
    }

export default EnforcerForm;