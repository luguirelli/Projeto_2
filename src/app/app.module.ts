import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'materialize-css';
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EquipamentsComponent } from './equipaments/equipaments.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { EquipamentosAlertaComponent } from './equipamentos-alerta/equipamentos-alerta.component';
import { PreventivasComponent } from './preventivas/preventivas.component';
import { HistoricoComponent } from './historico/historico.component';
import { EquipamentService } from './equipaments/equipament.service';
import { ProfissionaisService } from './profissionais/profissionais.service';
import { PreventivasService } from './preventivas/preventivas.service';
import { EquipamentoAlertaService } from './equipamentos-alerta/equipamento-alerta.service';
import { HistoricoService } from './historico/historico.service';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EquipamentsComponent,
    ProfissionaisComponent,
    EquipamentosAlertaComponent,
    PreventivasComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [EquipamentService, ProfissionaisService, PreventivasService, EquipamentoAlertaService, HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }