const text = document.getElementById("text")
const input = document.getElementById("visor")
//Foi percebido que usar classes para serem usadas no JavaScript fizeram com que o código de adicionar texto no visor da calculadora não funcionasse.
//O Class dentro do JavaScript retorna uma coleção de elementos, e se o input é o unico com o id de "texto", então só tem um elemento usando esse id, o que faz com que ele nãor responda
//Enfim, essa explicação ainda está meio ruim, então deixa pra eu aprender mais sobre o DOM antes de ficar falando besteira kkkk
function appendToDisplay(input) //O (input) é como se fosse o input do usuário, mas este input do usuário se torna automático dentro do HTML, pois cada botão tem seu input definido, por exemplo:  <button onclick="appendToDisplay('1')">1</button> e o input definido é o ('1') dentro do appendToDisplay.
//Então se eu fizesse appendToDisplay("1")
//console.log(appendToDisplay)
//O resultado seria a impressão do "1"
{
    text.textContent += input;
    //texto.value += input === texto.value = texto.value + input
    //imagine que o "texto" é uma caixa, e o "value" é o que tem dentro da caixa
    //então o input altera o "value", que já não era/tinha nada e se coloca dentro do texto
    //Então o comando é: Pegue o input e insira ele dentro do "value" da caixa chamada texto.
    //Pegue o input e insira ele dentro do "value" que está dentro do texto
}

function cleanVisorlol()
{
   
       text.textContent = "";
    
}

//function checkPoint(callback)
//{
//    if(text.value.split('a').length - 1 > 1)
//    {
//text.value = "Nada de 2 pontos simultâneos";
//    }
 //   else
//    {
//        callback();
//    }
//}


function apagarUltimo()
{
    return text.textContent.substring(0,  text.textContent -1);
}

function calcular()

{
            try
            {
                text.textContent = eval(text.textContent);
            }
            catch(error) 
            {
                text.textContent = text.textContent;
            }

    
    //O eval() calcula a expressão ou declaração(s) que estiverem dentro do value
}

