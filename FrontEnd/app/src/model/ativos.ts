import { Investimentos } from "../interface/investimentos.js";
import { LancamentoAtivos } from "../interface/lancamentosAtivos.js";

export class Ativos
{
  public name: string;
  public investimentos: Investimentos[];

  constructor(name: string) 
  {
    this.name = name;
    this.investimentos = [];
  }

  adicionarInvestimento (investimento: LancamentoAtivos)
  {
    this.investimentos.push(
      {
        quantidade: investimento.quantidade, 
        precoPorUnidade: investimento.precoPorUnidade, 
        valorTotal: investimento.valorTotal
      })
  }
}