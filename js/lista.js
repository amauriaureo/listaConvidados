    var convidados = [
        {nome: "A"},
        {nome: "E"},
        {nome: "I"},
        {nome: "O"}
    ];


    var elLista = document.getElementById("lista");
    var elCampo = document.getElementById("campo");
    var elBotao = document.getElementById("botao");


    elBotao.onclick = function () {
        var nome = elCampo.value;
        convidados.push({nome: nome})
        elCampo.value = ""; // comando para limpar o campo de digitação após dado o 'Cadastrar'
        listarConvidados();
    }


    function listarConvidados() {
        elLista.innerHTML = ""; //comando para não duplicar os nomes já existentes

        for (const convidado of convidados) {
            var elConvidado = document.createElement("li")
            var elNome = document.createTextNode(convidado.nome);


            var elExcluir = document.createElement("a")
            elExcluir.setAttribute("href", "#") // clicavel
            elExcluir.onclick = function () {
                convidados = convidados.filter(function(item) {
                    return item.nome !== convidado.nome;
                });

                listarConvidados();
            }


            var elExcluirTexto = document.createTextNode("Excluir");

            elExcluir.appendChild(elExcluirTexto)
            elConvidado.appendChild(elNome)
            elConvidado.appendChild(elExcluir);
            elLista.appendChild(elConvidado);
        }
    }


listarConvidados()
