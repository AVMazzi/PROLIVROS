
import { Component, OnInit, TemplateRef } from '@angular/core';

import { LivroService } from '../services/livro.service';
import { Livro } from '../models/Livro';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  public livros : Livro[] = [];
  public livrosFiltrados : Livro[] = [];

  apiUrl : any;
  widthImg : number = 125;
  marginImg : number = 2  ;
  showImg : boolean = true;
  modalRef?: BsModalRef;


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



    constructor(private livroService:LivroService,
      private modalService: BsModalService,
      private toastr: ToastrService,
      private spinner: NgxSpinnerService
    ) { }

    public ngOnInit() {
    this.spinner.show();
    setTimeout(() => 5000);


    this.getLivros();
  }

 public showImage(){
    this.showImg = !this.showImg;
 }

  public getLivros() : void{
    this.livroService.getLivros().subscribe({
      next:(_livros: Livro[]) => {
        this.spinner.show();
        console.log("_livros - ", _livros);
        this.livros =_livros;
        this.livrosFiltrados = this.livros;
      },
      error: (error:any) => {
        this.spinner.hide(),
        this.toastr.error('Erro ao carregar', 'Erro!')
      },
      complete: () => this.spinner.hide()
  });
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Excluído com sucesso!','Exclusão' );
  }

  decline(): void {
    this.modalRef?.hide();
    //this.toastr.console.error('Exclusão cancelada!','Exclusão');
  }


}
