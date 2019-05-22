import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { EstadosService } from './estados.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';

@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule
  ],
  exports:[
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers: [
    EstadosService,
    MessageService
  ]
})
export class EstadosModule { }
