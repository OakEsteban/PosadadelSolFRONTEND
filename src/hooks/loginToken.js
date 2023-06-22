// Verificar si el usuario ha iniciado sesión
const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token; // Devuelve true si el token existe, de lo contrario, devuelve false
};

// Cerrar la sesión del usuario
const logout = () => {
    localStorage.removeItem('token');
    // Realiza cualquier otra lógica necesaria para cerrar la sesión
};

export { isLoggedIn, logout };
