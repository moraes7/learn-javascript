function getUserData() {
        const user = {
                "name": "",
                "email": "",
                "password": "",
                "userType": "",
                "active": false
        };

        let name = document.getElementById('iname');
        user.name = name;

        let email = document.getElementById('iemail');
        user.email = email;

        let password = document.getElementById('ipassword');
        user.password = password;

        let userType = document.getElementById('iselect');
        user.userType = userType;

        let active = document.getElementById('iactive');
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
        cell_email.innerHTML = email;
        cell_password.innerHTML = password;
        cell_userType.innerHTML = user_type;
        cell_isactive.innerHTML = isActive ? "Sim" : "Não"

        cell_actions.innerHTML = '<a href="#" onclick="editUser('+qtdRows+')">Editar</a> || <a href="#" onclick="deleteUser('+qtdRows+')">Excluir</a> '


}

function saveUser() {
        const user = getUserData();
        addRow(user);
         
}






