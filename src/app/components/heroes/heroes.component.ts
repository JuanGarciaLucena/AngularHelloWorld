import { Prueba } from './../../model/prueba';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  prueba : Prueba = new Prueba();

  companyName : string;

  constructor(private service : RestService) {  }

  ngOnInit() {
    $('.datepicker').datepicker();
  }

  guardar(formulario: NgForm){
    /*this.prueba.id = 1
    this.prueba.value = "BLA BLA BLA"
    console.log(this.prueba)
    this.service.insertPrueba(this.prueba).subscribe(a =>{
      console.log("INSERTADO")
    }, error =>{
      console.error("PAQUETE")
    })*/
    console.log(formulario)
  }
}
