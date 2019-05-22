import { Estado } from '../model';
import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  categoria = new Estado();

  constructor(
    private service: EstadosService,
    private messageService: MessageService
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.categoria)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Estado '+this.categoria.nome+' cadastrado!'});
      form.reset();
    });
  }

  ngOnInit() {
  }

}
