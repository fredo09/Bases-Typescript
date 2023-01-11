"use strict";
(() => {
    console.log('Listo');
    /**
    * NEVER
    * Usualmente sirve para mostrar Excepciones
    **/
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Mensaje de Error');
})();
