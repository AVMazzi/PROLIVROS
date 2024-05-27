import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assunto',
  templateUrl: './assunto.component.html',
  styleUrls: ['./assunto.component.scss']
})
export class AssuntoComponent implements OnInit {

  assuntos : any;
  apiUrl : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.apiUrl = 'https://localhost:7254/';
    this.getAssuntos();
  }

  public getAssuntos() : void{

    this.http.get(this.apiUrl + 'api/assunto').subscribe(
      response => this.assuntos = response,
      error => console.log(error)
    );

  }

}
