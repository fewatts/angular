import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Iphone XR", descricao: "medium phone", esgotado: false},
    {id: 2, nome: "Iphone 14", descricao: "medium phone", esgotado: false},
    {id: 3, nome: "Iphone 11", descricao: "medium phone", esgotado: false}
  ]
}
