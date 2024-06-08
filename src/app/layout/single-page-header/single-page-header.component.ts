import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-page-header',
  standalone: true,
  imports: [],
  templateUrl: './single-page-header.component.html',
  styleUrl: './single-page-header.component.css'
})
export class SinglePageHeaderComponent {
  @Input() title: string = "";
  @Input() breadcrumbs: { label: string, url?: string}[] = [];

}
