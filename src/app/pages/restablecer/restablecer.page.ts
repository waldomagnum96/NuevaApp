import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  dato:any={
    nombreUsuario:"",
    nuevaCon:""
  };
  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  restablecer() {
    if(this.dato.nombreUsuario !="" && this.dato.nuevaCon !=""){
      this.presentAlert("Información", "¡Haz restablecido tu contraseña!");
    }else{
      this.presentAlert("Error","Por favor rellene todos los campos");
    }
  }

  async presentAlert(mensajeHeader:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: mensajeHeader,
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
