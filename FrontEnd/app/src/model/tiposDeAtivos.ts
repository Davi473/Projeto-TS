import { LancamentoAtivos } from "../interface/lancamentosAtivos.js";
import { Ativos } from "./ativos.js";

export class TiposDeAtivosObjeto
{
  public name: string;
  public todosOsAtivos: Ativos[];

  constructor (name: string)
  {
    this.name = name;
    this.todosOsAtivos = []
  }

  adicionandoAtivo (ativoLancamento: LancamentoAtivos)
  {
    if (!this.todosOsAtivos.some(ativo => ativo.name === ativoLancamento.ativo))
    {
      this.todosOsAtivos.push(new Ativos(ativoLancamento.ativo))
    }
    for (const ativo of this.todosOsAtivos)
    {
      if (ativo.name === ativoLancamento.ativo)
      {
        ativo.adicionarInvestimento(ativoLancamento)
        return;
      }
    }
  }
  
  
}