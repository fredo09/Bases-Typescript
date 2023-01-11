(() => {
    /**
     * Enumeracion
     * Se usan para tener un sentido semantico en el codigo 
     * que sea facil de leer.
     * 
     * sintaxis
     * enum <Nombre> {
     * ----
     * }
     */

    //let levelAnime = 2;

    enum LevelAnime {
        min,
        medium,
        max
    };

    let currentAnime = LevelAnime.max;


    console.log(currentAnime);
    console.log(currentAnime);
})()