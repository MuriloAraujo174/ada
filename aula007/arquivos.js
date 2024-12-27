const path = require('node:path'); // Importa o módulo path
const fs = require('node:fs'); // Importa o módulo fs
const dotenv = require('dotenv'); // Importa o módulo dotenv
dotenv.config(); // Carrega as variáveis de ambiente
console.log(process.env.NODE_ENV) // Exibe o ambiente de execução

const filePath = path.join(process.cwd(), 'aula007', 'texto.txt'); // process.cwd() retorna o diretório atual
const fileOutPath = path.join(process.cwd(), 'aula007', 'texto-com-linhas.txt'); // process.cwd() retorna o diretório atual

console.log(filePath); // /home/murilo/documentos/aula007/testo.txt

const fileName = path.basename(filePath); // Retorna o nome do arquivo

console.log(fileName); // testo.txt
console.time('Leitura do arquivo'); // Inicia a contagem do tempo de leitura do arquivo

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error(err);
        return;
    } 
    const linhas = data.toString().split('\n'); // Separa o conteúdo do arquivo em linhas
    const linhasAjustadas = linhas.map((linha, index, arrayLinhas) => {
        `${index + 1} - ${linha}`; // Exibe cada linha do arquivo
    })

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (err) => {
        if(err){
            console.error(`Erro na escrita do arquivo ${fileOutPath}`); // Exibe erro na escrita do arquivo
        };
    })

    // console.log(data.toString()); // Conteúdo do arquivo    
})

console.log(`Arquivo salvo no BACKET ${process.env.S3_BUCKET}`); // Exibe o nome do bucket
console.timeEnd('Leitura do arquivo'); // Finaliza a contagem do tempo de leitura do arquivo

// const path = require('node:path'); // Importa o módulo path
// const fs = require('node:fs'); // Importa o módulo fs

// // Define o caminho para o arquivo
// const filePath = path.join(process.cwd(), 'aula007', 'testo.txt'); // process.cwd() retorna o diretório atual

// // Mostra o caminho completo do arquivo
// console.log(filePath);

// // Extrai apenas o nome do arquivo
// const fileName = path.basename(filePath);
// console.log(fileName);

// // Lê o conteúdo do arquivo
// fs.readFile(filePath, 'utf8', (err, data) => { // 'utf8' garante a decodificação correta
//     if (err) {
//         console.error('Erro ao ler o arquivo:', err.message);
//         return;
//     }
//     console.log('Conteúdo do arquivo:', data); 
// });