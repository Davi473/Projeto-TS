import { OrganizeInvestment } from "../interface/organizeInvestment.js";
import { AssetType } from "./assetType.js";

export class InvestmentModel implements OrganizeInvestment
{
  investments: AssetType[];

  constructor() 
  {
    this.investments = [];
  }

  organize(newInvestment: any): void 
  {
    if (!this.investments.some(investment => investment.name === newInvestment.assetType))
    {
      const assetType = new AssetType()
      assetType.addAssetType(newInvestment.assetType, newInvestment)
      this.addInvestment(assetType);
    }
    console.log(JSON.stringify(this.investments));
    /*
    for (const investment of this.investments)
    {
      if (investment.assetType === name.asset)
      {

      }
    }
    */
  }

  addInvestment (value: AssetType): void
  {
    this.investments.push(value);
  }
}