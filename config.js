const config = {
    event: {
        defaultEventId: "oscar-alejandra-2027",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    seo: {
        titulo: "Oscar & Alejandra | Boda 2027",
        descripcion: "Boda de Oscar & Alejandra - 6 de febrero de 2027",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Oscar & Alejandra",
        nombresCompletos: "Oscar Heberto Juárez Martínez & Alejandra de Guadalupe Cruz Alvarado",
        fecha: "06-02-2027",
        fechaVisible: "06 · 02 · 2027"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia de La Merced",
            hora: "3:00 PM",
            direccion: "Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/n9k4w8ixKS7Rr4uz6"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Plaza Guayacán",
            hora: "6:00 PM",
            direccion: "Parque Xejuyup",
            ubicacionUrl: "https://share.google/L1Q5WnyxNpjtqONnJ"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#OscarYAlejandra",
        instagramUrl: "https://www.instagram.com/thetwodesign",
        facebookUrl: "https://www.facebook.com/thetwodesign",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
