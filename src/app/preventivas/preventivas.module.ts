import { BrowserModule } from '@angular/platform-browser';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreventivasService } from './preventivas.service';
import { PreventivasComponent } from './preventivas.component';
import { ProfissionaisRoutingModule } from './preventivas.routing.module';
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
        PreventivasComponent
    ],
    providers: [PreventivasService],
})
export class PreventivasModule {  }