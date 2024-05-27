import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  autores : any;
  apiUrl : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.apiUrl = 'https://localhost:7254/';
    this.getAutores();
  }

  public getAutores() : void{

    this.http.get(this.apiUrl +'api/autor').subscribe(
      response => this.autores = response,
      error => console.log(error)
    );

  }

}
