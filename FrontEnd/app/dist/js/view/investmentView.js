import { View } from "./view.js";
export class InvestmentView extends View {
    template(model) {
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
    `;
    }
}
//# sourceMappingURL=investmentView.js.map