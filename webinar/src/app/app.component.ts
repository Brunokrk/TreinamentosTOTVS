import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

}
