import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any;
  constructor(public router:Router,private activedRoute: ActivatedRoute) {
    this.activedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        
      }
    })
  }
  @ViewChild('backgroundAudio') backgroundAudio: any;
  isPlaying: boolean = false; // Estado de reproducción

  toggleAudio() {
    const audio = this.backgroundAudio.nativeElement;
    
    if (this.isPlaying) {
      audio.pause(); // Pausa el audio
    } else {
      audio.play(); // Reproduce el audio
    }
  
    this.isPlaying = !this.isPlaying; // Cambia el estado de reproducción
  }
  
}
