(() => {
    function callSpiderMan(): void {
        console.log('Llamando a batman');
    }

    var a = callSpiderMan();

    console.log(a);


    const callAntMan = ():void => {
        console.log('Llamando a AntMan');
    }

    var b = callAntMan();

    console.log(b); 
})()