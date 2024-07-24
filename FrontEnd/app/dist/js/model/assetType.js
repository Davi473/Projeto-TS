import { Asset } from "./asset.js";
export class AssetType {
    constructor() {
        this.arrayAssetType = [];
    }
    addAssetType(name) {
        this.name = name;
    }
    organize(investmentAssetType) {
        this.comparison(investmentAssetType);
        this.alreadyInTheArray(investmentAssetType);
    }
    comparison(investmentAssetType) {
        if (!this.arrayAssetType.some(investment => investment.name === investmentAssetType.asset)) {
            const asset = new Asset();
            asset.addAsset(investmentAssetType.asset);
            this.arrayAssetType.push(asset);
        }
    }
    alreadyInTheArray(investmentAssetType) {
        for (const investment of this.arrayAssetType) {
            this.compareTheObjects(investment, investmentAssetType);
        }
    }
    compareTheObjects(investment, investmentAssetType) {
        if (investment.name === investmentAssetType.asset) {
            investment.organize(investmentAssetType);
            return;
        }
    }
}
//# sourceMappingURL=assetType.js.map