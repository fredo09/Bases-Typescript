/**
 *
 * Functions en typescript
 */

//Function autoinvocada
(() => {
  const hero: string = "spiderman";

  //Funcion estandar
  function retrunName(): string {
    return hero;
  }

  //funcion de tipo flecha
  const activarBatisenal = (): string => {
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
