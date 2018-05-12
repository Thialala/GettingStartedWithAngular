import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductModule } from "./products/product.module";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: '**', component: HomeComponent, pathMatch: 'full' }
        ])
    ],
})
export class AppModuleShared {
}
