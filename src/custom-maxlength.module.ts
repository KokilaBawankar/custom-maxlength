import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {CustomMaxlengthDirective} from "./directives/custom-maxlength/custom-maxlength";

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        CustomMaxlengthDirective
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        CustomMaxlengthDirective
    ]
})
export class CustomMaxlengthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CustomMaxlengthModule
        };
    }
}