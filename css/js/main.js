// ===== Esperar a que el DOM cargue =====
document.addEventListener('DOMContentLoaded', function() {

    // --- Mostrar año actual en footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Verificar estado de JS ---
    const jsEstado = document.getElementById('jsEstado');
    if (jsEstado) {
        jsEstado.textContent = '✅ Cargado correctamente';
        jsEstado.style.color = '#28a745';
    }

    // --- Prueba dinámica en index.html ---
    const testDinamico = document.getElementById('testDinamico');
    if (testDinamico) {
        testDinamico.textContent = '✅ Prueba dinámica completada';
        testDinamico.style.color = '#28a745';
    }

    // --- Contador de archivos (simulado) ---
    const totalArchivos = document.getElementById('totalArchivos');
    if (totalArchivos) {
        // Contamos los archivos principales
        const archivos = ['index.html', 'about.html', 'contacto.html', 'css/styles.css', 'js/main.js'];
        totalArchivos.textContent = archivos.length + '+';
    }

    // --- Botón de información en index.html ---
    const btnInfo = document.getElementById('btnInfo');
    const infoDisplay = document.getElementById('infoDisplay');
    if (btnInfo && infoDisplay) {
        btnInfo.addEventListener('click', function() {
            if (infoDisplay.style.display === 'none') {
                infoDisplay.style.display = 'block';
                document.getElementById('urlActual').textContent = window.location.href;
                document.getElementById('hostActual').textContent = window.location.host;
                document.getElementById('rutaActual').textContent = window.location.pathname;
                btnInfo.textContent = 'Ocultar información';
            } else {
                infoDisplay.style.display = 'none';
                btnInfo.textContent = 'Mostrar información';
            }
        });
    }

    // --- Formulario de contacto ---
    const formContacto = document.getElementById('formContacto');
    const formRespuesta = document.getElementById('formRespuesta');
    if (formContacto && formRespuesta) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            formRespuesta.style.display = 'block';
            formRespuesta.innerHTML = `
                ✅ <strong>¡Formulario simulado enviado!</strong><br>
                <strong>Nombre:</strong> ${nombre}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Mensaje:</strong> ${mensaje || '(vacío)'}
            `;
            
            // Limpiar campos
            formContacto.reset();
            
            // Ocultar después de 5 segundos
            setTimeout(() => {
                formRespuesta.style.display = 'none';
            }, 5000);
        });
    }

    // --- Contador de visitas simulado (con localStorage) ---
    function actualizarVisitas() {
        try {
            let visitas = localStorage.getItem('prueba_visitas') || 0;
            visitas = parseInt(visitas) + 1;
            localStorage.setItem('prueba_visitas', visitas);

            const visitasSpan = document.getElementById('visitas');
            if (visitasSpan) {
                visitasSpan.textContent = visitas;
            }

            // Contar páginas vistas en esta sesión
            let paginas = parseInt(sessionStorage.getItem('prueba_paginas') || 0);
            paginas += 1;
            sessionStorage.setItem('prueba_paginas', paginas);

            const paginasSpan = document.getElementById('paginasVistas');
            if (paginasSpan) {
                paginasSpan.textContent = paginas;
            }
        } catch (e) {
            // Si localStorage no está disponible, usar valores simulados
            const visitasSpan = document.getElementById('visitas');
            if (visitasSpan) {
                visitasSpan.textContent = Math.floor(Math.random() * 100) + 1;
            }
            const paginasSpan = document.getElementById('paginasVistas');
            if (paginasSpan) {
                paginasSpan.textContent = Math.floor(Math.random() * 50) + 1;
            }
        }
    }

    actualizarVisitas();

    // --- Detectar página actual en navegación ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    console.log('✅ JavaScript cargado correctamente');
    console.log(`📄 Página actual: ${currentPage}`);
    console.log(`🌐 URL: ${window.location.href}`);
});
