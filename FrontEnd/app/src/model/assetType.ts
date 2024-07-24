
import { AssetTypeInterface } from "../interface/assetTypeInterface";
import { OrganizeInvestment } from "../interface/organizeInvestment";
import { Asset } from "./asset.js";

export class AssetType implements AssetTypeInterface, OrganizeInvestment
{
  name: string;
  arrayAssetType: Asset[];

  constructor ()
  {
    this.arrayAssetType = [];
  }

  addAssetType (name: string): void
  {
    this.name = name;
  }
  
  organize (investmentAssetType: any): void 
  {
    this.comparison(investmentAssetType);
    this.alreadyInTheArray(investmentAssetType);
  }

  comparison (investmentAssetType: any): void
  {
    if (
      !this.arrayAssetType.some(investment => 
        investment.name === investmentAssetType.asset)
    )
    {
      const asset = new Asset();
      asset.addAsset(investmentAssetType.asset);
      this.arrayAssetType.push(asset);
    }
  }

  alreadyInTheArray (investmentAssetType: any): void
  {
    for (const investment of this.arrayAssetType)
    {
      this.compareTheObjects(investment, investmentAssetType)
    }
  }

  compareTheObjects (investment: Asset, investmentAssetType: any): void
  {
    if (investment.name === investmentAssetType.asset)
    {
      investment.organize(investmentAssetType);
      return
    }
  }
}