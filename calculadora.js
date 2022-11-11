
    
  


    //Botão calcular
    let botao = document.getElementById('btn_selecionaOperacao')

    botao.addEventListener('click', function(){

        //Verifica se os campos vieram vazios
        if(document.getElementById('valor1').value == '' || document.getElementById('valor2').value == '' || document.getElementById('operacoes').value == ''){


            alert('Preencha todos os campos')

        } else {

            //Atribui os valores vindos para as variáveis e converte os números para inteiro
            let valor1 = parseInt(document.getElementById('valor1').value) 
            let valor2 = parseInt(document.getElementById('valor2').value) 
            let operacaoSelecionada = document.getElementById('operacoes').value 


            
            //Verifica a opção selecionada do select
            switch(operacaoSelecionada){

                case '1':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('A soma é: ' + soma(valor1, valor2))
                break

                case '2':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('A subtração é: ' + subtrai(valor1, valor2))
                break

                case '3':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('A multiplicação é: ' + multiplica(valor1, valor2))
                break

                case '4':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('A divisão é: ' + dividi(valor1, valor2))
                break

                case '5':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('A exponenciação é: ' + exponenciacao(valor1, valor2))
                break

                case '6':
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('O resto da divisão é: ' + resto_divisao(valor1, valor2))
                break

                default:
                document.getElementById('btn_selecionaOperacao').style.display = 'none'
                criarElemento('Erro desconhecido')
                break

            }


        }

       


    }) //Fim do onclick do botão calcular



    /*Função do botão limpar campos*/
    let limpar = document.getElementById('btn_limpar')
    limpar.addEventListener('click', function(){
        document.getElementById('valor1').value = ''
        document.getElementById('valor2').value = ''
        document.getElementById('operacoes').value = ''
        document.getElementById('div-operacoes').removeChild(resultado)
        document.getElementById('btn_selecionaOperacao').style.display = 'inline-block'

    })

    //Criando elemento resultado (parágrafo)
    let resultado = document.createElement('p')
   

    /*Função mostrar mensagem do resultado no html */
    function criarElemento(texto){
    resultado.className = 'lead'
    resultado.innerText = texto
    //Adicionando na div abaixo do select
    let div = document.getElementById('div-operacoes')
    div.appendChild(resultado)
        
    }


    /*Variável que recebe o retorno de uma função anônima -> Função Adição*/
    let soma = function(v1,v2){
        return v1 +v2
    }

    /*Variável que recebe o retorno de uma função anônima -> Função Subtração*/
    let subtrai = function(v1,v2){
        return v1 - v2
    }

    /*Variável que recebe o retorno de uma função anônima -> Função Multiplicação*/
    let multiplica = function(v1,v2){
        return v1 * v2
    }

    /*Variável que recebe o retorno de uma função anônima -> Função Divisão*/
    let dividi = function(v1,v2){
        if(v1 < v2){
            return v2 / v1

        } else {
            return v1 / v2
        }
    }

    /*Variável que recebe o retorno de uma função anônima -> Função Exponenciação*/
    let exponenciacao =  function(v1,v2){
        return Math.pow(v1,v2)
    }

    /*Variável que recebe o retorno de uma função anônima -> Função Resto da Divisão*/
    let resto_divisao = function(v1,v2){
        if(v1 < v2){
            return v2 % v1

        } else {
            return v1 % v2
        }
    }
