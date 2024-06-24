function getUserData() {
        const user = {
                "name": "",
                "email": "",
                "password": "",
                "userType": "",
                "active": false
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

        cell_actions.innerHTML = '<a href="#" onclick="editUser(this)">Editar</a> | <a href="#" onclick="deleteUser(this)">Excluir</a>';


}

function saveUser() {
        const user = getUserData();
        addTableRow(user);

}

function deleteUser(delUser) {
        let delete_user = delUser.parentNode.parentNode.rowIndex;
        document.getElementById('userTable').deleteRow(delete_user)
}

function editUser(edit) {
        let edit_user = edit.parentNode.parentNode;

        let cell_name = edit_user.cells[0];
        let cell_email = edit_user.cells[1];
        let cell_password = edit_user.cells[2];
        let cell_userType = edit_user.cells[3];
        let cell_isactive = edit_user.cells[4];

        let name_input = prompt("Nome:", cell_name.innerHTML);
        let email_input = prompt("Email:", cell_email.innerHTML);
        let password_input = prompt("Senha:", cell_password.innerHTML);
        let userType_input = prompt("Tipo de usuário:", cell_userType.innerHTML);
        let active_input = prompt("Ativo?", cell_isactive.innerHTML);

        cell_name.innerHTML = name_input;
        cell_email.innerHTML = email_input;
        cell_password.innerHTML = password_input;
        cell_userType.innerHTML = userType_input;
        cell_isactive.innerHTML = active_input;
}





