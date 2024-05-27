import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { AutorComponent } from './autor/autor.component';

import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LivroService } from './services/livro.service';


@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    AssuntoComponent,
    AutorComponent,
    NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule
  ],

  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
