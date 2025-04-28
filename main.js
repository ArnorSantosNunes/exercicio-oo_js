//exercicio oo_js
// Crie uma classe de uma abstração;

// Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// Crie pelo menos três instâncias de objetos;

function Carro(name, cor, preco) {
    this.name = name;
    this.cor = cor;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }
    
    this.setPreco = function(valor) {  
        if(typeof valor === 'number') {
            _preco = valor;
        }
    }
    
    this.ipva = function() {
        const novoPreco = _preco * 1.1;
        _preco = novoPreco;
    }
    
    this.dizCor = function() {
        console.log(this.cor);
    }
    
    this.dizNome = function() {
        console.log(this.name);
    }
}


function WerkeAG(name, cor, preco) {
    Carro.call(this, name, cor, preco);

    this.ipva = function() {
        const novoPreco = this.getPreco() * 1.15;
        this.setPreco(novoPreco);
    }
}
WerkeAG.prototype = Object.create(Carro.prototype);


function Ford(name, cor, preco) {
    Carro.call(this, name, cor, preco);

    this.ipva = function() {
        const novoPreco = this.getPreco() * 1.04;
        this.setPreco(novoPreco);
    }
}
Ford.prototype = Object.create(Carro.prototype);


const carro1 = new Carro("Gol", "vermelho", 5000);
const carro2 = new WerkeAG("Ka", "preto", 10000);
const carro3 = new Ford("Fiesta", "branco", 7000);


carro1.ipva();
console.log(carro1.getPreco());

carro2.ipva();
console.log(carro2.getPreco());  

carro3.ipva();
console.log(carro3.getPreco());


