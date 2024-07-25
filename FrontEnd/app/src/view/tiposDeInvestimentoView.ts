import { TiposDeAtivosObjeto } from "../model/tiposDeAtivos";

export class InvestmentView
{
  tabelas = "";

  constructor (private model: TiposDeAtivosObjeto[]) 
  {
    for (const tiposDeAtivos of this.model)
    {
      this.titulos(tiposDeAtivos.name);
      for (const ativos of tiposDeAtivos.todosOsAtivos)
      {
        console.log(ativos.media());
        //console.log(ativos);
      }
      
      //console.log(this.tabelas);
    }
  }
  
  //protected template(model: TiposDeAtivosObjeto[]): string {
    /*
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
    */

    /*
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
    */
  //}

  private titulos(name: string):void
  {
    this.tabelas += `<h3>${name}</h3>`
  }
  
}