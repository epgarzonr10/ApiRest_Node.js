document.addEventListener('DOMContentLoaded', () => {
    const mensajeElement = document.getElementById('mensaje');
    
    async function cargarMensaje() {
        try {
            mensajeElement.textContent = 'Cargando...';
            
            const apiUrl = window.location.hostname === 'localhost' 
                ? 'http://localhost:3000/hello/mensaje' 
                : 'https://apirestnodejs-production-87da.up.railway.app/hello/mensaje';
            
            const response = await fetch(apiUrl);
            
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
