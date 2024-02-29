//fs es el módulo que contiene las funciones 
//para manipular el sistema de archivos
filesystem = require('fs');
const html_header = '<!doctype html><html><head> <h1>Hola mundo</h1> </head>';
filesystem.writeFileSync('hola.txt', 'Hola mundo desde Node.js');

const te_hackie = () => {
    console.log("jojo te hackié");
}

setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//Una función que recibi un arreglo de números y devuelvaso el promedio
const arreglo_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num_prom = 0;

const promedio = (arreglo_1, num_prom) => {
    for (let item of arreglo_1){
        num_prom += item;
    }
    num_prom = num_prom / arreglo_1.length;
    console.log(num_prom);
}

promedio(arreglo_1,num_prom);

//Una función que reciba un string y escriba un string en un archivo de texto
const escribir = (texto, nombreArchivo) => {
    if (!nombreArchivo) {
        nombreArchivo = 'archivo.txt';
    }
    filesystem.writeFile(nombreArchivo, texto, (error) => {
        if (error) {
            console.log('Error al escribir el archivo');
        } else {
            console.log('Archivo escrito correctamente');
        }
    });
};

const textoAEscribir = 'Ya se me olvido como hacer un merge y ahora tengo que arreglar mi repo';
escribir(textoAEscribir, 'miarchivo.txt');

let html_tropas = ' ';

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url == "/"){
        response.write(html_header);
        response.write(`<!doctype html>
        <html>
          
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      clifford: '#da373d',
                    }
                  }
                }
              }
            </script>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        
        <body>
          <h1 class="grid text-3xl font-bold underline text-red-700 text-center">
            Einsenhower Matrix
          </h1>
          <div id="matrix" class="grid grid-cols-2 grid-flow-row gap-2 mb-1 max-sm:grid-cols-1 text-gray-950">
            <div id="DO" class="bg-green-400 w-full my-3 p-2 text-center text-stone-800 shadow-lg">
              DO <br> <span class="text-sm text-gray-600">(URGENT & IMPORTANT)</span>
              <button id="b-add_do" class="flex justify-center ring-1 ring-green-600 py-2 px-2 rounded-md bg-zinc-600 text-slate-100 text-lg hover:bg-zinc-800">
                ADD
              </button>
              <div>
                  <div class="grid grid-cols-3">
                      <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-green-300 ring-1 shadow-sm w-full"/>  <br>
                      <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-green-300 ring-1 shadow-sm w-full"/>  <br>
                      <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-green-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox_hidden_do" hidden /><input type="text" id="in_hidden_do" hidden class="rounded-md bg-green-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                </label>
              </div>
            </div>
            <div id="DELEGATE" class="bg-yellow-300 w-full my-3 p-3 text-center text-stone-800 shadow-lg ">
              DELEGATE  <br><span class="text-sm text-gray-600">(NOT URGENT & IMPORTANT) </span>
              <button id="b-add_delegate" class="flex items-start ring-1 ring-yellow-600 py-2 px-2 rounded-md bg-zinc-600 text-slate-100 text-lg  hover:bg-zinc-800">ADD</button>
              <div class="flex justify-start flex-wrap py-2">
                <label class="">
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-yellow-200 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-yellow-200 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-yellow-200 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox_hidden_delegate" hidden /><input type="text" id="in_hidden_delegate" hidden class="rounded-md bg-yellow-200 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                </label>
              </div>
            </div>
            <div id="SCHEDULE" class="bg-blue-400 w-full my-3 p-3 text-center text-stone-800 shadow-lg">
              SCHEDULE <br> <span class="text-sm text-gray-600"> (URGENT & NOT IMPORTANT)</span>
              <button id="b-add_schedule" class="flex items-center ring-1 ring-blue-600 py-2 px-2 rounded-md bg-zinc-600 text-slate-100 text-lg  hover:bg-zinc-800">ADD</button>
              <div class="flex justify-start flex-wrap py-2">
                <label class="">
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-blue-300 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-blue-300 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-blue-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox_hidden_schedule" hidden /><input type="text" id="in_hidden_schedule" hidden class="rounded-md bg-blue-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                </label>
              </div>
            </div>
            <div id="DELETE" class="bg-red-400 w-full my-3 p-3 text-center items-center text-stone-800 shadow-lg">
              DELETE <br> <span class="text-sm text-gray-600"> (NOT URGENT & NOT IMPORTANT)</span>
              <button id="b-add_delete" class="flex items-center ring-1 ring-red-600 py-2 px-2 rounded-md bg-zinc-600 text-slate-100 text-lg hover:bg-zinc-800">ADD</button>
              <div class="flex justify-start flex-wrap py-2">
                <label class="">
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-red-300 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-red-300 ring-1 shadow-sm w-full"/>  <br>
                    <input type="checkbox" id="cbox1do" /><input type="text" class="rounded-md bg-red-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
                  <div class="grid grid-cols-3">
                    <input type="checkbox" id="cbox_hidden_delete" hidden /><input type="text" id="in_hidden_delete" hidden class="rounded-md bg-red-300 ring-1 shadow-sm w-full"/>  <br>
                  </div>
            </div>
          </div>
        
          <a  class="rounded-xl bg-red-200 p-4 text-center justify-center" href="https://e.ggtimer.com/">
            POMODORO
          </a>
          <script src="js/poe.js"></script>
        </body>
        
        </html>`);

        response.end();}
     else if (request.url == "/crear"){  
        response.write(html_header);
        response.write("</head><body><h2>Este es un servidor web</h2></body></html>");
        response.end();
    } else {
        response.write(html_header);
        response.write("<body><h2>Este clan ya no existe web</h2></body></html>");
        response.statusCode = 404
        response.end();
    }
});    


server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
}); //Puerto en el que escucha el servidor