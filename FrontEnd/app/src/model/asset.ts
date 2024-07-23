import { AssetInterface } from "../interface/assetInterface";
import { Investment } from "../interface/investment";
import { OrganizeInvestment } from "../interface/organizeInvestment";

export class Asset implements AssetInterface, OrganizeInvestment
{
  
  arrayAsset: Investment[];
  name: string;

  constructor()
  {
    this.arrayAsset = [];
  }

  addAsset (name: string, investment: any): void
  {
    this.name = name;
    this.organize(investment);
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