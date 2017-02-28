class User {
    name: string;
    login: string;
    password: string;
}

class UserController {

    save(user: User): void {

        let tdName = document.createElement("td");
        tdName.innerHTML = `${user.name}`;

        let tdLogin = document.createElement("td");
        tdLogin.innerHTML = `${user.login}`;

        let row = document.createElement("tr");
        row.appendChild(tdName);
        row.appendChild(tdLogin);

        let table = document.getElementById('userTable');
        table.appendChild(row);

        (<HTMLInputElement>document.getElementById('inptName')).value = '';
        (<HTMLInputElement>document.getElementById('inptLogin')).value = '';
        (<HTMLInputElement>document.getElementById('inptPassword')).value = '';

    }

}