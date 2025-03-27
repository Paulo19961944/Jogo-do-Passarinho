// Define um array com URLs de imagens de pássaros
const birds = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-HsLxYs6nHwGv1TEshPhfHUyO_u537IxEw&s", // Imagem 1
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvXfD_nr7y0rhpJpOS5XbPFCVZLf9Po66Ow&s", // Imagem 2
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBql1PNQcU_hE8XJJajWS0Abm6QEoIaXFXjw&s"  // Imagem 3
];

// Inicializa o valor da pontuação
let score = 0;

// Função que retorna uma URL aleatória de um pássaro
function getRandomBird() {
    // Gera um índice aleatório baseado no comprimento do array 'birds'
    const randomIndex = Math.floor(Math.random() * birds.length);
    // Retorna a URL da imagem do pássaro aleatório
    return birds[randomIndex];
}

// Função assíncrona que simula a rotação das imagens
async function spin() {
    // Obtém os elementos dos slots pela ID
    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");

    // Define o número de rotações a serem feitas
    let spins = 10;
    // Executa as rotações
    for (let i = 0; i < spins; i++) {
        // Atualiza as imagens de cada slot com uma imagem aleatória
        slot1.querySelector("img").src = getRandomBird();
        slot2.querySelector("img").src = getRandomBird();
        slot3.querySelector("img").src = getRandomBird();
        // Espera 100ms antes de atualizar novamente as imagens (simula uma rotação)
        await delay(100);  // Espera 100ms entre as trocas de imagem
    }

    // Chama a função para verificar o resultado depois das rotações
    checkResult(); // Verificar o resultado depois que as imagens pararam
}

// Função que cria um delay para aguardar antes de prosseguir
function delay(ms) {
    // Retorna uma Promise que resolve após o tempo especificado em milissegundos
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função que verifica o resultado da rotação
function checkResult() {
    // Extrai a URL base das imagens de cada slot
    const slot1 = extractBaseImageUrl(document.getElementById("slot1").querySelector("img").src);
    const slot2 = extractBaseImageUrl(document.getElementById("slot2").querySelector("img").src);
    const slot3 = extractBaseImageUrl(document.getElementById("slot3").querySelector("img").src);

    // Verifica se todas as imagens são iguais
    if (slot1 === slot2 && slot2 === slot3) {
        // Se todas forem iguais, adiciona 100 pontos à pontuação
        score += 100;
        // Exibe uma mensagem de vitória
        alert("Você ganhou 100 pontos!");
    }

    // Atualiza o texto da pontuação na tela
    document.getElementById("score").innerText = score;
}

// Função que extrai a base da URL da imagem (sem parâmetros extras)
function extractBaseImageUrl(url) {
    // Expressão regular para capturar a URL base da imagem
    const regex = /(.+)(\?|\&|$)/; // Captura a URL base antes de qualquer parâmetro
    // Executa a correspondência para extrair a URL base
    const match = url.match(regex);
    // Retorna a URL base (sem parâmetros extras) ou a URL original
    return match ? match[1] : url; // Retorna a URL sem parâmetros extras
}
