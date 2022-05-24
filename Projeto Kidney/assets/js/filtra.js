var campoFiltro = document.querySelector("#filtrar-doenca");
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var doencas = document.querySelectorAll(".doenca");
    if(this.value.length > 0){
        for( var i=0; i < doencas.length; i++){
            var doenca = doencas[i];
            var doencaSintoma = doenca.querySelector(".doenca-sintomas");
            var sintoma = doencaSintoma.textContent;
            //expressão regular
            var expressao = new RegExp(this.value,"i");
            if (!expressao.test(sintoma)){
                doenca.classList.add("invisivel");

            }
            else{
                doenca.classList.remove("invisivel")
            }
        }
    }else{
        for( var i=0; i < doencas.length; i++){
            var doenca = doencas[i];
            doenca.classList.remove("invisivel");
        }}
    });

