import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'

import * as Components from '../components/index';


const rootRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'list', component: Components.SolutionListComponent },
    { path: 'configure', component: Components.SolutionConfigComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(rootRoutes);
