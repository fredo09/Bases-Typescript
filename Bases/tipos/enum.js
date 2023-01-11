"use strict";
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
    let LevelAnime;
    (function (LevelAnime) {
        LevelAnime[LevelAnime["min"] = 0] = "min";
        LevelAnime[LevelAnime["medium"] = 1] = "medium";
        LevelAnime[LevelAnime["max"] = 2] = "max";
    })(LevelAnime || (LevelAnime = {}));
    ;
    let currentAnime = LevelAnime.max;
    console.log(currentAnime);
    console.log(currentAnime);
})();
