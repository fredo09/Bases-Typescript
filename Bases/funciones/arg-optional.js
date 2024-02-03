"use strict";
/**
 * Funciones con argumentos opcionales
 */
(() => {
    const fullName = (firstName, lastName) => {
        return `·${firstName} ${lastName || ""}`;
    };
    const name = fullName("Pepe");
    console.log("🚀 ~ name:", name);
})();
/**
 * Functiones con argumentos opcionales
 *
 * -> Para decirnos que una funcion puede tener un argumento opcional al usar "?"
 *    como la siguiente estructura:
 *    ````
 *      -> Cuerpo del argumentos en un a funcion (<arg1: tipo>, <arg2?:tipo>)
      ````
 */
