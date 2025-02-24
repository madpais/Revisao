let cidadesPorEstado = {
    "SP": ["São Paulo","Guarulhos","Campinas","São Bernardo do Campo","Santo André","Sorocaba","Osasco","Ribeirão Preto","São José dos Campos","São José do Rio Preto","Mogi das Cruzes","Jundiaí","Piracicaba","Santos","Mauá","Diadema","Carapicuíba","Bauru","Itaquaquecetuba","Praia Grande","Franca","São Vicente","Barueri","Taubaté","Suzano","Limeira","Guarujá","Sumaré","Cotia"],
   
    "MG": ["Belo Horizonte","Uberlândia","Contagem","Juiz de Fora","Montes Claros","Betim","Uberaba","Ribeirão das Neves","Governador Valadares","Divinópolis","Ipatinga","Sete Lagoas","Santa Luzia","Ibirité","Poços de Caldas","Patos de Minas","Pouso Alegre","Teófilo Otoni","Varginha","Conselheiro Lafaiete","Sabará","Vespasiano","Barbacena","Araguari","Itabira","Passos","Nova Lima","Araxá","Nova Serrana","Lavras"],
   
    "RJ": ["Rio de Janeiro","São Gonçalo","Duque de Caxias","Nova Iguaçu","Campos dos Goytacazes","Belford Roxo","Niterói","São João de Meriti","Petrópolis","Volta Redonda","Macaé","Magé","Itaboraí","Cabo Frio","Maricá","Nova Friburgo","Barra Mansa","Angra dos Reis","Mesquita","Teresópolis","Rio das Ostras","Nilópolis","Queimados","Araruama","Resende","Itaguaí","São Pedro da Aldeia","Itaperuna","Japeri","Barra do Piraí"]
}





function atualizarCidades() {
    let estadoSelecionado = document.getElementById("estado").value;
    let cidadeSelect = document.getElementById("cidade");

//limpar as cidades após primeira seleção
 

    if (estadoSelecionado in cidadesPorEstado) {
// atribuir as cidades ao select segundo a as ciodades do estado selecionado
        let cidades = cidadesPorEstado[estadoSelecionado];
        for (let i = 0; i < cidades.length; i++) {
            let option = document.createElement("option");
            option.value = cidades[i];
            option.textContent = cidades[i];
            cidadeSelect.appendChild(option);
        }

    }   
    
}


