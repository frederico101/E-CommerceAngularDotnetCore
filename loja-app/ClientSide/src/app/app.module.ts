import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/view/header/header.component'; 
import { BodyComponent } from './components/view/body/body.component'; 
import { FooterComponent } from './components/view/footer/footer.component'; 
import { SideNavComponent } from './components/view/side-nav/side-nav.component'; 
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './components/model/produto/produto.component';
import { ProdutoDetalheComponent } from './components/model/produto-detalhe/produto-detalhe.component';
import { MenuComponent } from './components/view/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    BodyComponent,
    ProdutoComponent,
    ProdutoDetalheComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    
    RouterModule.forRoot([
     {
       path:"produtos", 
       component: ProdutoComponent
     },
     {
      path:"",
      component: BodyComponent
     },
     {
       path:"produto-detalhe",
       component: ProdutoDetalheComponent
      },
      {
        path:"menu",
        component: MenuComponent
       }
      
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
