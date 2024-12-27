const dns = require('node:dns'); // Importa o módulo DNS

const urlpesquisa = 'www.google.com'; // Define a URL a ser pesquisada

async function bootstrap() {
    try {
        // Pesquisa usando o DNS padrão
        console.time('Pesquisando URL por DNS padrão');
        const addresses = await dns.promises.resolve4(urlpesquisa); // Resolve o endereço IPv4
        console.timeEnd('Pesquisando URL por DNS padrão');
        console.log('Endereços IPv4:', addresses);

        // Pesquisa nomes de servidores (NS) do domínio principal
        const domain = 'google.com'; // Domínio raiz
        const nomeServer = await dns.promises.resolveNs(domain); // Resolve o nome do servidor
        console.log('Nameservers:', nomeServer);

        // Resolve o endereço IPv4 do segundo nameserver
        const ipNS = await dns.promises.resolve4(nomeServer[1]);
        console.log('Endereço IPv4 do Nameserver:', ipNS[0]);

        // Pesquisa usando o servidor DNS especificado
        const resolve = new dns.Resolver(); // Cria um novo resolver
        resolve.setServers([ipNS[0]]); // Define o servidor de DNS

        console.time('Pesquisando URL por DNS específico');
        // Usa um `Promise` com o método `resolve.resolve4`
        const addressesDNS = await new Promise((resolvePromise, reject) => {
            resolve.resolve4(urlpesquisa, (err, result) => {
                if (err) return reject(err);
                resolvePromise(result);
            });
        });
        console.timeEnd('Pesquisando URL por DNS específico');
        console.log('Endereços IPv4 com DNS específico:', addressesDNS);
    } catch (error) {
        console.error('Erro durante a execução:', error); // Exibe erros
    }
}

bootstrap(); // Executa a função principa

// dns.resolve4(urlpesquisa, (err, addresses) => {
//     if (err) {
//         console.error(err); // Exibe erro
//         return;
//     }
//     console.log(`Endereço IPv4 da URL ${urlpesquisa}: ${addresses}`); // Exibe o endereço IPv4 da URL
// }) // Resolve o endereço IPv4 da URL  


