import { domQuerySelect } from "../decorators/domSelector.js";
import { InvestmentModel } from "../model/investmentModel.js";

export class InvestmentController
{
  @domQuerySelect("main")
  private main: HTMLElement;
  private launchOfInvestments: any[];

  constructor ()
  {
    this.launchOfInvestments = [
      {assetType: "FIIs", asset: "MXRF11", number: 5, unitaryValue: 10.44, totalValue: 52.20},
      {assetType: "FIIs", asset: "MXRF11", number: 6, unitaryValue: 10.44, totalValue: 52.20},
      {assetType: "Ações", asset: "BBDC4", number: 1, unitaryValue: 13.73, totalValue: 13.73}
    ];
    this.init();
  }

  init()
  {
    const organize = new InvestmentModel();
    for (const asset of this.launchOfInvestments)
    {
      organize.organize(asset);
    }
    console.log(JSON.stringify(organize, null, 2));
    
  }
}