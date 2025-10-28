const modoNoturno = document.getElementById("ativo");

const git = document.getElementById("gitHub");

modoNoturno.addEventListener("change", () => {

  atualizarEstadoBotoes(); //Se eu tinha deixado o like ou dislike no modo claro e fui para o noturno 
  // Atualiza os icones acompanhando o tema noturno

  if (modoNoturno.checked) {
    document.body.classList.add("modo-noturno");
  } else {
    document.body.classList.remove("modo-noturno");
  }

  if (document.body.classList.contains("modo-noturno")) {
    git.src = "img/github.png";
  } else {
    git.src = "img/github-light.png";
  }
});

const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

let liked = false;
let likedNot = false;



like.addEventListener("click", (e) => { /*Quando o like for clicado */
  e.preventDefault(); // Previne o comportamento do <a href="#">
  liked = !liked; // O valor de liked é diferente de FALSE
  likedNot = false; // O dislike é FALSE para que seja desativado

  atualizarEstadoBotoes(); //Atualiza o icone 
});

dislike.addEventListener("click", (e) => { /*Quando o dislike dislike for clicado */
  e.preventDefault(); // Previne o comportamento do <a href="#">
  likedNot = !likedNot; // O valor de liked Not é diferente de FALSE
  liked = false; //O like é FALSE para que seja desativado

  atualizarEstadoBotoes();  //Atualiza o icone 
});




function atualizarEstadoBotoes() {
  if (modoNoturno.checked) { /*Se o modo noturno está ativo */

    if (liked) {  /*E eu quero deixar o like*/
      like.src = "../img/like-ativo.png"; /*Seta o icone do like preenchido na cor azul*/
    } else {  /*Senão*/
      like.src = "../img/like.png"; /*Seta o icone do like para condição normal. Isso evida que os dois botões possam ser selecionados ao mesmo tempo */
    }

    if (likedNot) { /*E eu quero deixar o dislike*/
      dislike.src = "../img/dislike-ativo.png"; /*Seta o icone do dislike preenchido na cor azul*/
    } else { /*Senão*/
      dislike.src = "../img/dislike.png"; /*Seta o icone do dislike para condição normal. Isso evida que os dois botões possam ser selecionados ao mesmo tempo */
    }
  } else { /*Se não estiver no modo noturno*/

    if (liked) { /*E eu quero deixar o like*/
      like.src = "../img/like-ativo-light.png"; /*Seta o icone do like preenchido na cor branca*/
    } else { /*Senão*/
      like.src = "../img/like.png"; /*Seta o icone do like para condição normal. Isso evida que os dois botões possam ser selecionados ao mesmo tempo */
    }

    if (likedNot) { /*Caso eu queira deixar o dislike*/

      dislike.src = "../img/dislike-ativo-light.png"; /*Seta o icone do dislike preenchido na cor branca*/
    } else { /*Senão*/
      dislike.src = "../img/dislike.png";  /*Seta o icone do dislike para condição normal. Isso evida que os dois botões possam ser selecionados ao mesmo tempo */
    
    }
  }
}
