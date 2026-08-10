type categoriaUsuario = "premium" | "vip" | "regular";  // Posso criar um tipo para poder reutilizar
type chaveDeAcesso = string | number;

let categoria: categoriaUsuario = "regular"; // se eu tentar colocar qualquer outro valor, dá erro
let chave: chaveDeAcesso = "abc123";
chave = 9876;

// 2. Interfaces
interface Endereco {
    cidade: string;
    estado: string;
    cep?: string // opcional
}

interface Aluno {
    readonly id: string; // não posso alterar 
    nome: string;
    categoria: categoriaUsuario;
    endereco: Endereco;
}

const aluno1: Aluno = {
    id: "dsm-001",
    nome: "Amanda",
    categoria: "premium",
    endereco: {
        cidade: "Registro",
        estado: "SP"
    }
}

aluno1.nome = "Amanda Lima";
// aluno1.id = "novo-id"; -> dá erro (não pode alterar, apenas leitura)