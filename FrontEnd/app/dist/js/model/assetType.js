import { Asset } from "./asset.js";
export class AssetType {
    constructor() {
        this.arrayAssetType = [];
    }
    addAssetType(name, investment) {
        this.name = name;
        this.organize(investment);
    }
    organize(investmentAssetType) {
        if (!this.arrayAssetType.some(investment => investment.name === investmentAssetType.asset)) {
            const asset = new Asset();
            asset.addAsset(investmentAssetType.asset, investmentAssetType);
            this.addAssetArray(asset);
        }
    }
    addAssetArray(value) {
        this.arrayAssetType.push(value);
    }
}
//# sourceMappingURL=assetType.js.map