import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SinistroComponent } from './seguradora/sinistro/sinistro.component';
import { SiteComponent } from './site/site.component';
import { LayoutComponent } from './layout/layout.component';
import { VeiculoComponent } from './seguradora/veiculo/veiculo.component';
import { MultaComponent } from './seguradora/multa/multa.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    SinistroComponent,
    LayoutComponent,
    VeiculoComponent,
    MultaComponent    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
