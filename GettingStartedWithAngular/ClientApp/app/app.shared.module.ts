import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { ProductModule } from "./products/product.module";
import { AppRoutingModule } from "./app-routing.module";

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
        AppRoutingModule
    ],
})
export class AppModuleShared {
}
