import { Component } from '@angular/core';
import { SinglePageHeaderComponent } from "../../layout/single-page-header/single-page-header.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [SinglePageHeaderComponent]
})
export class ContactComponent {

}
