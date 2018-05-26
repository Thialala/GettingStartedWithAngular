import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";
import { StarComponent } from "./star.component";


@NgModule({
    declarations: [
        ConvertToSpacesPipe,
        StarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        ConvertToSpacesPipe]
})
export class SharedModule {
}
