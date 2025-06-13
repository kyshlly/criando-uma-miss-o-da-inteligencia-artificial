const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando pela cidade e vê um rio extremamente poluído, cheio de plástico e resíduos. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Fico indignado e penso em como ajudar a limpar ou conscientizar as pessoas.",
                afirmacao: "Decidiu agir e começou a pesquisar sobre projetos de limpeza de rios na sua região."
            },
            {
                texto: "Acho triste, mas acredito que sozinho não posso fazer muita diferença.",
                afirmacao: "Apesar da preocupação, sentiu que não tinha ferramentas para mudar a situação sozinho."
            }
        ]
    },
    {
        enunciado: "Sua escola está organizando uma feira de sustentabilidade. Eles pedem que os alunos apresentem soluções para reduzir o lixo na comunidade. O que você faz?",
        alternativas: [
            {
                texto: "Proponho um sistema de compostagem na escola para transformar restos de comida em adubo.",
                afirmacao: "Inspirou outros alunos a repensarem o descarte de resíduos orgânicos."
            },
            {
                texto: "Sugiro uma campanha para reduzir o uso de plástico descartável nos lanches.",
                afirmacao: "Conseguiu mobilizar a escola a banir copos e canudos plásticos."
            }
        ]
    },
    {
        enunciado: "Seu bairro está discutindo a instalação de painéis solares em espaços públicos. Durante o debate, alguém diz: 'Isso é muito caro e não vai mudar nada'. Como você responde?",
        alternativas: [
            {
                texto: "Concordo que é caro no início, mas explico que a economia a longo prazo e os benefícios ambientais compensam.",
                afirmacao: "Usou dados para mostrar como a energia solar pode reduzir custos e emissões de carbono."
            },
            {
                texto: "Sugiro começar com pequenos projetos, como iluminação pública solar, para testar o impacto.",
                afirmacao: "Mostrou que pequenas mudanças podem levar a transformações maiores."
            }
        ]
    },
    {
        enunciado: "Você descobre que um parque local pode ser desmatado para construir um shopping. O que você faz?",
        alternativas: [
            {
                texto: "Organizo um abaixo-assinado e mobilizo a comunidade para protestar contra a construção.",
                afirmacao: "A pressão popular fez o governo reconsiderar o projeto."
            },
            {
                texto: "Busco alternativas para apresentar aos desenvolvedores, como um shopping sustentável que preserve parte do parque.",
                afirmacao: "Mostrou que é possível conciliar desenvolvimento e preservação."
            }
        ]
    },
    {
        enunciado: "Anos depois, você vê que suas ações inspiraram outras pessoas, mas ainda há muito a ser feito. Qual seu próximo passo?",
        alternativas: [
            {
                texto: "Crio uma ONG para ampliar projetos de educação ambiental e ações práticas.",
                afirmacao: "Transformou sua paixão por sustentabilidade em um legado para futuras gerações."
            },
            {
                texto: "Trabalho com tecnologia para desenvolver soluções inovadoras, como apps que incentivem a reciclagem.",
                afirmacao: "Uniu inovação e sustentabilidade para criar ferramentas que facilitam a vida verde."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();