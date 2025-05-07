// diccionario de datos 002

import { Routes } from '@angular/router';
import { AdvanceRequestTableComponent } from './components/advance-request-table/advance-request-table.component';
import { ComercialManagementLayoutComponent } from './pages/comercial-management-layout/comercial-management-layout.component';

export const routes: Routes = [
    { path:'gestion-comercial', 
        component:ComercialManagementLayoutComponent,
        children: [
            {path:'anticipos', component:AdvanceRequestTableComponent},
        ]
    },
    {path: '', redirectTo:'/gestion-comercial', pathMatch:'full'} //full la ruta tiene que ser igual
];
