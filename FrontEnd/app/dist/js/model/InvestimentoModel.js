import { TiposDeAtivosObjeto } from "./tiposDeAtivos.js";
export class InvestimentoModel {
    constructor(tiposDeAtivosLancamentos) {
        this.tiposDeAtivosLancamentos = tiposDeAtivosLancamentos;
        this.todosOsTiposDeAtivos = [];
        this.fazerOrganizacaoDosLancamentos();
    }
    fazerOrganizacaoDosLancamentos() {
        for (const tipoDoAtivoLancamento of this.tiposDeAtivosLancamentos) {
            this.addTipoDeAtivoSeNaoTerNaArray(tipoDoAtivoLancamento);
            this.adiconarAtivoSeJaTerOTipoDeAtivos(tipoDoAtivoLancamento);
        }
    }
    addTipoDeAtivoSeNaoTerNaArray(tiposDeAtivos) {
        if (!this.todosOsTiposDeAtivos.some(tipoDoAtivo => tipoDoAtivo.name === tiposDeAtivos.tipoDoAtivo)) {
            this.todosOsTiposDeAtivos.push(new TiposDeAtivosObjeto(tiposDeAtivos.tipoDoAtivo));
        }
    }
    adiconarAtivoSeJaTerOTipoDeAtivos(tiposDeAtivos) {
        for (const tipoDeAtivo of this.todosOsTiposDeAtivos) {
            this.adicionarSeOTipoForIgual(tipoDeAtivo, tiposDeAtivos);
        }
    }
    adicionarSeOTipoForIgual(tipoDeAtivo, tiposDeAtivos) {
        if (tipoDeAtivo.name === tiposDeAtivos.tipoDoAtivo) {
            tipoDeAtivo.adicionandoAtivo(tiposDeAtivos);
            return;
        }
    }
}
//# sourceMappingURL=InvestimentoModel.js.map