"use strict";
(() => {
    function callSpiderMan() {
        console.log('Llamando a batman');
    }
    var a = callSpiderMan();
    console.log(a);
    const callAntMan = () => {
        console.log('Llamando a AntMan');
    };
    var b = callAntMan();
    console.log(b);
})();
