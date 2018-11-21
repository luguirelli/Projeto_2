
import { ProfissionaisComponent } from './profissionais.component';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

 
const profissionaisRoutes: Routes = [
    { path: 'profissionais', component: ProfissionaisComponent,
    canActivate: [AuthGuard],
     }
 ];

@NgModule({
    imports: [RouterModule.forChild(profissionaisRoutes)],
    exports: [RouterModule]
})
export class ProfissionaisRoutingModule {
    
}