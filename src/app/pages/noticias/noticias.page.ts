import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {


  noticias : any = [
    {
      titulo: "Titulo de la Noticia",
      texto: "Texto de la noticia que quiero que salga en el cuerpo del item"
    }
  ];

  constructor(private dbService: DbserviceService) { }

   // Nueva función para eliminar noticia
   eliminarNoticia(noticias: any) {
    // Primero la elimina de la base de datos
    this.dbService.deleteNoticia(noticias.id).then(() => {
      // Luego la eliminamos del arreglo local
      this.noticias = this.noticias.filter((item: any) => item.id !== noticias.id);
    }).catch((error) => {
      console.error("Error eliminando la noticia: ", error);
    });
  }
 

  ngOnInit() {
    this.dbService.dbState().subscribe((res: any)=>{
      if (res) {
        this.dbService.fetchNoticias().subscribe((item:any)=>{
          this.noticias = item;
        })
      }
    });
  }

}
