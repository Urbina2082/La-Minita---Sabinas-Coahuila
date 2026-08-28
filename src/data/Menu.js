export const MenuData = [
    {
        id: "entradas",
        nombre: "PARA EMPEZAR",
        subtitulo: "BOTANAS PARA ABRIR LA NOCHE",
        items: [
            { nombre: "Guacamole", precio: 150 },
            { nombre: "Panecillo de maíz con camarones", precio: 180 },
            { nombre: "Rollo hawaiano con camarones", precio: 180 },
            { nombre: "Ensalada fresca con camarones", precio: 185 },
            { nombre: "Aros de cebolla", precio: 105 },
            { nombre: "Alitas con salsa búfalo o BBQ", precio: 160 },
            { nombre: "Boneless con salsa búfalo o BBQ", precio: 160 },
            {
                nombre: "Chilaca rellena de queso Philadelphia, carne y tocino",
                precio: 70
            }
        ]
    },

    {
        id: "caldos",
        nombre: "CALDOS",
        subtitulo: "CALDOS Y SOPAS RECONFORTANTES",
        items: [
            { nombre: "Pescado con pieza", precio: { chico: 90 } },
            { nombre: "Pescado sin pieza", precio: { chico: 75 } },
            { nombre: "Camarón", precio: { chico: 90, grande: 140 } },
            { nombre: "Filete", precio: { chico: 80, grande: 120 } },
            { nombre: "Mixto", precio: { chico: 80, grande: 180 } },
            { nombre: "Sopa de mariscos", precio: { chico: 30, grande: 200 } },
            { nombre: "Vaso camarón", precio: 45 },
            { nombre: "Vaso pescado", precio: 35 }
        ]
    },

    {
        id: "mariscos",
        nombre: "MARISCOS",
        subtitulo: "FRESCOS DEL MAR A TU MESA",
        items: [
            { nombre: "Camarón", precio: { chico: 30, grande: 190 } },
            { nombre: "Campechana", precio: { chico: 160, grande: 210 } },
            { nombre: "Pulpo", precio: { chico: 90, grande: 190 } },
            { nombre: "Ceviche", precio: { chico: 70, grande: 100 } }
        ]
    },

    {
        id: "especiales",
        nombre: "ESPECIALES",
        subtitulo: "PLATILLOS EXCLUSIVOS DE LA CASA",
        items: [
            { nombre: "Fuente caliente", precio: 1200, especialidad: true },
            { nombre: "Filete Minita", precio: 230 },
            { nombre: "Torre de mariscos", precio: 240, especialidad: true },
            { nombre: "Papota 4 quesos con camarón", precio: 300 },
            { nombre: "Camarones aguachile", precio: 260 },
            { nombre: "Brocheta de camarón", precio: 260 },
            { nombre: "Ostiones frescos", precio: 210 }
        ]
    },

    {
        id: "tostadas",
        nombre: "TOSTADAS",
        subtitulo: "CRUJIENDOS SABORES MARINOS",
        items: [
            { nombre: "Ceviche", precio: 70 },
            { nombre: "Camarón", precio: 70 },
            { nombre: "Campechana", precio: 70 },
            { nombre: "Pulpo", precio: 70 }
        ]
    },

    {
        id: "papas",
        nombre: "PAPAS",
        subtitulo: "COMPLEMENTOS Y ENTRADAS CRUJIENTES",
        items: [
            { nombre: "Orden de papas", precio: 40 },
            { nombre: "Papa nachos", precio: 80 },
            {
                nombre: "Papa nachos con arrachera",
                precio: 160,
                descripcion: "Orden de papas cubiertas con queso cheddar y arrachera."
            },
            {
                nombre: "Papa asada con carne",
                precio: 175,
                descripcion: "Orden de papas cubiertas con queso cheddar y chile jalapeño.",
                especialidad: true
            },
            {
                nombre: "Papa sencilla",
                precio: 110,
                descripcion: "Orden de papas cubiertas con queso cheddar y mantequilla."
            }
        ]
    },

    {
        id: "peques",
        nombre: "PEQUES",
        subtitulo: "OPCIONES DELICIOSAS PARA LOS PEQUEÑOS",
        items: [
            { nombre: "Nuggets con papas", precio: 120 },
            { nombre: "Milanesa de pollo", precio: 140 },
            { nombre: "Hamburguesa", precio: 150 }
        ]
    },

    {
        id: "carnes",
        nombre: "CARNES",
        subtitulo: "CORTES Y SELECCIÓN A LA PARRILLA",
        items: [
            {
                nombre: "Tacos de arrachera",
                precio: 50,
                descripcion: "4 tacos en harina o maíz con arrachera, cebolla, queso gratinado y guacamole"
            },
            { nombre: "Cortadillo", precio: 195 },
            { nombre: "T-Bone", precio: 350 },
            { nombre: "Ribeye", precio: 350 },
            {
                nombre: "Parrillada de arrachera",
                precio: 1100,
                descripcion: "Incluye papas fritas, guacamole, salchicha y quesadillas",
                especialidad: true
            }
        ]
    },

    {
        id: "filetes-camaron",
        nombre: "FILETES Y CAMARÓN",
        subtitulo: "PREPARACIONES CLÁSICAS Y DE AUTOR",
        items: [
            { nombre: "Empanizado", precio: { filete: 50, camaron: 190 } },
            { nombre: "A la mexicana", precio: { filete: 170, camaron: 190 } },
            { nombre: "A la diabla", precio: { filete: 170, camaron: 190 } },
            { nombre: "Al mojo de ajo", precio: { filete: 170, camaron: 190 } },
            { nombre: "Ajillo", precio: { filete: 170, camaron: 190 } },
            { nombre: "Entomatados", precio: { filete: 170, camaron: 190 } },
            { nombre: "Metro bato al coco", precio: { filete: 170, camaron: 220 } }
        ]
    },

    {
        id: "pescado",
        nombre: "PESCADO",
        subtitulo: "RECETAS TRADICIONALES DE PESCADO",
        items: [
            { nombre: "Filete al cilantro", precio: 200 },
            { nombre: "Filete a la veracruzana", precio: 200 }
        ]
    },

    {
        id: "pescado-frito",
        nombre: "PESCADO FRITO",
        subtitulo: "AL MOMENTO Y BIEN CRUJIENTE",
        items: [
            { nombre: "Mojarra", precio: 190 },
            { nombre: "Robalo", precio: 190 },
            { nombre: "Bagre", precio: 190 }
        ]
    }
];