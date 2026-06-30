import { Component, Input } from '@angular/core';

// Custom Classes imports
// import { PageHeader } from '../quote-page-header/page-header';
// import { PageFooter } from '../quote-page-footer/page-footer';

@Component({
  selector: 'cover-page',
  imports: [],
  templateUrl: './cover-page.html',
  styleUrl: './cover-page.scss'
})
export class CoverPage {
  @Input() customerDetails: any;

}
