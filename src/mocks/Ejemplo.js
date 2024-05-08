import React, { useEffect, useRef, useState } from 'react';

function MiComponente() {
    const [abierto, setAbierto] = useState(true);
    const ref = useRef(null);

    // Función para cerrar el componente
    const cerrarComponente = () => setAbierto(false);

    // Efecto para añadir y remover el event listener
    useEffect(() => {
        const handleClickFuera = (event) => {
            // Si el clic fue fuera del ref (nuestro componente), lo cierra
            if (ref.current && !ref.current.contains(event.target)) {
                cerrarComponente();
            }
        };

        // Añadir el listener al document
        document.addEventListener('mousedown', handleClickFuera);

        // Cleanup function para remover el listener
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };
    }, []); // Vacío para que solo se ejecute al montar y desmontar

    return abierto ? (
        <div ref={ref} style={{ padding: 20, background: 'lightblue', width: '200px', margin: '20px auto' }}>
            Haga clic fuera de este div para cerrar el componente.
        </div>
    ) : null;
}

export default MiComponente;


// Explicación
// useState y useRef: Utilizamos useState para controlar la visibilidad del componente y 
// useRef para referenciar el div que representa nuestro componente.
// useEffect: Añadimos un listener al montar el componente y lo eliminamos al desmontar. 
// Esto ayuda a evitar fugas de memoria.
// handleClickFuera: Esta función se ejecuta cada vez que se hace clic en el documento. 
// Usa contains para verificar si el clic fue dentro del componente. Si no fue así, llama 
// a cerrarComponente.