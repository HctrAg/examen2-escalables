import { Routes } from '@angular/router';
import { GeneralViewComponent } from './components/general-view/general-view.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'general', pathMatch: 'full' }, // Redirigir a 'general' por defecto
    { path: 'general', component: GeneralViewComponent }, // Ruta para la vista general
    { path: 'list', component: ListComponent }, // Ruta para la lista de productos
    { path: 'product/:id', component: DetailsComponent }
];
