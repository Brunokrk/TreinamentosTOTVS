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


  /*
  items= [
    { 'Emissor Fact': 'item 1',
      'Nomb Abreviado':'item 1',
      'Nro Contratante': 'item 1',
      'Serie NF': 'item 1',
      'Número FT': 'item 1',
      'Mod Opr Fct': 'item 1',
      'denominacion': 'item 1'
    }
  ];
  */
  constructor(private tabelaTesteService : TabelaTesteService) { }

  ngOnInit(): void {
    this.columns = this.tabelaTesteService.getColumns();
    this.items = this.tabelaTesteService.getItems();
  }

}
