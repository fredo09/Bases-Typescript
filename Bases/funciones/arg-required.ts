/**
 *   Funcion con argumentos requeridos
 **/

(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `·${firstName} ${lastName}`;
  };

  const name = fullName("Pepe", "Montoya");

  console.log("🚀 ~ name:", name);
})();

/**
 * Functiones con argumentos requeridos
 * 
 * -> Para decirnos que una funcion requiere si o si los argumentos necesitamos 
 *    usar esta estructura dentro de sus argumentos:
 *    ````
 *      -> Cuerpo del argumentos en un a funcion (<arg1: tipo>, <arg2:tipo>)
      ````  
      Tmabien para decir que podemos recibir un tipo o otro en un argumento usamos 
      
        > (<arg1: tipo>, <arg2:tipo1 | tipo2>)
 */
