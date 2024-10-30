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
  ionicForm: FormGroup;

  // email:any
  // password:any
  // contact:any

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: AutheticationService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.ionicForm.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.LoginUser(this.ionicForm.value.email, this.ionicForm.value.password).catch((err: undefined) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(
          ['/tabsgeneral/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }

  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }






  
  async performFirebaseOperation() {
    // Muestra el loading
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'circles'
    });
    await loading.present();

    try {
      // Realiza la operación asincrónica con Firebase
      await this.firebaseOperation(); // tu función de Firebase
    } catch (error) {
      console.error("Error al realizar la operación:", error);
    } finally {
      // Oculta el loading independientemente del resultado
      await loading.dismiss();
    }
  }

  async firebaseOperation() {
    // Aquí iría tu código de Firebase (e.g., consultas, guardado de datos)
    return new Promise(resolve => setTimeout(resolve, 2000)); // simulación de operación
  }
}