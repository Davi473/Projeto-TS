export class InvestmentView {
    constructor(model) {
        this.model = model;
        this.tabelas = "";
        for (const tiposDeAtivos of this.model) {
            this.titulos(tiposDeAtivos.name);
            for (const ativos of tiposDeAtivos.todosOsAtivos) {
                console.log(ativos.media());
            }
        }
    }
    titulos(name) {
        this.tabelas += `<h3>${name}</h3>`;
    }
}
//# sourceMappingURL=tiposDeInvestimentoView.js.map