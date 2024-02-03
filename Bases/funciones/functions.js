"use strict";
/**
 *
 * Functions en typescript
 */
//Function autoinvocada
(() => {
    const hero = "spiderman";
    //Funcion estandar
    function retrunName() {
        return hero;
    }
    //funcion de tipo flecha
    const activarBatisenal = () => {
        return "Señal activada!!";
    };
    console.log(typeof activarBatisenal);
})();
/**
    Recomendaciones < Apuntes >
    -> Siempre como una buena practica poner el valor de retorno de cada funcion...

    ````
        function <NameFunctino>:<valor_de_retorno>() {
            //hace algo...
            return <valor_rrtorno>
        }
    ````

 **/
