import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class TabelaTesteService {

  constructor() { }


  getColumns(): Array<PoTableColumn>{
    return [
      { property: 'emissor_fact', type:'number', label:'Emissor Fact' },
      { property: 'nomb_abrev', type:'string', label:'Nombre Abrev' },
      { property: 'nro_contrat', type:'number', label:'Nro Contrat' },
      { property: 'serie_nf', type:'string', label:'Serie NF' },
      { property: 'numero_ft', type:'number', label:'Numero FT' },
      { property: 'modOpr_fct', type:'string', label:'Modo Operador FCT' },
      { property: 'denominacion', type:'string', label:'Denominacion' },

    ]
  }

  getItems(): Array<any>{
    return[
      {
        emissor_fact:'Empresa 1',
        nomb_abrev:'Empr1',
        nro_contrat:'1201',
        serie_nf:'Epr1-1201',
        numero_ft:'1301',
        modOpr_fct:'TeSte001',
        denominacion:'Lorem Ipsum, Lorem Ipsum',
      },
      {
        emissor_fact:'Empresa 2',
        nomb_abrev:'Empr2',
        nro_contrat:'1202',
        serie_nf:'Epr2-1202',
        numero_ft:'1302',
        modOpr_fct:'TeSte002',
        denominacion:'Lorem Ipsum, Lorem Ipsum',
      },

    ]

  }
}
