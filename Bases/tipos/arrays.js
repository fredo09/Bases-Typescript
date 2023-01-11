"use strict";
(() => {
    const array = [2, 3, 4, 5, 6, 10];
    array.push(11);
    console.log(array);
    const villanos = ['duende verde', 'kang', 'Soldado del Invierno'];
    villanos.forEach(v => console.log(v.toLocaleUpperCase()));
})();
