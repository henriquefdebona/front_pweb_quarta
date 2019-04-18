import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Henrique';

  // Array de Categorias
  categorias = [
    {id:"1", nome:"Categoria 1"},
    {id:"2", nome:"Categoria 2"},
    {id:"3", nome:"Categoria 3"},
    {id:"4", nome:"Categoria 4"},
    {id:"5", nome:"Categoria 5"},
    {id:"6", nome:"Categoria 6"},
    {id:"7", nome:"Categoria 7"},
    {id:"8", nome:"Categoria 8"},
    {id:"9", nome:"Categoria 9"},
    {id:"10", nome:"Categoria 10"}
  ];
}
