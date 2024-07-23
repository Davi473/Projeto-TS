
import { AssetTypeInterface } from "../interface/assetTypeInterface";
import { OrganizeInvestment } from "../interface/organizeInvestment";
import { Asset } from "./asset.js";

export class AssetType implements AssetTypeInterface, OrganizeInvestment
{
  arrayAssetType: Asset[];
  name: string;

  constructor ()
  {
    this.arrayAssetType = [];
  }

  addAssetType (name: string, investment: any): void
  {

    this.name = name;
    this.organize(investment);
  }
  
  organize (investmentAssetType: any): void 
  {
    if (!this.arrayAssetType.some(investment => investment.name === investmentAssetType.asset))
    {
      const asset = new Asset();
      asset.addAsset(investmentAssetType.asset, investmentAssetType);
      this.addAssetArray(asset);
    }
  }

  addAssetArray (value: Asset): void
  {
    this.arrayAssetType.push(value);
  }
}