import { Component } from '@angular/core';
import { SinglePageHeaderComponent } from "../../layout/single-page-header/single-page-header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
    imports: [RouterModule, SinglePageHeaderComponent]
})
export class NotFoundComponent {

}
