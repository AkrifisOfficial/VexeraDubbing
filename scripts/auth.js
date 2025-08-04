const ADMIN_PASSWORD = "vexera_admin_password"; // Замените на реальный пароль

function loginAdmin() {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadAnimeForAdmin();
    } else {
        alert("Неверный пароль!");
    }
}
