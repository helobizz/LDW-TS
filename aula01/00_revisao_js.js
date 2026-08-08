// 1. Desestruturação 
// COMO SE TIVESSE UMA CAIXA E EU PEGASSE APENAS UMA COISA ESPECÍFICA QUE EU QUERO

const usuario = {
    nome: "Heloísa",
    idade: 20,
    curso: "DSM",
    endereco: {
        cidade: "Sete Barras",
        estado: "SP"
    }
};

// forma antiga
// console.log(usuario.nome);

const { nome, curso, endereco: { cidade }, endereco } = usuario;

//console.log("Desestruturação: ", nome, curso, cidade, endereco);

const cores = ["#ff0000", "#00ff00", "#0000ff"];
const [ vermelho, verde ] = cores
//console.log(vermelho, verde);

// 2. Spread (cria um novo objeto com a mesma estrutura que eu pedi), Rest
const configOriginal = { tema: "dark", idioma: "pt-BR" };
const configUsuario = { ...configOriginal, fonte: "Fira Code"} // read
console.log("Spread", configUsuario); 

function somaValores(primeiro, ...resto) { // rest -> pega tudo após a vírgula
    return primeiro + resto.reduce((acc, val) => acc + val, 0);
}
console.log("Rest: ", somaValores(10,20,30,40));
// não sei quantos valores tem dentro do Resto, então uso o reduce para passar um por um e somá-los (como se fosse um for)

// 3. Funções assincronas
const buscarDadosDoBanco = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const sucesso = true;

            if (sucesso) {
                resolve({ status: 200, dados:["React", "TypeScript", "Vite"] });
            } else {
                reject("Erro na conexão com o banco.");
            }
        }, 1000);
    })
}

async function processarDados() {
    try {
        console.log("\n[fun async] 1. Iniciando busca de dados...");

        const resposta = await buscarDadosDoBanco();

        console.log("\n[fun async] 2. Dados obtidos com sucesso: ", resposta.dados);

    } catch (error) {
        console.log("\n[fun async] Erro ao obter dados: ", error);
    }
}

console.log("\n[Global] A. Antes de disparar função assincrona ...");

processarDados()

console.log("\n[Global] B. Disparado!");