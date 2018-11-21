
import { PreventivasComponent } from './preventivas.component';
import { AuthGuard } from '../guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

 
const preventivasRoutes: Routes = [
    { path: 'preventivas', component: PreventivasComponent,
    canActivate: [AuthGuard],
     }
 ];

@NgModule({
    imports: [RouterModule.forChild(preventivasRoutes)],
    exports: [RouterModule]
})
export class ProfissionaisRoutingModule {
    
}