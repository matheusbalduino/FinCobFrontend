import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FinanceiroCobranca } from 'src/app/interfaces/FinanceiroCobranca';
import { FinanceiroService } from 'src/app/layouts/default/services/financeiro.service';
import { Util } from 'src/app/Utils/util';


@Component({
  selector: 'app-consultalotes',
  templateUrl: './consultalotes.component.html',
  styleUrls: ['./consultalotes.component.scss']
})
export class ConsultalotesComponent implements OnInit {

  public array: any;

  displayedColumns: string[] = ['cdnCliente', 'lote',	'telefone',	'nmUsuario',	'valor',	'dtVencimento',
  	'cdBoleto',	'enviado',	'dataEnvio',	'codPortador',	'tipoEnvio'];

    public dataSource: any;
    public pageSize = 10;
    public currentPage = 0;
    public totalSize = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    public filtro:string;

    public lotes:string[];
    public lote:string;

    myControl = new FormControl();


    constructor(private financeiro: FinanceiroService) { }

    public hoje = new Date();

    util = new Util();

    ngOnInit(): void {
      this.obterLotes();
    }

    public handlePage(e: any) {
      this.currentPage = e.pageIndex;
      this.pageSize = e.pageSize;
      this.iterator();
    }

    public obterLotes(){
     return this.financeiro.obterLotes()
          .subscribe(result => {
            this.lotes = result
            return result
          });
    }

    public obterLote(lote:string){
      this.lote = lote;
      this.financeiro.obterLote(lote)
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource<FinanceiroCobranca>(response);
        this.dataSource.paginator = this.paginator;
        this.array = response;
        this.totalSize = this.array.length;
      })
    }

    private iterator() {
      const end = (this.currentPage + 1) * this.pageSize;
      const start = this.currentPage * this.pageSize;
      const part = this.array.slice(start, end);
      this.dataSource = part;
    }

    public extratorDados(){
      this.financeiro.download(this.lote)
      .subscribe(result => {
        this.download(result);
      },
      error => {error});
    }

    download(result:any){

      var blob = new Blob([result], {type:'text/csv;charset=utf-8;'})

      var filename = "lote" +
      this.lote.replace("/","").replace("/","").replace("/","") +
      ".csv";

      if(navigator.msSaveBlob){
        navigator.msSaveBlob(blob, filename);
      }else{
        var link = document.createElement("a");
        if(link.download !== undefined){
          var url =URL.createObjectURL(blob);
          link.setAttribute("href",url);
          link.setAttribute("download", filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    }



}

