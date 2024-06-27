function handleSubmit(){
    // Pega os inputs
    const qtdHomens = parseInt(document.querySelector('.homens').value) || 0;
    const qtdMulheres = parseInt(document.querySelector('.mulheres').value) || 0;
    const qtdCriancas = parseInt(document.querySelector('.criancas').value) || 0;

    // Ingredientes
    const carneBovHomens = 500; // gramas
    const frangoHomens = 200; // gramas
    const linguiHomens = 200; // gramas
    const refriHomens = 300; // ml
    const cervejaHomens = 800; // ml

    const carneBovMulheres = 300; // gramas
    const frangoMulheres = 200; // gramas
    const linguiMulheres = 200; // gramas
    const refriMulheres = 400; // ml
    const cervejaMulheres = 500; // ml

    const carneBovCriancas = 200; // gramas
    const frangoCriancas = 100; // gramas
    const linguiCriancas = 200; // gramas
    const refriCriancas = 400; // ml
    const cervejaCriancas = 0; // ml

    const totalCarne = (qtdHomens * carneBovHomens) + (qtdMulheres * carneBovMulheres) + (qtdCriancas * carneBovCriancas);
    const totalFrango = (qtdHomens * frangoHomens) + (qtdMulheres * frangoMulheres) + (qtdCriancas * frangoCriancas);
    const totalLingui = (qtdHomens * linguiHomens) + (qtdMulheres * linguiMulheres) + (qtdCriancas * linguiCriancas);
    const totalRefri = (qtdHomens * refriHomens) + (qtdMulheres * refriMulheres) + (qtdCriancas * refriCriancas);
    const totalCerveja = (qtdHomens * cervejaHomens) + (qtdMulheres * cervejaMulheres) + (qtdCriancas * cervejaCriancas);

    const ListaDeIngredientes = document.getElementById('ingredienteUl');
    ListaDeIngredientes.innerHTML = `
        <li>${(totalCarne / 1000).toFixed(2)}Kg de carne bovina</li>
        <li>${(totalFrango / 1000).toFixed(2)}Kg de frango</li>
        <li>${(totalLingui / 1000).toFixed(2)}Kg de linguiça</li>
        <li>${(totalRefri / 1000).toFixed(2)}L de refrigerante</li>
        <li>${(totalCerveja/ 1000).toFixed(2)}L de cerveja</li>
    `;
    return false;
}