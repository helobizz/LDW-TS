// 1. Tipagem Implicita
let nomeEstudante = "Heloísa";
//nomeEstudante = 8;

// 2. Tipagem Explicita
let matriculado: boolean = true;
let idade: number = 20;
let habilidades: string[] = ["HTML", "CSS", "JavaScript"];
let habilidades2: Array<String> = ["HTML", "CSS", "JavaScript", "Typescript"];
let notas: Array<number> = [8.5, 9.0, 7.5]

// 3. O perigo do tipo "any" -> uso para erros rápidos, casos extremos (uso any para qualquer tipos)
let dadosQualquer: any = "Texto";
dadosQualquer = 100;
dadosQualquer = false

// 4. Tipagem em funções
function calcularMedia (nota1: number, nota2: number) : number {
    return (nota1 + nota2) / 2;
}

const mediaFinal = calcularMedia(notas[0], notas[1]);
console.log(`Média do aluno: ${mediaFinal}.`);

// 5. Parâmetros opcionais
function exibirPerfil(nome: string, idade?: number) : string { // se tiver a interrogação no parametro, eu não sou obrigada a passar o parametro
    if (idade !== undefined) {
        return `Nome: ${nome}, Idade: ${idade}`;
    }
    
    return `Nome; ${nome}`;
}

console.log(exibirPerfil("Heloísa"));
console.log(exibirPerfil("Heloísa", 20))