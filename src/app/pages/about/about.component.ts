import { Component } from '@angular/core';
import { SinglePageHeaderComponent } from "../../layout/single-page-header/single-page-header.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SinglePageHeaderComponent]
})
export class AboutComponent {

  contactBreadcrumbs = [
    // { label: 'Pages', url: '/pages' },
    { label: 'About' }
  ];

}
