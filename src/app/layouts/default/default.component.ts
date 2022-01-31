import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }
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
