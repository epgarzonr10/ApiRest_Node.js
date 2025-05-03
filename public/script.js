document.addEventListener('DOMContentLoaded', () => {
    const mensajeElement = document.getElementById('mensaje');
    
    async function cargarMensaje() {
        try {
            mensajeElement.textContent = 'Cargando...';
            
            const response = await fetch('http://localhost:3000/hello/mensaje');
            
            if (!response.ok) {
                throw new Error('Error en la comunicación con el servidor');
            }
            
            const data = await response.json();
            
            mensajeElement.textContent = data.mensaje;
            
        } catch (error) {
            mensajeElement.textContent = `Error: ${error.message}`;
            console.error('Error:', error);
        }
    }
    
    cargarMensaje();
});