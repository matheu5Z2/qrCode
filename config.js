const { Sequelize } = require('sequelize');

/* Conexão com Banco de Dados*/
const sequelize = new Sequelize('qrcode', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('Conexão realizada com scuesso!')
}).catch(function(err){
    console.log('Erro ao realizar a conexão com BD: ' + err)
});

/* Criando Banco de Dados */
const veiculo = sequelize.define('veiculos', {
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING,
    },
    placa: {
        type: Sequelize.STRING,
    },
    condutor: {
        type: Sequelize.STRING,
    },
    gestor: {
        type: Sequelize.STRING,
    },
    obra: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }
});

const equipamento = sequelize.define('equipamentos', {
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING,
    },
    nSerie: {
        type: Sequelize.STRING,
    },
    gestor: {
        type: Sequelize.STRING,
    },
    obra: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }
});

/* Enviando dados para o BD*/
veiculo.create({
    marca: "fiat",
    modelo: "uno",
    placa: "ddf455",
    condutor: "Matheus",
    gestor: "Luciane",
    obra: "Bertioga",
    status: "Locado"
});
equipamento.create({
    marca: "sapinho",
    modelo: "sei-lá",
    nSerie: "015454510",
    gestor: "Luciane",
    obra: "Bertioga"
});

/* Criando Tabelas com Sequelize */ 
//veiculo.sync({force: true});
//equipamento.sync({force: true});