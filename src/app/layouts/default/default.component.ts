import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from './services/financeiro.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private financeiro: FinanceiroService) { }
  public openedsidebar: boolean = true;

  ngOnInit(): void {
    var largura = window.innerWidth || document.documentElement.clientWidth  || document.body.clientWidth;
    var altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if(largura < 800){
      this.openedsidebar = false;
    }

  }

  OpenClose(){
    this.openedsidebar = !this.openedsidebar;
  }

}
