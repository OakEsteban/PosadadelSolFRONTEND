
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

//Obetner el id del token
const getid = () => {

    try{
        const token = localStorage.getItem('token');
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const tokenData = JSON.parse(jsonPayload);
        return tokenData.userId;
    }
    catch{
        
    }
 
}

export { isLoggedIn, logout, getid };
