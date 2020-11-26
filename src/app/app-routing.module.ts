import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site/site.component';
import { SinistroComponent } from './seguradora/sinistro/sinistro.component';
import { VeiculoComponent } from './seguradora/veiculo/veiculo.component';
import { MultaComponent } from './seguradora/multa/multa.component';

const routes: Routes = [
    { path: '', redirectTo: '/site', pathMatch: 'full' },
    { path: 'site', component: SiteComponent },
    { path: 'sinistro', component: SinistroComponent },
    { path: 'veiculo', component: VeiculoComponent },
    { path: 'multa', component: MultaComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }