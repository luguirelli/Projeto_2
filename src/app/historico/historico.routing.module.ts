
import { HistoricoComponent } from './historico.component';
import { AuthGuard } from '../guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

 
const historicoRoutes: Routes = [
    { path: 'preventivas', component: HistoricoComponent,
    canActivate: [AuthGuard],
     }
 ];

@NgModule({
    imports: [RouterModule.forChild(historicoRoutes)],
    exports: [RouterModule]
})
export class ProfissionaisRoutingModule {
    
}