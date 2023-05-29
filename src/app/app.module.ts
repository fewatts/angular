import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { primeiroComponente } from './primeiro-components/primeiro-componente.components';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './pipe-customizado/multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    primeiroComponente,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    RenderizandoListasComponent,
    TwoWayComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploServicos1Component,
    ExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
