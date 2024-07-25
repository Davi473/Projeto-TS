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

  media(): number
  {
    let quantidade = 0;
    let valorMaximo = 0;
    for (const investimentos of this.investimentos)
    {
      quantidade += investimentos.quantidade;
      valorMaximo += investimentos.precoPorUnidade;
    }
    const media = valorMaximo / quantidade;
    return media;
    console.log(quantidade)
    console.log(valorMaximo)
  }
}