import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';
import { EstadosService } from './estados.service';

@Component({
  selector: 'estados-root',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  [x: string]: any;

  categorias = [];

  nomeBusca:String;

  constructor(private service:EstadosService,
    private msg:MessageService,
    private conf:ConfirmationService){

  }

  confirmarExclusao(EstadosComponent:any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir '+EstadosComponent.nome+'?',
      accept: () => {
        this.excluir(EstadosComponent);
      }
    });
  }

  excluir(EstadosComponent:any){
    this.service.excluir(EstadosComponent.id)
    .then(()=>{
      this.pesquisar();
      this.messageService.add({severity:'success', summary:'Exclusão', detail:'Estado '+EstadosComponent.nome+' excluído!'});
    });
  }

};
