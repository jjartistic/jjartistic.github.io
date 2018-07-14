namespace homework {
    let txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;
    let txtLastName = document.querySelector('#txtLastName') as HTMLInputElement;
    let txtCode = document.querySelector('#txtCode') as HTMLInputElement;
    let txtAddress = document.querySelector('#txtAddress') as HTMLInputElement;
    let txtCity = document.querySelector('#txtCity') as HTMLInputElement;
    let txtState = document.querySelector('#txtState') as HTMLInputElement;


    let tblContact = document.querySelector('#tblContact') as HTMLTableElement;

    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;

    frmContact.onsubmit = () =>{
        let firstName = txtFirstName.value;
        let row = tblContact.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = firstName;
        txtFirstName.value = "";

        let lastName = txtLastName.value;
        cell = row.insertCell();
        cell.innerHTML = lastName;
        txtLastName.value = "";

       

        let zipCode = txtCode.value;
        cell = row.insertCell();
        cell.innerHTML = zipCode;
        txtCode.value = "";

  

        let address = txtAddress.value;
        cell = row.insertCell();
        cell.innerHTML = address;
        txtAddress.value = "";



        let city = txtCity.value;
        cell = row.insertCell();
        cell.innerHTML = city;
        txtCity.value = "";


        let state = txtState.value;
        cell = row.insertCell();
        cell.innerHTML = state;
        txtState.value = "";

        txtFirstName.focus();
        return false

    }


}