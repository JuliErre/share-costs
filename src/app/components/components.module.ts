import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular';
import { CostCalculatorComponent } from "./cost-calculator/cost-calculator.component";
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { UploadContactsComponent } from "./upload-contacts/upload-contacts.component";

@NgModule({
    declarations: [
        CostCalculatorComponent,
        UploadContactsComponent,
        UploadProductsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        CostCalculatorComponent,
        UploadContactsComponent,
        UploadProductsComponent
    ]
})
export class ComponentsModule { }