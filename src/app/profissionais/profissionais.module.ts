import { BrowserModule } from '@angular/platform-browser';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfissionaisService } from './profissionais.service';
import { ProfissionaisComponent } from './profissionais.component';
import { ProfissionaisRoutingModule } from './profissionais.routing.module';
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
        ProfissionaisComponent
    ],
    providers: [ProfissionaisService],
})
export class ProfissionaisModule {  }