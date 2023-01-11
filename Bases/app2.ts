(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true];

    const tuplas: [string, number] = ['Spiderman', 10]; 
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;

    enum FuerzaHero {
      fuerzaFlash,
      fuerzaSuperman,
      fuerzaBatman,
      fuerzaAcuaman
    }
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (<string>poder).length;
    console.log( largoDelPoder );
  
  
  })()
  
  