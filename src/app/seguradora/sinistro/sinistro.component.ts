import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "angular2-notifications";

import { SinistroService } from './sinistro.service';

@Component({
  selector: 'app-sinistro',
  templateUrl: './sinistro.component.html',
  styleUrls: ['./sinistro.component.css']
})
export class SinistroComponent implements OnInit {

  veiculo = {}
  dataRetorno = {}
  
  constructor(private sinistroService: SinistroService, private notifications: NotificationsService) { }

  ngOnInit() {
  }

  addSinistro() {

    this.sinistroService.addSinistro(this.veiculo)
      .subscribe(
        resp => this.resultSinistro(resp),
        error => this.errorSinistro(error)
      );

  }

  errorSinistro(error) {
    this.notifications.error("Atenção!", "Veículo não encontrado!");
  }

  resultSinistro(data) {
    this.dataRetorno = data;
    this.notifications.success("Sucesso!", "Sinistro adicionado!");
  }

  newSinistro() {
    this.veiculo = {}
    this.dataRetorno = {}
  }

}
