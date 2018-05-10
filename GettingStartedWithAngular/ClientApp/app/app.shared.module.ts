import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/ConvertToSpacesPipe";
import { StarComponent } from "./shared/star.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductGuardService } from './products/product-guardservice';


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
            { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: '**', component: HomeComponent, pathMatch: 'full' }
        ])
    ],
    providers: [ProductGuardService]
})
export class AppModuleShared {
}
