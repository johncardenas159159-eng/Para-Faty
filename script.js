document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.getElementById('sobre');
    const musica = document.getElementById('musicaFondo');
    let isOpen = false;

    sobre.addEventListener('click', () => {
        
        // Alternar el estado de abierto/cerrado
        if (isOpen) {
            // CERRAR
            sobre.classList.remove('abierto');
            musica.pause();
            musica.currentTime = 0; // Reinicia la música al cerrar
            isOpen = false;
        } else {
            // ABRIR
            sobre.classList.add('abierto');
            
            // Intenta reproducir la música (puede fallar si el navegador lo bloquea)
            const playPromise = musica.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // La reproducción se inició automáticamente
                }).catch(error => {
                    // La reproducción fue bloqueada (por el usuario)
                    console.log("Error al intentar reproducir la música:", error);
                    // Opcional: Mostrar un mensaje pidiendo al usuario que toque en la pantalla
                });
            }
            isOpen = true;
        }
    });
});