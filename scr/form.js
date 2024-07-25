const form = `

    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form class="row g-3 justify-content-center">
                 <h4 class="text-center mb-5">Acceder a tu cuenta</h4>
                    <div class="col-md-6 custom-width">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-6 custom-width">
                        <label for="inputPassword4" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-12 custom-width">
                        <label for="inputAddress" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="">
                    </div>
                    <div class="col-12 custom-width">
                        <label for="inputAddress2" class="form-label">Dirección 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Departamento, Casa, Piso">
                    </div>
                    <div class="col-md-6 custom-width">
                        <label for="inputCity" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-6 custom-width">
                        <label for="inputState" class="form-label">Provincia</label>
                        <select id="inputState" class="form-select">
                            <option selected>Elegir</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-12 custom-width">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Verificar
                            </label>
                        </div>
                    </div>
                    <div class="col-12 custom-width d-flex justify-content-center">
                        <button type="submit" class="btn btn-outline-dark">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    </div>





`

export {form}