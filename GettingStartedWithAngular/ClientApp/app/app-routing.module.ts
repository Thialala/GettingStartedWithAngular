import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: '**', component: HomeComponent, pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
