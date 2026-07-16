function adicionar() {

    let nome = document.getElementById("nome").value;
    let equipe = document.getElementById("equipe").value;
    let estado = document.getElementById("estado").value;
    let nasc = document.getElementById("nasc").value;
    let categoria = document.getElementById("icategoria").value;
    const msg = document.getElementById("msg");
    const hj = new Date();

     //=====Conversão da data====//
    let data = new Date(nasc + 'T00:00:00');
    let dataNasc = data.toLocaleDateString('pt-BR');

    //========CONDIÇÃO DE EXISTÊNCIA=====//

    //---nome---//
    if(nome.length <= 0){
        msg.innerHTML = "<p id='txt'>Por favor digite um <strong>NOME</strong>...</p>";
        return;
    }
    //--equipe---//
    if(equipe.length <= 0){
        msg.innerHTML = "<p id='txt'> Por favor digite um o nome da <strong>EQUIPE</strong>...</p>";
        return;
    }
    //---estado---//
    else if(estado.length <= 0){
        msg.innerHTML = "<p id='txt'>Por favor digite um o nome da <strong>ESTADO</strong>...</p>";
        return;
    }
    //---Data de Nasc---//
    else if(nasc === ""){
        msg.innerHTML = "<p id='txt'>Por favor digite a <strong>Data de Nascimento</strong>...</p>";
        return;
    }else if(data > hj){
        msg.innerHTML = "<p id='txt'>Por favor digite uma data válida <strong>Data de Nascimento</strong>...</p>";
        return;
    }
    //---Categoria---//
    else if(categoria === "selecione"){
        msg.innerHTML = "<p id='txt'>Por favor selecione uma <strong>CATEGORIA</strong>...</p>";
        return;
    }
    //---Apaga a msg após tudo ser completo---//
    else{
        msg.innerHTML = "<p id='txt style= display:'none'"
    }
   
   

    //=================================CRAINDO A TABELA=================================//
    //---linha---//
    const linha = document.createElement('tr');

    //---colunas---//
    const columnNome = document.createElement('td');
    columnNome.textContent = nome;
    const columnEquipe = document.createElement('td');
    columnEquipe.textContent = equipe;
    const columnEstado = document.createElement('td');
    columnEstado.textContent = estado;
    const columnNasc = document.createElement('td');
    columnNasc.textContent = dataNasc;
    const columnCategoria = document.createElement('td');
    columnCategoria.textContent = categoria;

    //---inserir na tabela---//
    document.getElementById('ibody').appendChild(linha);
    linha.appendChild(columnNome);
    linha.appendChild(columnEquipe);
    linha.appendChild(columnEstado);
    linha.appendChild(columnNasc);
    linha.appendChild(columnCategoria); 

}