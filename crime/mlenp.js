var cartas = ["btn_a1", "btn_b1", "btn_c1", "btn_b2", "btn_c2", "btn_a2"]
var bralho = ['', '', '', '', '', '']


var roberto = 0;
var maycom = 0;
for (i in bralho) {
    maycom = cartas.length
    roberto = Math.floor(Math.random() * maycom)
    bralho[i] = cartas[roberto]
}


function tundra() {
    var botao = document.getElementById('btn_a1');
    vet = ["falsto", "silva", "cabeça", "amarelo", "DST"];
    i = Math.floor(Math.random() * 5)
    vet[i]
    botao.innerHTML= vet[i]
}
function chalge() { 
    document.getElementById(bralho[0]).src="pngegg.png"
    document.getElementById(bralho[1]).src="pngegg (1).png"
    document.getElementById(bralho[2]).src="pngegg (00).png"
    document.getElementById(bralho[3]).src="pngegg (0).png"
    document.getElementById(bralho[4]).src="pngegg (2).png"
    document.getElementById(bralho[5]).src="pngegg (3).png"    
}