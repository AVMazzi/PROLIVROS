import { Livro } from "./Livro";

export interface Autor {
  codAu: number;
  nome:string;
  livros:Livro[];
}
