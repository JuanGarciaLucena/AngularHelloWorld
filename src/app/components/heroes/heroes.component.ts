import { Prueba } from './../../model/prueba';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { restoreView } from '@angular/core/src/render3';

declare var $: any;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  prueba : Prueba = new Prueba()
  constructor(private service : RestService) {  }

  ngOnInit() {
    $('.datepicker').datepicker();
  }

  insertPrueba(){
    this.prueba.id = 1
    this.prueba.value = "BLA BLA BLA"
    console.log(this.prueba)
    this.service.insertPrueba(this.prueba).subscribe(a =>{
      console.log("INSERTADO")
    }, error =>{
      console.error("PAQUETE")
    })
  }
}
