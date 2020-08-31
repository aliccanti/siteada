function validaForm() {

    if (document.querySelector("#userNome").value != "" && document.querySelector("#userEmail").value != "" && document.querySelector("#userTelefone").value != "") {
        alert("Massa! Você se inscreveu.")
    }else {
       alert("Preencha corretamente os campos.")
    }

}

document.querySelector("#btn-enviar").addEventListener('click', validaForm)