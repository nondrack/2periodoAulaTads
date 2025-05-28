const fs = require('fs'); // Importa o módulo fs para manipulação de arquivos
const prompt = require('prompt-sync')(); // Importa prompt-sync para entrada de dados via terminal

// Função para limpar a tela antes de exibir novas informações
function limparTela() {
    console.clear();
}

// Função para ler os dados do arquivo JSON e convertê-los para um objeto JavaScript
function lerArquivo() {
    return JSON.parse(fs.readFileSync('dataPequena.json', 'utf8'));
}

// Função para salvar os dados no arquivo JSON após uma alteração
function salvarArquivo(dados) {
    fs.writeFileSync('dataPequena.json', JSON.stringify(dados, null, 2), 'utf8');
}

// Cadastro de roupa
function cadastrarRoupa() {
    limparTela();
    const dados = lerArquivo();

    // Solicita as informações da nova roupa ao usuário
    const descricao = prompt("Descrição da roupa: ");
    const estoque = parseInt(prompt("Quantidade em estoque: "));
    const precoPago = parseFloat(prompt("Preço pago ao fornecedor: "));
    const fornecedorId = parseInt(prompt("ID do fornecedor: "));

    // Cria um novo objeto de roupa com um ID único baseado no tamanho do array
    const novaRoupa = { id: dados.roupas.length + 1, descricao, estoque, precoPago, fornecedorId };
    dados.roupas[dados.roupas.length] = novaRoupa;
    
    salvarArquivo(dados);
    console.log("Roupa cadastrada com sucesso!\n");
}

// Registro de venda
function registrarVenda() {
    limparTela();
    const dados = lerArquivo();
    
    //deve ser implementado o registro da venda aqui
    
    salvarArquivo(dados);
    console.log("Venda registrada com sucesso!\n");
}

function relatorioEstoque() {
    limparTela();
    const dados = lerArquivo();
    console.log("\n--- Histórico de Vendas ---");

    //deve ser implementado o relatorio de estoque aqui
}

// Relatório de vendas
function relatorioVendas() {
    limparTela();
    const dados = lerArquivo();
    console.log("\n--- Histórico de Vendas ---");

    let i = 0;
    while (i < dados.vendas.length) {
        const venda = dados.vendas[i];

        // Busca manualmente o cliente associado à venda
        let cliente = null;
        let j = 0;
        while (j < dados.clientes.length) {
            if (dados.clientes[j].id === venda.clienteId) {
                cliente = dados.clientes[j];
                break;
            }
            j++;
        }

        let nomeCliente = "Desconhecido";
        if (cliente !== null) {
            nomeCliente = cliente.nome;
        }

        // Exibe os detalhes da venda
        console.log("Venda ID: " + venda.id);
        console.log("Cliente: " + nomeCliente + " | Data/Hora: " + venda.dataHora);
        console.log("Itens comprados: " + venda.roupasCompradas.join(", ") + " | Valor: R$ " + venda.valorVenda.toFixed(2));
        console.log("---------------------------------\n");
        i++;
    }
}

// Menu Interativo
function menu() {
    let opcao;
    do {
        console.log("\n=== Sistema de Gerenciamento do Brechó ===");
        console.log("1 - Cadastrar Roupa");
        console.log("2 - Registrar Venda");
        console.log("3 - Relatório de Estoque");
        console.log("4 - Relatório de Todas as Vendas");
        console.log("0 - Sair");

        opcao = prompt("Escolha uma opção: ");
        limparTela();

        switch (opcao) {
            case '1':
                cadastrarRoupa();
                break;
            case '2':
                registrarVenda();
                break;
            case '3':
                relatorioEstoque();
                break;
            case '4':
                relatorioVendas();
                break;
            case '0':
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '0');
}

// Iniciar o menu interativo
menu();