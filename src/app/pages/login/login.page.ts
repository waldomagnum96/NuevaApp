import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/services/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // relacionado con ngmodel para obtener inputs del login (validar)
  login:any={
    usuario:"",
    password:""
  }
  //definir una variable para indicar el campo vacío
  field:string="";

  constructor(public router:Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    if(this.validateModel(this.login)){
      let navigationExtras : NavigationExtras={
        state:{login:this.login}
      }
      this.presentToast("top","Bienvenido/a");
      this.router.navigate(['/tabsgeneral/home'],navigationExtras);
    }else{
      this.presentToast("middle","Campo incompleto - Falta: "+ this.field, 4000);
    }
    
  }
  //validar los campos de entrada (que se ingrese algo) mediante su modelo con validateModel
  validateModel(model:any){
    //recorre el modelo login revisando las entradas de Object
    for(var [key,value] of Object.entries(model)){
      // si el campo es vacío ("") se retorna falso y se indica el nombre del campo que falta
      if (value == ""){
        this.field = key;
        return false;
      }
    }
    return true;
  }
  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string, duracion?:number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion?duracion:2500,
      position: position,
    });

    await toast.present();
  }
}