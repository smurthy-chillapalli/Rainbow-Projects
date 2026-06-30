import { Component, Input } from '@angular/core';

@Component({
  selector: 'annexure-one',
  imports: [],
  templateUrl: './annexure-one.html',
  styleUrl: './annexure-one.scss'
})
export class AnnexureOne {
  @Input() specificationDetails: any;
}
