import { domQuerySelect } from "../decorators/domSelector.js";

export class InvestmentController
{
  @domQuerySelect("main")
  private main: HTMLElement;
  private launchOfInvestments: any[];

  constructor ()
  {
    this.launchOfInvestments = [
      {assetType: "FIIs", asset: "MXRF11", number: 5, unitaryValue: 10.44, totalValue: 52.20},
      {assetType: "Ações", asset: "BBDC4", number: 1, unitaryValue: 13.73, totalValue: 13.73}
    ];
  }
}