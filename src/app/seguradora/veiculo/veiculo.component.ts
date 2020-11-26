import { Component, OnInit } from '@angular/core';

import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  allVeiculos = []

  constructor(private veiculoService: VeiculoService) { 

    this.veiculoService.getAll()
      .subscribe(resp => 
        this.showAllVeiculos(resp)
      );

  }

  ngOnInit() {
  }

  showAllVeiculos (data) {
    console.log(data)
    this.allVeiculos = data
  }

}
