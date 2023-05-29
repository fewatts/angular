import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Fernando";
  dataNascimento = "1999-10-04";
  urlImagem = "https://avatars.githubusercontent.com/u/110425294?v=4";

  mostrarDataNascimento(){
    alert(`Birth date:  ${this.dataNascimento}`);
  }

}
