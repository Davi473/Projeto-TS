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
    media() {
        let quantidade = 0;
        let valorMaximo = 0;
        for (const investimentos of this.investimentos) {
            quantidade += investimentos.quantidade;
            valorMaximo += investimentos.precoPorUnidade;
        }
        const media = valorMaximo / quantidade;
        return media;
        console.log(quantidade);
        console.log(valorMaximo);
    }
}
//# sourceMappingURL=ativos.js.map