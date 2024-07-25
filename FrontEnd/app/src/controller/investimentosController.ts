import { domQuerySelect } from "../decorators/domSelector.js";
import { InvestimentoModel } from "../model/InvestimentoModel.js";

export class InvestmentController
{
  @domQuerySelect("main")
  private main: HTMLElement;
  private launchOfInvestments: any[];

  constructor ()
  {
    this.launchOfInvestments = [
      {tipoDoAtivo: "FIIs", ativo: "MXRF11", quantidade: 5, precoPorUnidade: 10.44, valorTotal: 52.20},
      {tipoDoAtivo: "FIIs", ativo: "MXRF11", quantidade: 6, precoPorUnidade: 10.44, valorTotal: 52.20},
      {tipoDoAtivo: "Ações", ativo: "BBDC4", quantidade: 1, precoPorUnidade: 13.73, valorTotal: 13.73}
    ];
    this.init();
  }

  init()
  {
    const organize = new InvestimentoModel(this.launchOfInvestments);
    console.log(JSON.stringify(organize.todosOsTiposDeAtivos, null, 2));
    
  }
}