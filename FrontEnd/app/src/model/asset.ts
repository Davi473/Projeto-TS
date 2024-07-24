import { AssetInterface } from "../interface/assetInterface";
import { Investment } from "../interface/investment";
import { OrganizeInvestment } from "../interface/organizeInvestment";

export class Asset implements AssetInterface, OrganizeInvestment
{
  
  name: string;
  arrayAsset: Investment[];

  constructor()
  {
    this.arrayAsset = [];
  }

  addAsset (name: string): void
  {
    this.name = name;
  }
  
  organize(investmentType: any): void 
  {
    const investment = <Investment>{
      number: investmentType.number, 
      unitaryValue: investmentType.unitaryValue, 
      totalValue: investmentType.totalValue
    }
    this.arrayAsset.push(investment);
  }
}