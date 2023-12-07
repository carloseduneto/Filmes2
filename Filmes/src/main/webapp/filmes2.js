var valores = [];
var idpessoa = 0;

function novo(){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");
    var novo = document.getElementById("novo");

    //mostra o formulário 
    form.style.display = "block";
    //esconde lista 
    lista.style.display = "none";


    //lista os inputs
    id = 0;
    var titulo = document.getElementById("titulo");
    var duracao = document.getElementById("duracao");
    var classificacao = document.getElementById("classificacao");
    var genero = document.getElementById("genero");
    var lancamento = document.getElementById("lancamento");
    
    titulo.value = "";
    duracao.value = "";
    classificacao.value = "";
    genero.value = "";
    lancamento.value = "";
    
    //joga o foco no 1º campo:
    titulo.focus();

}



function alterar(i){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");

    //mostra o formulário 
    form.style.display = "block";
    //esconde lista 
    lista.style.display = "none";


    //lista os inputs
    id = valores[i].id;
    var titulo = document.getElementById("titulo");
    var duracao = document.getElementById("duracao");
    var classificacao = document.getElementById("classificacao");
    var genero = document.getElementById("genero");
    var lancamento = document.getElementById("lancamento");
    
    titulo.value = valores[i].titulo;
    duracao.value = valores[i].duracao;
    classificacao.value = valores[i].classificacao;
    genero.value = valores[i].genero;
    lancamento.value = valores[i].lancamento;
    
    //joga o foco no 1º campo:
    titulo.focus();
    

}

function salvar(){
	//valida campos obrigarotios
	if(document.getElementById("titulo").value  == ""){
		alert("campo Título é obrigaratório!");
		return;
	}
	
    //pega os dados digitados pelo usuário e monta um objeto
    var f = {
		id: id,
		titulo:  document.getElementById("titulo").value,
		duracao: document.getElementById("duracao").value,
		classificacao: document.getElementById("classificacao").value,
		genero: document.getElementById("genero").value,
		lancamento: document.getElementById("lancamento").value

	};
	console.log(id);
   
   	//define se o método sera para inserir ou alterar
   	if (id == 0) {
		   metodo = "POST";
	   } else {
		   metodo = "PUT";
	   }
   
	//envia os dados para o servidor
	mostraLoading("aguarde, salvando dados...")
	fetch("http://localhost:8080/Filmes/Filmes",
		{method: metodo,
	    body: JSON.stringify(f)
		}
	).then(resp => resp.json())
	.then(function (Retorno){
		escondeLoading();
		alert(Retorno.mensagem);
		
		var form = document.getElementById("formulario");
    	var lista = document.getElementById("lista");

    	//escondeo o formulário 
    	form.style.display = "none";
    	//mostra a lista 
    	lista.style.display = "block";
    	
    	// recarrega lista
    	listar();
    	
	});
    
}
function excluir(i){
 	var id = valores[i].id; 
 
	//envia os dados para o servidor
	mostraLoading("aguarde, excluindo...");
	fetch("http://localhost:8080/Filmes/Filmes/" + id,
		{method: "DELETE",
		}
	).then(resp => resp.json())
	.then(function (retorno){
		escondeLoading();
		alert(retorno.mensagem);
		
		var form = document.getElementById("formulario");
    	var lista = document.getElementById("lista");

    	//escondeo o formulário 
    	form.style.display = "none";
    	//mostra a lista 
    	lista.style.display = "block";
    	
    	// recarrega lista
    	listar();
    	
	});
    
}

function cancelar(){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");

    //escondeo o formulário 
    form.style.display = "none";
    //mostra a lista 
    lista.style.display = "block";
}

function listar(){
	var lista = document.getElementById("dados");
    //limpa a lista
    lista.innerHTML = "<tr><td colspan>aguarde, carregando...</td></tr>";
	
    fetch ("http://localhost:8080/Filmes/Filmes")
    .then(resp => resp.json())
    .then(dados => mostrar(dados));
}

function mostrar(dados){
	valores = dados;
    var lista = document.getElementById("dados");
    //limpa a lista
    lista.innerHTML ="";
    //percoorre a lista 
    for (var i in dados){
        lista.innerHTML += "<tr>"
                        + "<td>" + dados[i].id + "</td>"
                        + "<td>" + dados[i].titulo + "</td>"
                        + "<td>" + dados[i].duracao + "</td>"
                        + "<td>" + dados[i].classificacao + "</td>"
                        + "<td>" + dados[i].genero + "</td>"
                        + "<td>" + dados[i].lancamento + "</td>"
                        + "<td> <button class='btn btn-info' onclick='alterar("+i+")'><i class='fas fa-pencil-alt'></i></button></td>"
						+ "<td> <button class='btn btn-danger' onclick='excluir("+i+")'><i class='fas fa-trash-alt'></i></button></td>"
                        + "</tr>";
                        
    }
}

function mostraLoading(msg){
	var loa = document.getElementById("loading");
    var con = document.getElementById("conteudo");
    loa.style.display = "block";
	con.style.display = "none";
	loa.innerHTML = msg;
}

function escondeLoading(){
	var loa = document.getElementById("loading");
    var con = document.getElementById("conteudo");
    loa.style.display = "none";
	con.style.display = "block";
	
}







listar();



  document.addEventListener("DOMContentLoaded", function() {
    const quadrado = document.getElementById("quadrado");
    const imagens = [
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRJzYHgV67mGm_3U8S6RSNrAc9YdyLj8xgAbNbc7uhf5a_fou-eCzezHlv67QNwn-Sq46MxsJDFWAv_MXi4m23SWq6asBfwJXNRf.jpg",
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUQgC34TIiLMI2jtaGVgyaUDxaI9IwpH-sgS4ELdmqeN9Tt26oWUgmA2rev38or1HtV_eXzuCRIu9sAg6e3feiQWNfA8jetav-bA.jpg",
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTMaISP_Z6aJqO4aD_wLTZHER3sVupCNVSOHL237RF5JbjAkyy5nZkXw62qzRA_7rDNSPlSLzSw6FBJBTter7KV26ZOItuXAw8oL.jpg",
      "https://occ-0-7612-185.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTQuwFj4Jasbn6T64pO254QZZozuAst2y4xvu1-DsaJXy3XnYMtJKZfXKyN34j6GJ2MS2CzjqnVZ2WFN8OQ9I2nqkrEbG4D4guO2.jpg",
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXlv-_llMxs0mILD3W7WWr-9CvH6UfQpqyA_sJlUvoKKQak4eW29B8j_00REGOqlHYw5yMVoQqpwNUiTokvaeVFPK8KNPRixL-2i.jpg",
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXCeNmQPDQPKzm851_pZ5DloFfAZPG31S190CCYJ7Zg5bzmWyiLxjSVYLDTYNxq8poYfmy3dFQmaR9ILFWBLhZhnX3hihorxXF_Q.jpg",
      "https://occ-0-7612-1740.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRbh60ECvLVI7JkSAHjRF_k2jmantYorSd8NdaJeb6yyeejPdvj0zqiuMT86hfg9r5ixSh063EncxoinufM9PfGVwx4Qj5PH487e.jpg",
      "https://occ-0-7612-185.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbaAYzH_AdLnKDmG0Wq-UGKiR2aMTZaMKi03dKl1hjj0ItC3xR9AvLanqRcruopwGQDsBYHVnKsdG-LgRwdwZDKZqv7bC49kVP5i.jpg"
      
    ]; // Substitua com os nomes das suas imagens

    let index = 0;


    

    function trocarImagem() {
      quadrado.style.backgroundImage = `url(${imagens[index]})`;
      index = (index + 1) % imagens.length;

      
    }

    // Chama a função trocarImagem a cada 10 segundos
    setInterval(trocarImagem, 7000);


    // Inicializa a primeira imagem
    trocarImagem();

    
  });
