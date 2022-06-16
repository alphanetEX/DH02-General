/* requerir módulo autos */
let autos = require('./autos');
const concesionaria = {
    autos : autos,
    buscarAuto: function(idPatente){
      let result; 
      for (let i=0; i < this.autos.length; i++){
        if(this.autos[i].patente === idPatente ) { 
          result = this.autos[i];
        } else {
          result = null;
        }
      }
      return result;
   },
   venderAuto: function(idPatente){
     let objAuto = this.buscarAuto(idPatente);
     objAuto.vendido = true;
   },

   autosParaLaVenta: function(){
     return this.autos.filter(function(obAutosDisp){
     return obAutosDisp.vendido != true;
   });
  },

  autosNuevos: function(){
    let autoNewRaw = this.autosParaLaVenta();
    let autoNewdisp = this.autosParaLaVenta();
    let maxlgt = autoNewdisp.length; 
    let aux; 
    let notcarnew= []; 
    for (let i = 0; i < maxlgt; i++){
      if( autoNewRaw[i].km > 100) {
        notcarnew.push(autoNewdisp[i]);
        aux = autoNewdisp[maxlgt-1];
        autoNewdisp[maxlgt-1] = autoNewdisp[i];
        autoNewdisp[i] = aux;
        autoNewdisp.pop();
      };     
    };
    if(autoNewdisp.length !=0 && notcarnew.length != 0){
      return autoNewdisp; 
    }else if ( autoNewdisp.length == 0 && notcarnew.length !=0){
      return { warning: "originalmente no cumple con los requisitos" ,...notcarnew }
    }else{
      return null
    }
  },
  
  listaDeVentas: function(){
    let precioventa=[];
    let autosvendidos = this.autos.filter(function(autovendido){
      return autovendido.vendido != false;
    });
    
    for (let i = 0; i < autosvendidos.length; i++) {
      precioventa.push(autosvendidos[i].precio);
    }
    return precioventa;
  }, 


  totalDeVentas: function(){
    try{
      let valorventas = this.listaDeVentas().reduce((acum, ardautos) => acum += ardautos.precio)
      return valorventas;
    }catch {
    return 0;
    }
  },

  puedeComprar : function(auto, persona){
    let {precio, cuotas} = auto
    let { capacidadDePagoTotal, capacidadDePagoEnCuotas } = persona;
    let deltacuota  = precio / cuotas;  
    let valprice = precio < capacidadDePagoTotal;   
    let valquota = deltacuota < capacidadDePagoEnCuotas; 
    return  valprice  && valquota === true ? true : false;
  
    },
  autosQuePuedeComprar: function(persona){
    let autosdisp = this.autosParaLaVenta();
    //lexical binding application
    let result = autosdisp.filter((obj)=>{
      let val = this.puedeComprar(obj, persona);
      let spread = { valbuy: val, ...obj}; 
      
      return spread.valbuy === true;
      
  }); 

    return result;
  }
}



// console.log(concesionaria.autosNuevos());

// console.log(concesionaria.autosNuevos());

// console.log(concesionaria.autosNuevosFX());

// console.log(concesionaria.autosNuevos());

// concesionaria.venderAuto("JJK116");
// console.log(concesionaria.totalDeVentas());

let persona =  {
  nombre: 'Juan',
  capacidadDePagoEnCuotas: 8500,
  capacidadDePagoTotal: 120000
  }
// let autosdisp = concesionaria.buscarAuto("JJK116");
// console.log(concesionaria.puedeComprar(autosdisp, persona));
console.log(concesionaria.autosQuePuedeComprar(persona));