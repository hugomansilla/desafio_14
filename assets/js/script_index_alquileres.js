// Arreglo de alquileres 
const propiedades_alquiler = [
    {
        id: 1,
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        id: 2,
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        id: 3,    
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        id: 4,
        nombre: 'Apartamento en el centro de la ciudad 2',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    }
];

// Recorrer el arreglo de alquileres
var htmlAlquileres = "";

for (let i = 0; i < Math.min(propiedades_alquiler.length, 3); i++) {

    let alquiler = propiedades_alquiler[i];

    if (alquiler.smoke && alquiler.pets) {
       htmlAlquileres += `<div class="col-md-4 mb-4">
       <div class="card">
           <img src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
           >
           <div class="card-body"> 
               <h5 class="card-title"> ${alquiler.nombre} </h5>
               <p class="card-text"> ${alquiler.descripcion} </p>
               <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion} </p>
               <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones </p>
               <p> <i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>
               <p class= "text-success"><i class="fas fa-smoking"></i> Se permite fumar </p>
               <p class= "text-success"><i class="fas fa-paw"></i> Se permiten mascotas </p>
           </div>
       </div>
    </div> `;
   
    } else if (alquiler.smoke && alquiler.pets === false) {
       htmlAlquileres += `<div class="col-md-4 mb-4">
       <div class="card">
           <img src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
           >
           <div class="card-body"> 
               <h5 class="card-title"> ${alquiler.nombre} </h5>
               <p class="card-text"> ${alquiler.descripcion} </p>
               <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion} </p>
               <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones </p>
               <p> <i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>
               <p class= "text-success"><i class="fas fa-smoking"></i> Se permite fumar </p>
               <p class= "text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p>
           </div>
       </div>
    </div> `;
    } else if (alquiler.smoke === false && alquiler.pets) {
       htmlAlquileres += `<div class="col-md-4 mb-4">
       <div class="card">
           <img src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
           >
           <div class="card-body"> 
               <h5 class="card-title"> ${alquiler.nombre} </h5>
               <p class="card-text"> ${alquiler.descripcion} </p>
               <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion} </p>
               <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones </p>
               <p> <i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>
               <p class= "text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar </p>
               <p class= "text-success"><i class="fas fa-paw"></i> Se permiten mascotas </p>
           </div>
       </div>
    </div> `;
    } else {
       htmlAlquileres += `<div class="col-md-4 mb-4">
       <div class="card">
           <img src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
           >
           <div class="card-body"> 
               <h5 class="card-title"> ${alquiler.nombre} </h5>
               <p class="card-text"> ${alquiler.descripcion} </p>
               <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion} </p>
               <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones </p>
               <p> <i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>
               <p class= "text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar </p>
               <p class= "text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p>
           </div>
       </div>
    </div> `;
    }
}

const alq = document.querySelector("#card-alquileres");
alq.innerHTML = htmlAlquileres;