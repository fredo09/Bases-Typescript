"use strict";
/**
 * Funcoines con argumentos Rest
 */
(() => {
    const getFullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const spiderman = getFullname("Peter", "Benjamin", "Parker");
    console.log("🚀 ~ spiderman:", { spiderman });
})();
/**
 *  Anotaciones al usar Rest como argumentos o tipo rest
 *
 *  -> Cuando recibimos mas de un parametro pero solo queremos usar uno y de ahi usar el resto
 *      para poder hacer cosas con los args restantes usar Argumentos Rest:
 *
 *      > Usar "..." para hacer referencia al tipo de args que pueden llegar a tener la funcion.
 *          Cabe mencionar que Rest args es un de tipo [].
 *
 *      Nomenclatura al usar args de tipo Rest
 *      (arg1:<tipo>, ...<cualquier_nombre>)
 *
 **/ 
