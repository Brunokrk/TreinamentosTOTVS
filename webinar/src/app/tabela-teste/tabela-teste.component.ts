import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { TabelaTesteService } from './tabela-teste.service'

@Component({
  selector: 'app-tabela-teste',
  templateUrl: './tabela-teste.component.html',
  styleUrls: ['./tabela-teste.component.css']
})
export class TabelaTesteComponent implements OnInit {

  columns: Array<PoTableColumn>;
  items: Array<any>;

  constructor(private tabelaTesteService : TabelaTesteService) { }

  ngOnInit(): void {
    this.columns = this.tabelaTesteService.getColumns();
    this.items = this.tabelaTesteService.getItems();
  }

  
}
