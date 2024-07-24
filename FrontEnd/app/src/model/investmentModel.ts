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
    this.comparison(newInvestment);
    this.alreadyInTheArray(newInvestment);
  }

  
  comparison (newInvestment: any): void
  {
    if (
      !this.investments.some(investment => 
        investment.name === newInvestment.assetType)
    )
    {
      const assetType = new AssetType();
      assetType.addAssetType(newInvestment.assetType);
      this.investments.push(assetType);
    }
  }

  alreadyInTheArray (newInvestment: any): void
  {
    for (const investment of this.investments)
    {
      this.compareTheObjects(investment, newInvestment);
    }
  }

  compareTheObjects (investment: AssetType, newInvestment: any): void
  {
    if (investment.name === newInvestment.assetType)
    {
      investment.organize(newInvestment);
      return
    }
  }

  
}