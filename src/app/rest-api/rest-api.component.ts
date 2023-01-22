import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit{

public getJsonValue: any;

constructor(private http:HttpClient){

}

ngOnInit(): void {
  this.getMethod();
  
}

public getMethod(){
  this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe((data)=>{
    console.log(data);
    this.getJsonValue=data;
  });
}







  }
