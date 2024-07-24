import { AssetType } from "../model/assetType.js";
import { View } from "./view.js";
/*
export class InvestmentView extends View<AssetType>
{
  protected template(model: AssetType): string {
    let investment = "";
    for (const investmentAsset of model) {
      investment += `
        <tr>
              <td>${this.formatar(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
        </tr>
      `
    }


    return `
      <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${investment}
      </tbody>
    </table>
    `
  }
  
}
  */