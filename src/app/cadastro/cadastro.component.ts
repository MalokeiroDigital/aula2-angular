import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public nome:string = '';
  constructor(
    //injeção de dependências
    public http:HttpClient //argumentos, parametros
  ) {}

  ngOnInit(): void {
  }

  salvar(){
    this.http.get('http://localhost:8080/' + this.nome).subscribe();
  }

}
