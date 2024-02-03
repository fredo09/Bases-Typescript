/**
 * Funciones con argumentos opcionales
 */

(() => {
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    
      if ( upper ) {
        return `${firstName} ${lastName || ""}`.toUpperCase();
      } else {
          return `${firstName} ${lastName || ""}`;
      }
      
  };

  const name = fullName("Pepe", "Montoya", true);

  console.log("🚀 ~ name:", name);
})();


/**
 * Functiones con argumentos opcionales
 * 
 * -> Para decirnos que una funcion puede tener un argumento por defecto podemos usar "=" y su valor por defecto
 *    como la siguiente estructura:
 *    ````
 *      -> Cuerpo del argumentos en un a funcion (<arg1: tipo>, <arg2:tipo> = 'valor_inicial')
      ````
 */
