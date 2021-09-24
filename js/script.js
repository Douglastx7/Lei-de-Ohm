
//=========== ATIVAR MODOS DARK MODE

const AtivarModo = () => { 

      // ------------------------ ARMAZENANDO
      var ativandoFundo = 'ativado';
      localStorage.setItem('chave', ativandoFundo);
      AtualizarBanco()
      
}

// ================== BANCO DE DADOS LOCAL STORAGE

const AtualizarBanco = () => { 

      let verificar = 'ativado';
      if(verificar == localStorage.chave){ 

            const CorFundo = document.querySelector('.fundo')
            CorFundo.classList.add('CorFundo')

            const ativarDay = document.querySelector('.dayMode')
            ativarDay.classList.add('ativarDay')
      
            const desativarDark = document.querySelector('.darkMode')
            desativarDark.classList.add('desativarDark')     
      }
}

// ativando fução
AtualizarBanco()

//============ Apagando informação do banco de dados LOCAL STORAGE
const ApagandoBonco = () => { 

      localStorage.setItem('chave', '');
      
            const CorFundo = document.querySelector('.fundo')
            CorFundo.classList.remove('CorFundo')

            const desativarDark = document.querySelector('.darkMode')
            desativarDark.classList.remove('desativarDark')

            const ativarDay = document.querySelector('.dayMode')
            ativarDay.classList.toggle('ativarDay')
}




//======== 1 ================ Função da Corrente X Resistência = Tenção 
const IRV = () => { 

  const corrente1 = document.getElementById('corrente1').value
  const resistencia1 = document.getElementById('resistencia1').value

   document.getElementById('corrente3').value = corrente1;
   document.getElementById('resistencia2').value = resistencia1;



      if(corrente1 == '' || resistencia1 ==''){ 
             alert('Preencha os campos da fórmula V(Volts)')
      }else{

                  const resultado1 = Number(corrente1) * Number(resistencia1)

                  

                  const resultadoIRV = document.getElementById('resultadoIRV')
                        resultadoIRV.innerHTML = (resultado1).toFixed(2)

                        document.getElementById('tensao2').value = resultado1;
                        document.getElementById('tensao3').value = resultado1;

                  //      ---------------

                        const resultadoVRI = document.getElementById('resultadoVRI')
                        resultadoVRI.innerHTML = corrente1

                        const resultadoVIR = document.getElementById('resultadoVIR')
                        resultadoVIR.innerHTML = resistencia1

        }
}

//======== 2 =============== Função da Tensão ÷ Resistência = Corrente 
const VRI = () => { 

    const tensao2 = document.getElementById('tensao2').value
    const resistencia2 = document.getElementById('resistencia2').value
  
    document.getElementById('tensao3').value = tensao2;
    document.getElementById('resistencia1').value = resistencia2;

    if(tensao2 == '' || resistencia2 ==''){ 
                alert('Preencha os campos da fórmula A(Ampéres)')
   }else{

            const resultado2 = Number(tensao2) / Number(resistencia2)

            const resultadoVRI = document.getElementById('resultadoVRI')
                  resultadoVRI.innerHTML = (resultado2).toFixed(2)
     

                   document.getElementById('corrente1').value = resultado2;
                   document.getElementById('corrente3').value = resultado2;
      
                   //      ---------------

                   
                  const resultadoIRV = document.getElementById('resultadoIRV')
                  resultadoIRV.innerHTML = tensao2

                  const resultadoVIR = document.getElementById('resultadoVIR')
                  resultadoVIR.innerHTML = resistencia2

        }
  }


  //======= 3 ================= Função da Tensão ÷ Corrente  =  Resistência
const VIR = () => { 

    const tensao3 = document.getElementById('tensao3').value
    const corrente3 = document.getElementById('corrente3').value

    document.getElementById('tensao2').value = tensao3;
    document.getElementById('corrente1').value = corrente3;
     
    if(tensao3 == '' || corrente3 ==''){ 
          alert('Preencha os campos da fórmula Ω(Ohm)')
    }else{

            const resultado3 = Number(tensao3) / Number(corrente3)

            const resultadoVIR = document.getElementById('resultadoVIR')
                  resultadoVIR.innerHTML = (resultado3).toFixed(2);

                  document.getElementById('resistencia1').value = resultado3;
                  document.getElementById('resistencia2').value = resultado3;

                 //      ---------------

                 const resultadoIRV = document.getElementById('resultadoIRV')
                  resultadoIRV.innerHTML = tensao3

                  const resultadoVRI = document.getElementById('resultadoVRI')
                  resultadoVRI.innerHTML = corrente3
    }  
  }


// =================================================================== LIMPAR CAMPO 


const LimparCampo1 = () => { 

      document.getElementById('corrente1').value = '';
      document.getElementById('resistencia1').value = '';

      const resultadoIRV = document.getElementById('resultadoIRV')
            resultadoIRV.innerHTML = 'V';
}

const LimparCampo2 = () => { 

      document.getElementById('tensao2').value = '';
      document.getElementById('resistencia2').value = '';

      const resultadoVRI = document.getElementById('resultadoVRI')
            resultadoVRI.innerHTML = 'I';
}

const LimparCampo3 = () => { 

      document.getElementById('tensao3').value = '';
      document.getElementById('corrente3').value = '';

      const resultadoVIR = document.getElementById('resultadoVIR')
            resultadoVIR.innerHTML = 'R';
}