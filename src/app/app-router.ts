import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NossaHistoriaComponent } from './components/nossa-historia/nossa-historia.component';

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'Historia', component: NossaHistoriaComponent}
]