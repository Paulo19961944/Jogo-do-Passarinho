const birds = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-HsLxYs6nHwGv1TEshPhfHUyO_u537IxEw&s", // Imagem 1
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvXfD_nr7y0rhpJpOS5XbPFCVZLf9Po66Ow&s", // Imagem 2
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBql1PNQcU_hE8XJJajWS0Abm6QEoIaXFXjw&s"  // Imagem 3
];

let score = 0;

function getRandomBird() {
    const randomIndex = Math.floor(Math.random() * birds.length);
    return birds[randomIndex];
}

async function spin() {
    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");

    // Rodar as imagens
    let spins = 10;
    for (let i = 0; i < spins; i++) {
        slot1.querySelector("img").src = getRandomBird();
        slot2.querySelector("img").src = getRandomBird();
        slot3.querySelector("img").src = getRandomBird();
        await delay(100);  // Espera 100ms entre as trocas de imagem
    }

    checkResult(); // Verificar o resultado depois que as imagens pararam
}

// Função que cria um delay para aguardar antes de prosseguir
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkResult() {
    const slot1 = extractBaseImageUrl(document.getElementById("slot1").querySelector("img").src);
    const slot2 = extractBaseImageUrl(document.getElementById("slot2").querySelector("img").src);
    const slot3 = extractBaseImageUrl(document.getElementById("slot3").querySelector("img").src);

    if (slot1 === slot2 && slot2 === slot3) {
        score += 100;
        alert("Você ganhou 100 pontos!");
    }

    document.getElementById("score").innerText = score;
}

// Função que extrai a base da URL da imagem
function extractBaseImageUrl(url) {
    const regex = /(.+)(\?|\&|$)/; // Captura a URL base antes de qualquer parâmetro
    const match = url.match(regex);
    return match ? match[1] : url; // Retorna a URL sem parâmetros extras
}