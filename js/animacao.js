document.addEventListener("DOMContentLoaded", () => {
  // Adiciona essa animação apenas quando a página HTML for totalmente carregada

  const spans = document.querySelectorAll("h2 span"); //Selecionando todos os elementos span dentro do h1 e guarda em spans

  const cursor = document.createElement("span"); //Criando um span para o cursor

  cursor.classList.add("cursor"); //Adiciona a classe CSS ao cursor. Essa classe define a aparência (a cor, o formato e a animação de piscar) do cursor.

  document.querySelector("h2").appendChild(cursor); //Seleciona o primeiro h1 e adiciona o span do cursor como ultimo filho dele.

  let delay = 100; //Atraso em milissegundos entre a aparição de cada letra

  let totalDelay = 0; // Inicia em 0. Essa variável é crucial para garantir que a digitação de um <span> só comece após a conclusão da digitação do <span> anterior.

  spans.forEach((span) => {
    //Para cada span

    const textoOriginal = span.textContent; //Salva o texto do span
    span.textContent = ""; //Limpa o conteúdo de texto do span . Isso faz com que o texto desapareça instantaneamente da página antes de começar o efeito de digitação.

    textoOriginal.split("").forEach((letra, i) => {
      //Pega a string textoOriginal e divide em um array de letras. Para cada letra desse array na posição i

      setTimeout(() => {
        // Agenda a execução de uma função para um momento futuro, especificado em milissegundos.

        span.textContent += letra; // Adiciona a letra atual ao conteúdo do texto do span. A letra apareçe na tela

        // O tempo do setTimeout é calculado aqui

        // totalDelay garante que a digitação de cada <span> comece no momento correto, depois que a anterior terminou.
      }, totalDelay + i * delay); // Cria um atraso progrecivo para cada letra. A primeira letra i = 0 tem um atraso de 0,
      // a segunda i = 1 tem um atraso de 100ms, a terceira i = 2 tem um atraso de 200ms, e assim por diante.
    });

    //Após o loop de letras terminar, esta linha atualiza o totalDelay para o próximo <span>

    totalDelay += textoOriginal.length * delay + 150; //Adiciona o tempo total que a digitação do <span> atual demorou (textoOriginal.length * delay)
    //  e um tempo extra de 150ms para criar uma pequena pausa entre a digitação de um <span> e outro.
  });
});

const modoNoturno = document.getElementById("ativo"); 
const insta = document.getElementById("instagram");
const git = document.getElementById("gitHub");
const linked = document.getElementById("linkedin");

insta.src = "../img/instagram-light.png";
git.src = "../img/github-light.png";
linked.src = "../img/linkedin-light.png";

modoNoturno.addEventListener("change", () => {
  if (modoNoturno.checked) {
    document.body.classList.add("modo-noturno");
    
  } else {
    document.body.classList.remove("modo-noturno");
  }

  if (document.body.classList.contains("modo-noturno")) {
    insta.src = "../img/instagram.png";
    git.src = "../img/github.png";
    linked.src = "../img/linkedin.png";

  } else {
    insta.src = "img/instagram-light.png";
    git.src = "img/github-light.png";
    linked.src = "../img/linkedin-light.png";
  }
});



 const botaoHamburger = document.getElementById('check');
 const menu = document.querySelector('.menu');

    botaoHamburger.addEventListener('change', () => {

       if (botaoHamburger.checked) {
        menu.classList.add('mostrar');

       }else{
         menu.classList.remove('mostrar');
       }
    });

