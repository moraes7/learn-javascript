function getUserData() {
        const user = {
                "id": "",
                "name": "",
                "email": "",
                "password": "",
                "userType": "",
                "active": false
        }

        let iuserId = document.getElementById('userId');
        if(iuserId) {
          user.id = iuserId.value
        } 

        let name = document.getElementById('iname').value;
        user.name = name;

        let email = document.getElementById('iemail').value;
        user.email = email;

        let password = document.getElementById('ipassword').value;
        user.password = password;

        let userType = document.getElementById('iselect').value;
        user.userType = userType;

        let active = document.getElementById('iactive').checked;
        user.active = active;

        return user; 
}

function addTableRow(user) {
        let table = document.getElementById('userTable');
        let qtdRows = table.rows.length;
        let row = table.insertRow(qtdRows);
        row.setAttribute("id", "tr-userid-" + qtdRows);

        let cell_name = row.insertCell(0);
        let cell_email = row.insertCell(1);
        let cell_password = row.insertCell(2);
        let cell_userType = row.insertCell(3);
        let cell_isactive = row.insertCell(4);
        let cell_actions = row.insertCell(5);

        cell_name.innerHTML = user.name;
        cell_email.innerHTML = user.email;
        cell_password.innerHTML = user.password;
        cell_userType.innerHTML = user.userType;
        cell_isactive.innerHTML = user.active ? "Sim" : "Não";

        cell_actions.innerHTML = '<a href="#" onclick="editUser(this)">Editar</a> | <a href="#" value="Delete" onclick="deleteUser(this)">Excluir</a>'

     

}

function saveUser() {
        const user = getUserData();

        if(user.id) {
          updateTableRow(user);
        }else {
          addTableRow(user);
        }

        document.getElementById('formUser').reset();
        document.getElementById('userId').value = "";

}

function updateTableRow(user) {
        let row = document.getElementById(user.id);

        row.cells[0].innerHTML = user.name;
        row.cells[1].innerHTML = user.email;
        row.cells[2].innerHTML = user.password;
        row.cells[3].innerHTML = user.userType;
        row.cells[4].innerHTML = user.active ? "Sim" : "Não";
}

function loadForm(user) {
        document.getElementById('userId').value = user.id;
        document.getElementById('iname').value = user.name;
        document.getElementById('iemail').value = user.email;
        document.getElementById('ipassword').value = user.password;
        document.getElementById('iselect').value;
        document.getElementById('iactive').checked = user.active;
}

function editUser(edit){
        let edit_user = edit.parentNode.parentNode;

        loadForm({
          "id": edit_user.id,
          "name": edit_user.cells[0].innerHTML,
          "email": edit_user.cells[1].innerHTML,
          "password": edit_user.cells[2].innerHTML,
          "userType": edit_user.cells[3].innerHTML,
          "active": (edit_user.cells[4].innerHTML == "Sim")?true:false
        });
}

function deleteUser(delUser) {
        let delete_user = delUser.parentNode.parentNode.rowIndex;
        document.getElementById('userTable').deleteRow(delete_user)
}



