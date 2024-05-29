import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro';

@Injectable(
  //{ providedIn: 'root'}
)
export class LivroService {
ApiUrl = 'https://localhost:7177/api/Livro';
constructor(private http: HttpClient) { }

public getLivros():Observable<Livro[]>{
  return this.http.get<Livro[]>(this.ApiUrl);
}
public getLivrosByAssunto(assunto: string):Observable<Livro[]>{
  return this.http.get<Livro[]>(`${this.ApiUrl}/${assunto}/assunto`);
}
public getLivrosByTitulo(titulo: string):Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.ApiUrl}/${titulo}/titulo`);
}

public getLivroByID(id: number):Observable<Livro>{
    return this.http.get<Livro>(`${this.ApiUrl}/${id}`);
}
}
