import { Ativos } from "./ativos.js";
export class TiposDeAtivosObjeto {
    constructor(name) {
        this.name = name;
        this.todosOsAtivos = [];
    }
    adicionandoAtivo(ativoLancamento) {
        if (!this.todosOsAtivos.some(ativo => ativo.name === ativoLancamento.ativo)) {
            this.todosOsAtivos.push(new Ativos(ativoLancamento.ativo));
        }
        for (const ativo of this.todosOsAtivos) {
            if (ativo.name === ativoLancamento.ativo) {
                ativo.adicionarInvestimento(ativoLancamento);
                return;
            }
        }
    }
}
//# sourceMappingURL=tiposDeAtivos.js.map