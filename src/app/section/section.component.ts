import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import {OnInit} from '@angular/core';
import { SectionService } from './service/section.service';
import { Isection } from './service/isection';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  listar(){
    this.service.listar().subscribe(dados =>this.produtos =dados);
  }
  ngOnInit(): void {this.listar()}

  produtos : Isection[] = [];
  constructor(private service: SectionService){}

  Comprar(){
    Swal.fire({
      title: "Você deseja comprar este bloco?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Salvo! Adicionado ao seu inventrário", "", "success");
      } else if (result.isDenied) {
        Swal.fire("As mudanças não foram alteradas.", "", "info");
      }
    });
  }
}
