//import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'categorias-root',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  [x: string]: any;

  categorias = [];

  nomeBusca:String;

  constructor(private service:CategoriasService,
    private msg:MessageService,
    private conf:ConfirmationService){

  }

  confirmarExclusao(CategoriasComponent:any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir '+CategoriasComponent.nome+'?',
      accept: () => {
        this.excluir(CategoriasComponent);
      }
    });
  }

  excluir(CategoriasComponent:any){
    this.service.excluir(CategoriasComponent.id)
    .then(()=>{
      this.pesquisar();
      this.messageService.add({severity:'success', summary:'Exclusão', detail:'Categoria '+CategoriasComponent.nome+' excluída'});
    });
  }

};
