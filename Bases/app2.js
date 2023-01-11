"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const tuplas = ['Spiderman', 10];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let FuerzaHero;
    (function (FuerzaHero) {
        FuerzaHero[FuerzaHero["fuerzaFlash"] = 0] = "fuerzaFlash";
        FuerzaHero[FuerzaHero["fuerzaSuperman"] = 1] = "fuerzaSuperman";
        FuerzaHero[FuerzaHero["fuerzaBatman"] = 2] = "fuerzaBatman";
        FuerzaHero[FuerzaHero["fuerzaAcuaman"] = 3] = "fuerzaAcuaman";
    })(FuerzaHero || (FuerzaHero = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
