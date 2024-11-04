   document.getElementById('añadir').addEventListener('click', function() {
            document.getElementById('prodNuevo').style.display = 'block';
            document.getElementById('prodEditar').style.display = 'none';
        });

        document.getElementById('editar').addEventListener('click', function() {
            document.getElementById('prodEditar').style.display = 'block';
            document.getElementById('prodNuevo').style.display = 'none';
        });