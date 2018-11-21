import { BrowserModule } from '@angular/platform-browser';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HistoricoService } from './historico.service';
import { HistoricoComponent } from './historico.component';
import { ProfissionaisRoutingModule } from './historico.routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ProfissionaisRoutingModule,
        Ng2SearchPipeModule,
        FormsModule,
        NgxPaginationModule,
        HttpModule
            ],
    exports: [],
    declarations: [
        HistoricoComponent
    ],
    providers: [HistoricoService],
})
export class PreventivasModule {  }