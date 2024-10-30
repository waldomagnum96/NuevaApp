import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  tituloNoticia = "";
  textoNoticia = "";

  constructor(private dbService: DbserviceService, private router: Router) { }

  ngOnInit() {
  }

  guardar(){
    this.dbService.addNoticia(this.tituloNoticia,this.textoNoticia);
    this.dbService.presentToast("Noticia Agregada");
    this.router.navigate(['/noticias']);
  }
}
