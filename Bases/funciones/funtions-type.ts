/**
 *  Funciones de tipo
 */

(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveWord = () => 'El mundo esta salvado...';

    // Asignar una variable como tipo Function
    // let myFunction: Function;

    //Indicamos que la variable sera de tipo funcion y regresa un number y con sus parametros
    //let myFunction: (x: number, y: number) => number;

    //Indicamos que la variable sera de tipo funcion y regresa un number con sus parametros
    //let myFunction: (str: string) => string;

    //indicamos que la varible sera de tipo funcion y no regresa string
    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log("🚀 ~ myFunction 1 :", myFunction);

    //* myFunction = addNumbers;
    //* console.log("🚀 ~ myFunction 2 ~ addNumbers :", myFunction(1, 2));
    
    //? console.log("🚀 ~ myFunction 3 ~ greet:", myFunction('Memo'));
    //? myFunction = greet;
    
    myFunction = saveWord;
    console.log("🚀 ~ myFunction 4 ~ saveWord:", myFunction());


})();