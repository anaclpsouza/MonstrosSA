function conferirCampos() {
    var nome = document.getElementById('nomeCompleto').value;
    var curso = document.getElementById('curso').value;
    var email = document.getElementById('email').value;
    var check = document.getElementById('checkbox').value;
    var idade = document.getElementById('idade').value;
    if (nome === '' || curso === '' || email === '' || check === '' || idade === '') {
        alert("Por favor, preencha os campos vazios!");
    }
    else 
    alert("Formulário enviado com sucesso!")
}

