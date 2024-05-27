
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livro.service';
import { Livro } from '../models/Livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  public livros : Livro[] = [];
  public livrosFiltrados : Livro[] = [];

  apiUrl : any;
  widthImg : number = 150;
  marginImg : number = 2  ;
  showImg : boolean = true;


  private _filterLivros : string = '';

  filtrarLivro(filtrarPor: string): Livro[] {
    return this.livros.filter(
      // (      livro: { titulo: string;}) => livro.titulo.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      ((livro: { titulo: string; editora: string;}) => livro.titulo.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
         livro.editora.toLocaleLowerCase().indexOf(filtrarPor) !== -1)
    )
  }


  public get filterLivros() : string{
    return this._filterLivros;
  }

  public set filterLivros(value: string){
    this._filterLivros = value;
    this.livrosFiltrados = this.filterLivros ? this.filtrarLivro(this.filterLivros) : this.livros;
  }



    constructor(private livroService:LivroService) { }

    public ngOnInit() {
      this.getLivros();
  }

 public showImage(){
    this.showImg = !this.showImg;
 }

  public getLivros() : void{
    this.livroService.getLivros().subscribe(
      (_livros: Livro[]) => {
        console.log("_livros - ", _livros);
        this.livros =_livros;
        this.livrosFiltrados = this.livros;
      },
      error => console.log("Error - ", error)
    );
    console.log(this._filterLivros);
  }
}
