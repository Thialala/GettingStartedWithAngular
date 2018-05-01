import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ProductListComponent } from './components/products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/ConvertToSpacesPipe"

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ]
})
export class AppModuleShared {
}
