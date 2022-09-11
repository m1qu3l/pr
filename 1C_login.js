export const Login = () => {

    return `
        <link rel="stylesheet" href="2login.css">
        <div class="login row justify-content-center align-items-center">
            <div class="col-md-4 columna-1">
                <img class="login_img" src="login.svg">
            </div>
            <div class="col-md-6 columna-2">
                <form>
                    <img class="user_img" src="user.svg">
                    <h2 class="text-center">Ingresar</h2>
                    <label class="form-label">Usuario</label>                        
                    <input type="email" class="form-control">
                    <label class="form-label">Contraseña</label>
                    <input type="password" class="form-control">
                    <button class="btn btn-outline-dark"><a href="#/">Ingresar</a></button>
                </form>
            </div>
        </div>
    `
}
