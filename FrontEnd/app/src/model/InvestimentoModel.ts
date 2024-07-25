import { LancamentoAtivos } from "../interface/lancamentosAtivos.js";
import { TiposDeAtivosObjeto } from "./tiposDeAtivos.js";

export class InvestimentoModel
{

  public todosOsTiposDeAtivos: TiposDeAtivosObjeto[];

  constructor (private tiposDeAtivosLancamentos: LancamentoAtivos[])
  {
    this.todosOsTiposDeAtivos = [];
    this.fazerOrganizacaoDosLancamentos();
  }

  fazerOrganizacaoDosLancamentos (): void
  {
    for (const tipoDoAtivoLancamento of this.tiposDeAtivosLancamentos)
    {
      this.addTipoDeAtivoSeNaoTerNaArray(tipoDoAtivoLancamento);
      this.adiconarAtivoSeJaTerOTipoDeAtivos(tipoDoAtivoLancamento);
    }
  }

  addTipoDeAtivoSeNaoTerNaArray (tiposDeAtivos: LancamentoAtivos): void
  {
    if (!this.todosOsTiposDeAtivos.some(tipoDoAtivo => tipoDoAtivo.name === tiposDeAtivos.tipoDoAtivo))
    {
      this.todosOsTiposDeAtivos.push(new TiposDeAtivosObjeto(tiposDeAtivos.tipoDoAtivo));
    }
  }

  adiconarAtivoSeJaTerOTipoDeAtivos (tiposDeAtivos: LancamentoAtivos): void
  {
    for (const tipoDeAtivo of this.todosOsTiposDeAtivos)
    {
      this.adicionarSeOTipoForIgual(tipoDeAtivo, tiposDeAtivos);
    }
  }

  adicionarSeOTipoForIgual (tipoDeAtivo: TiposDeAtivosObjeto, tiposDeAtivos: LancamentoAtivos): void
  {
    if (tipoDeAtivo.name === tiposDeAtivos.tipoDoAtivo)
    {
      tipoDeAtivo.adicionandoAtivo(tiposDeAtivos);
      return;
    }
  }
}