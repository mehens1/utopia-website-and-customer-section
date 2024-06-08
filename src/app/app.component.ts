import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { SearchModalComponent } from "./layout/search-modal/search-modal.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { CopyrightComponent } from "./layout/copyright/copyright.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SearchModalComponent, FooterComponent, CopyrightComponent]
})
export class AppComponent {
  title = 'utopia-website-and-customer-section';
}
