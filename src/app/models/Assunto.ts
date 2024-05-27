import { Livro } from "./Livro";

export interface Assunto {
  codAs:number;
  descricao?:string;
  livros:Livro[];
}
