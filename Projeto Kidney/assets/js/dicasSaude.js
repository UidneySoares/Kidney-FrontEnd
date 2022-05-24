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
        bd.collection("dicas-saude").doc("dicas-post-1").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            //Função que monta os elementos da página Web
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-1");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-2").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-2");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-3").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-3");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-4").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-4");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-5").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-5");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-6").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-6");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})
        bd.collection("dicas-saude").doc("dicas-post-7").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-7");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-8").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-8");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})

        bd.collection("dicas-saude").doc("dicas-post-9").onSnapshot(function(doc){
          if(doc.exists){
              const dados = doc.data();
            montaCard();
            function montaCard(){
              var dicaSaude = document.querySelector(".dica-9");
              var tituloCreate = document.createElement("h4");
              var paragrafoCreate = document.createElement("p");
              var titulo = document.createTextNode(dados.titulo);
              var paragrafo = document.createTextNode(dados.paragrafo);
              tituloCreate.appendChild(titulo);
              paragrafoCreate.appendChild(paragrafo);
              dicaSaude.appendChild(tituloCreate);
              dicaSaude.appendChild(paragrafoCreate);
              tituloCreate.classList.add("nome-sobre-rim");
            }}else{
              console.log("não existe")
        }})
  