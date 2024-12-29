type Produto = {
    nome: string
    valor: number
}

// class estabelecimento {

//     private endereco: string
//     private tipo: string
//     private produto: Produto[]
//     constructor(endereco: string, tipo: string, produto: Produto[]) {
//         this.endereco = endereco;
//         this.tipo = tipo;
//         this.produto = produto.filter(p => p.valor >= 0);
//     }
// }

class estabelecimento {

    private fileDeEspera1 = 10

    constructor(
        public endereco: string, 
        public tipo: string, 
        private produto: Produto[],
        fileDeEspera?: number
    ) {
        this.filaDeEspera = fileDeEspera ?? this.fileDeEspera1 
    }

    public retornaNProdutos() {
        return this.produto.map(produto => {
            produto.nome
        })
    }

    get fileDeESpera() {
        return this.fileDeEspera1
    }

    set filaDeEspera(fila: number) {
        if(fila <= 0) {
            return
        } 
        this.fileDeEspera1 = fila
    }

    public diminuirFilarDeEspera() {
        if(this.fileDeEspera1 === 0) {
            return
        }
        this.fileDeEspera1 -= 1
    }

}



const padaria3 = new estabelecimento('Rua dos Abacate, 1320 - bloco D', 'Alimentação', [
    {nome: 'Banana', valor: 8.0},
    {nome: 'brigadeiro', valor: 1.5},
    {nome: 'carne moida', valor: 20}
])

const padaria4 = new estabelecimento('Rua dos Abacate, 1320 - bloco D', 'Alimentação', [], 
    27
)

const padaria = {
    endereco: 'Rua dos Laranjais, 1320 - bloco D',
    tipo: 'Alimentação',
    produtos: [
        { nome: 'Pão', valor: 0.80 },
        { nome: 'Arroz', valor: 10 },
        { nome: 'Leite', valor: 5 },
        { nome: 'Brigadeiro', valor: 1.50 },
        { nome: 'Carne moída', valor: -20 },
    ],

    
    nomeDosProdutos () { 
        return this.produtos.map(produto => produto.nome)
    }
    
}

// const padaria2 = {
//     endereco: 'Rua dos Abacate, 1320 - bloco D',
//     tipo: 'Alimentação',
//     produtos: [
//             {nome: 'Pão', valor: 0.80},
//             {nome: 'Arroz', valor: 10},
//             {nome: 'leite', valor: 5},
//             {nome: 'brigadeiro', valor: 1.50},
//             {nome: 'Carne moida', valor: -20}
//         ],

    
    // nomeDosProdutos () { 
    //     return this.produtos.map(produto => produto.nome)
    // }
    
// }

console.log(padaria);
padaria.nomeDosProdutos();
padaria3.diminuirFilarDeEspera();
padaria3.diminuirFilarDeEspera();
padaria3.diminuirFilarDeEspera();
padaria3.diminuirFilarDeEspera();
padaria3.diminuirFilarDeEspera();
padaria4.diminuirFilarDeEspera();
padaria4.diminuirFilarDeEspera();
padaria4.diminuirFilarDeEspera();
padaria4.diminuirFilarDeEspera();
padaria4.diminuirFilarDeEspera();
console.log(padaria3.endereco)
console.log(padaria3.fileDeESpera)
console.log(padaria4.fileDeESpera)