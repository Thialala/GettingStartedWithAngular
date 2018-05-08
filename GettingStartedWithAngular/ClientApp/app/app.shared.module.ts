import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { ProductListComponent } from './components/products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/ConvertToSpacesPipe";
import { StarComponent } from "./shared/star.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/products/product-detail.component";


@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        HomeComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', component: ProductDetailComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: '**', component: HomeComponent, pathMatch: 'full' }
        ])
    ]
})
export class AppModuleShared {
}
