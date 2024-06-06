vet_usuareio = [
    "jovideo",
    "cauedm",
    "gabijs"
];
vet_senha = [
    "12349",
    "adm3",
    "987654"
];

function pamonhacessar() {
    
    user = document.getElementById('lixinig').value ;
    pass = document.getElementById('lixing1').value ;
    var size = vet_usuareio.length;
    viroupamonha = 0
    for (var i = 0; i < size; i++){
        if (user == vet_usuareio[i] && pass == vet_senha[i]){
            viroupamonha = 99;
            i = size;
            
        }

    }
    if ( viroupamonha != 0){
        alert('pamonhão em');
        window.open('C:/User/Windows/Desktop/jov-miz/main/mizumenu.html', '_self)');
    }
    else{
        alert('usuario ou senha incorreto! seu pamonha escreve direito.')
        user = document.getElementById('lixinig').value ; '';
        pass = document.getElementById('lixing1').value ; '';
    }
}