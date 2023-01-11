(() => {
    console.log('Listo');

    /**
    * NEVER  
    * Usualmente sirve para mostrar Excepciones 
    **/

    const abc = (message: string): never => {
        throw new Error(message);
    };

    abc('Mensaje de Error');

})()