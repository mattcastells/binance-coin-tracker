// Traer datos de la API de Binance
const APIURL = 'https://api2.binance.com/api/v3/ticker/24hr';

async function traerCriptomonedas(url) {

    const respuesta = await fetch(url);
    const respuestaDatos = await respuesta.json();

    mostrarCriptomonedas(respuestaDatos);
};

traerCriptomonedas(APIURL);

// Imprimir monedas en pantalla

function mostrarCriptomonedas (monedasAPI) {

    const contenedorCripto = document.getElementById('contenedorCripto');

    let BTCUSDT = monedasAPI.find(el => el.symbol === 'BTCUSDT')
    let ETHUSDT = monedasAPI.find(el => el.symbol === 'ETHUSDT')
    let ADAUSDT = monedasAPI.find(el => el.symbol === 'ADAUSDT')
    let LTCUSDT = monedasAPI.find(el => el.symbol === 'LTCUSDT')
    let BNBUSDT = monedasAPI.find(el => el.symbol === 'BNBUSDT')
    
    const nuestrasMonedas = [];
    nuestrasMonedas.push(BTCUSDT, ETHUSDT, ADAUSDT, LTCUSDT, BNBUSDT)

    console.log(nuestrasMonedas);

    // Limpiar main
    // main.innerHTML = '';

    nuestrasMonedas.forEach(moneda => {

        const  { symbol, weightedAvgPrice, volume, priceChange, highPrice, lowPrice, openPrice, askPrice, bidPrice } = moneda;

        const monedaEl = document.createElement('div');
        monedaEl.classList.add('moneda');

        monedaEl.innerHTML = `
                            <div class="contenedorMoneda">
                                <a class="linkMoneda" href="pages/moneda.html" target="_blank"><h2 class="nombreMoneda">${symbol}</h2></a>
                                <h4 class="detallesMoneda">${weightedAvgPrice}</h4>
                                <h4 class="detallesMoneda">${volume}</h4>
                                <h4 class="detallesMoneda">${priceChange}</h4>
                            </div>
        `;
        
        contenedorCripto.appendChild(monedaEl);
    });
}

const linkMoneda = document.getElementsByClassName('linkMoneda');

// if (linkMoneda) {
//     linkMoneda.addEventListener('click', capturarDatos())
// }

// function capturarDatos(moneda) {

//     let monedaCapturada = moneda.find(moneda => moneda.symbol == id)
        
//         let monedaInfo = [];
//         monedaInfo.push(monedaCapturada);
//         console.log(monedaCapturada);
        
//         localStorage.setItem('Datos Moneda', JSON.stringify(monedaInfo));
// }
    









// function capturarDatos (id) {                                                                               // Se declara una funcion que capture los datos para generar contenido en producto.html

//     let juego = stockProductos.find(prod => prod.id == id)                                                     // Se itera en el array general de productos y se le asigna un valor a la variable juego, identificando al mismo por su id

//     let productoInfo = [];                                                                                  // La variable se declara con scope local para que su valor se pierda (sea reutilizable)
//     productoInfo.push(juego)                                                                                // Se pushea la variable juego (id) dentro del array establecido arriba
//     console.log(productoInfo)

//      localStorage.setItem('datos producto', JSON.stringify(productoInfo));                                  // Se guarda la informacion del array productoInfo como un objeto JSON en el local storage

// }





// function recuperarStock() {
//     let stock = JSON.parse(localStorage.getItem('stock'))                                                    // Se parsean los datos del json guardados en el storage
//     if(stock) {                                                                                              // Se comprueba si es verdadero
//         stock.forEach(el => stockProductos.push(el))                                                         // Se pushea en el array stockProductos la informacion de los juegos
//     }
// }










// Funcion de refrescar 

function refresh(){
    window.location.reload("Refresh")
  }

// Refrescar automatico cada 10s

function refrescarAutomatico() {
    setTimeout(refresh,10000);
}

// refrescarAutomatico();

// Boton para refrescar la pagina

const refreshButton = document.getElementById('refresh');

if (refreshButton) {
    refreshButton.addEventListener('onclick', refresh());
}



     



























// <h3>${symbol}</h3>
// <h3>${weightedAvgPrice}</h3>
// <h3>${volume}</h3>
// <h3>${priceChange}</h3>
// <h3>${highPrice}</h3>
// <h3>${lowPrice}</h3>
// <h3>${openPrice}</h3>
// <h3>${askPrice}</h3>
// <h3>${bidPrice}</h3>


// class criptoMoneda {
//     constructor(symbol, weightedAvgPrice, volume, priceChange, highPrice, lowPrice, openPrice, askPrice, bidPrice) {

//         this.symbol = symbol;
//         this.weightedAvgPrice = weightedAvgPrice;
//         this.volume = volume;
//         this.priceChange = priceChange;
//         this.highPrice = highPrice;
//         this.lowPrice = lowPrice;
//         this.openPrice = openPrice;
//         this.askPrice = askPrice;
//         this.bidPrice = bidPrice;
//     }
// }



// const fetchPokemon = () =>
//   {
//   const promises = [];
//   for (let i = 1; i <= 151 ; i++) 
//     {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//     promises.push(fetch(url).then(resp => resp.json()));
//     };
//   Promise.all(promises).then( results => 
//     {
//     const pokemon = results.map(data => 
//       ( { name   : data.name
//         , id     : data.id
//         , sprite : data.sprites["front_default"]
//         , type   : data.types["0"].type.name
//         , type2  : data.types["1"].type.name
//         }
//       ));
//     console.log(pokemon);
//     });
//   };
// fetchPokemon()