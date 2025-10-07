const productos = [
    {
        id: 1,
        nombre: "Libreta Profesional Cuadro",
        precio: 35,
    },
    {
        id: 2,
        nombre: "Agenda Basica",
        precio: 50,
    },
    {
        id: 3,
        nombre: "Lapiceros de colores",
        precio: 20,
    }
];

function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    
    setTimeout(() => {
        contenedor.innerHTML = '';
        
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio} MXN</p>
            `;
            contenedor.appendChild(div);
        });
    }, 500);
}

function cambiarContenido(pagina) {
    const contenido = document.getElementById('contenido');
    
    switch(pagina) {
        case 'papeleria':
            contenido.innerHTML = `
                <div class="container">
                    <h2 class="main-heading">Encuentra nuestros productos de papeleria al mejor precio</h2>
                    <div id="lista-productos" class="vehicle_section">
                        <p style="text-align: center; width: 100%;">Cargando productos...</p>
                    </div>
                </div>
            `;
            cargarProductos();
            break;
            
        case 'electronica':
            contenido.innerHTML = `
                <div class="container">
                    <div class="info-section">
                        <h2>Productos de electronica</h2>
                        <p>Nuestros propductos de electronica</p>
                    </div>
                </div>
            `;
            break;
            
        case 'snacks':
            contenido.innerHTML = `
                <div class="container">
                    <div class="info-section">
                        <h2>Snacks</h2>
                        <p><strong>Nuestro Snacks</p>
                    </div>
                </div>
            `;
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    
    const links = document.querySelectorAll('.main_nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const pagina = link.getAttribute('data-page');
            cambiarContenido(pagina);
        });
    });
});

