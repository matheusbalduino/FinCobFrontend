import { Component, OnInit } from '@angular/core';
import { FinanceiroCobranca } from 'src/app/interfaces/FinanceiroCobranca';
import { FinanceiroService } from 'src/app/layouts/default/services/financeiro.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public pessoa: FinanceiroCobranca;
  public boleto:string;
  public contratante: string;

  constructor(private financeiro: FinanceiroService) { }

  ngOnInit(): void {

  }

  ObterPessoa(){
    this.pessoa = null;
    this.financeiro.obterDadosPessoa(this.boleto, this.contratante)
    .subscribe((result:any)=>{
      this.pessoa = result;
    })
  }


}
