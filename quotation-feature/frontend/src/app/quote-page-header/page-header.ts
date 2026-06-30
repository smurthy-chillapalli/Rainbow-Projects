import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.html',
    styleUrl: './page-header.scss'
})

export class PageHeader {
    @Input() quoteDate: string = "";
}