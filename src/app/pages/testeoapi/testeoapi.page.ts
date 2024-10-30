import { Component, OnInit } from '@angular/core';
import { ServicerestService } from 'src/app/services/servicerest.service';

@Component({
  selector: 'app-testeoapi',
  templateUrl: './testeoapi.page.html',
  styleUrls: ['./testeoapi.page.scss'],
})
export class TesteoapiPage implements OnInit {

  user: any;
  users: any;
  posts: any;
  post: any = {
    id: null,
    title: "",
    body: "",
    userId: null 
  };

  constructor( private serviceAPI: ServicerestService) { }

  ngOnInit() {
    this.getStudentList();
    this.getPostList();

  }

  getPostList(){
    this.serviceAPI.getPostsList().subscribe((data) =>{
      this.posts=data;
      console.log(data);
    });
  }

  getStudentList(){
    this.serviceAPI.getStudentList().subscribe((data) =>{
      this.users=data;
      console.log(data);
    });
  }
}