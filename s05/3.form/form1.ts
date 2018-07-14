namespace s5form {
    // get all elements

    let btnSubmit = document.querySelector('#btnSubmit') as HTMLButtonElement;
    let txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;

    

    btnSubmit.onclick = () => {
        let firstName = txtFirstName.value;
        alert(`Hello + ${firstName}`)

    }
}