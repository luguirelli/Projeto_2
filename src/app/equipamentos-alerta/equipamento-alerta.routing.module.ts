
import { EquipamentosAlertaComponent } from './equipamentos-alerta.component';
import { AuthGuard } from '../guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

 
const equipamentosAlertaRoutes: Routes = [
    { path: 'equipamentos/alerta', component: EquipamentosAlertaComponent,
    canActivate: [AuthGuard],
     }
 ];

@NgModule({
    imports: [RouterModule.forChild(equipamentosAlertaRoutes)],
    exports: [RouterModule]
})
export class EquipamentsRoutingModule {
    
}