const firebaseConfig = {
  apiKey: "AIzaSyBSim6ymQ9M0zzWJrfmf52iZv4fRjcLEv4",
  authDomain: "kidney-web-app.firebaseapp.com",
  projectId: "kidney-web-app",
  storageBucket: "kidney-web-app.appspot.com",
  messagingSenderId: "195214761922",
  appId: "1:195214761922:web:5c0bbc51170a63e5e6805b",
  measurementId: "G-V2XNR1MBRT"
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig)

let bd = firebase.firestore();

//eventListener = Faz uma busca em um documento da coleção por vez e atualiza em tempo real.
      bd.collection("doenca_1").doc("1").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_1");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }
            
        }else{
            console.log("não existe")
      }})

      bd.collection("doenca_1").doc("2").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_2");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }}else{
            console.log("não existe")
      }})

      bd.collection("doenca_1").doc("3").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_3");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }}else{
            console.log("não existe")
      }})

      bd.collection("doenca_1").doc("4").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_4");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }}else{
            console.log("não existe")
      }})

      bd.collection("doenca_1").doc("5").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_5");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }}else{
            console.log("não existe")
      }})

      bd.collection("doenca_1").doc("6").onSnapshot(function(doc){
        if(doc.exists){
            const dados = doc.data()
          montaCard();
          function montaCard(){

                  var pDoenca = document.querySelector(".doenca_6");
                  var nome_p = document.createElement("h4");
                  var tDescricao_p = document.createElement("h5");
                  var descricao_p = document.createElement("p");
                  var tSintomas_p = document.createElement("h5");
                  var sintomas_p = document.createElement("p");
                  var tTratamento_p = document.createElement("h5");
                  var tratamento_p = document.createElement("p");
          
                  var nome = document.createTextNode(dados.nome);
                  var tDescricao = document.createTextNode(dados.tDescricao);
                  var descricao = document.createTextNode(dados.descricao);
                  var tSintomas = document.createTextNode(dados.tSintomas);
                  var sintomas = document.createTextNode(dados.sintomas);
                  var tTratamento = document.createTextNode(dados.tTratamento);
                  var tratamento = document.createTextNode(dados.tratamento);
          
                  nome_p.appendChild(nome);
                  tDescricao_p.appendChild(tDescricao);
                  descricao_p.appendChild(descricao);
                  tSintomas_p.appendChild(tSintomas);
                  sintomas_p.appendChild(sintomas);
                  tTratamento_p.appendChild(tTratamento);
                  tratamento_p.appendChild(tratamento);
                  
                  pDoenca.appendChild(nome_p);
                  pDoenca.appendChild(tDescricao_p)
                  pDoenca.appendChild(descricao_p);
                  pDoenca.appendChild(tSintomas_p)
                  pDoenca.appendChild(sintomas_p);
                  pDoenca.appendChild(tTratamento_p)
                  pDoenca.appendChild(tratamento_p);
          
                  nome_p.classList.add("doenca-nome");
                  tDescricao_p.classList.add("font-weight-bold" );
                  descricao_p.classList.add("doenca-descricao");
                  tSintomas_p.classList.add("font-weight-bold");
                  sintomas_p.classList.add("doenca-sintomas");
                  tTratamento_p.classList.add("font-weight-bold");
                  tratamento_p.classList.add("doenca-tratamento");
          }}else{
            console.log("não existe")
      }})


