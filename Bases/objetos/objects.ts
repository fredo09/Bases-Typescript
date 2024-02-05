/**
 *  Objectos en Typescript
 **/

(() => {

    let spiderman = {
        name: "Peter",
        edada: 26,
        powers: ['trepar muros', 'columpiarse con telarañas', 'sentido aracnido', 'super fuerza']
    }

    spiderman = {
        name: 'Parker',
        edad: 90,
        powers: ['Planear'],
        getName() {
            return this.name
        }
    }

})();