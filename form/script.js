function saveUser(name, email, password, user_type, isActive) {
        let table = document.getElementById('userTable');
        let qtdRows = table.rows.length;
        let row = table.insertRow(qtdRows);

        let cell_name = row.insertCell(0);
        let cell_email = row.insertCell(1);
        let cell_password = row.insertCell(2);
        let cell_userType = row.insertCell(3);
        let cell_isactive = row.insertCell(4);

        cell_name.innerHTML = name;
        cell_email.innerHTML = email;
        cell_password.innerHTML = password;
        cell_userType.innerHTML = user_type;
        cell_isactive.innerHTML = isActive ? "Sim" : "Não"
}






