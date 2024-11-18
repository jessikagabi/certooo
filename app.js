function criarCartao(categoria, pergunta, resposta) {
    let containeer = document.getElementById('container')
    let cartao = document.createElement('articule')


cartao.innerHTML = `
<div cla="cartao__conteudo">
<h3>Programação</h3>
<div class="cartao__conteudo__pergunta'>
<p>O ue é JavaScript?</p>
</div>
<div cla'cartao__conteudo__resposta">
<p>O JavaScript é uma linguagem de programação</p>
</div>
</div>
`

containeer.appendChild(cartao)

}