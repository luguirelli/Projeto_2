import { BrowserModule } from '@angular/platform-browser';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EquipamentoAlertaService } from './equipamento-alerta.service';
import { EquipamentosAlertaComponent } from './equipamentos-alerta.component';
import { EquipamentsRoutingModule } from './equipamento-alerta.routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        EquipamentsRoutingModule,
        Ng2SearchPipeModule,
        FormsModule,
        NgxPaginationModule,
        HttpModule
            ],
    exports: [],
    declarations: [
        EquipamentosAlertaComponent
    ],
    providers: [EquipamentoAlertaService],
})
export class EquipamentsModule {  }