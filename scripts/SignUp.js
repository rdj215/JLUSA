function SignUp(){



    if (Validation()==true){

        fetch("/SignUp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName:document.querySelector("#firstNameField").value,
                email:document.querySelector("#emailField").value,
                phone: document.querySelector("#phoneField").value,
                address: document.querySelector("#addressField").value,
                zipcode: document.querySelector("#zipcodeField").value,
                state: document.querySelector("#stateField").value,
                city: document.querySelector("#cityField").value

            })
        })
    }

}

function Validation(){

    return true
}