import { JobHistoryComponent } from './components/job-history/job-history.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    {
        path: 'jobhistory',
        component: JobHistoryComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'jobhistory',
        pathMatch: 'full'
    }
];

export const Routing = RouterModule.forRoot(appRoutes);