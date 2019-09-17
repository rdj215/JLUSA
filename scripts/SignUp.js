function SignUp(){



    if (Validation()==true){

        fetch("/SignUp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName:document.querySelector("#firstNameField").value
            })
        })
    }

}

function Validation(){

    return true
}