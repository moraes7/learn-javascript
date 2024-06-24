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

        cell_actions.innerHTML = '<a href="#" onclick="editUser(' +qtdRows+ ')">Editar</a> | <a href="#" onclick="deleteUser(this)">Excluir</a>';


}

function saveUser() {
        const user = getUserData();
        addTableRow(user);

}

function deleteUser(delUser) {
        let delete_user = delUser.parentNode.parentNode.rowIndex;
        document.getElementById('userTable').deleteRow(delete_user)
}






