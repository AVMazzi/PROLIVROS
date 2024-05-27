import { Assunto } from "./Assunto";
import { Autor } from "./Autor";

export interface Livro {
  codl:number;
  titulo:string;
  editora:string;
  edicao:number;
  anoPublicacao:string;
  capa:string;
  assuntos:Assunto[];
  autores:Autor[];
}
