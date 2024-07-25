export class Ativos {
    constructor(name) {
        this.name = name;
        this.investimentos = [];
    }
    adicionarInvestimento(investimento) {
        this.investimentos.push({
            quantidade: investimento.quantidade,
            precoPorUnidade: investimento.precoPorUnidade,
            valorTotal: investimento.valorTotal
        });
    }
}
//# sourceMappingURL=ativos.js.map