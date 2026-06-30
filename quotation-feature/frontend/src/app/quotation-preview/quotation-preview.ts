import { Component, inject } from '@angular/core';

// Custom Classes imports
import { PageHeader } from '../quote-page-header/page-header';
import { PageFooter } from '../quote-page-footer/page-footer';
import { CoverPage } from '../quote-page-cover/cover-page';
import { AnnexureOne } from '../quote-page-annexure-one/annexure-one';
import { AnnexureTwo } from '../quote-page-annexure-two/annexure-two';
import { AnnexureThree } from '../quote-page-annexure-three/annexure-three';
import { AnnexuerThreeSecondPart } from '../quote-page-annexure-three/annexure-three-page-part/annexure-three-page-part';
import { AnnexureFour } from '../quote-page-annexure-four/annexure-four';
import { AnnexureFourPartOne } from '../quote-page-annexure-four/annexure-four-page-part-one/annexure-four-page-part-one';
import { AnnexureFourPartTwo } from '../quote-page-annexure-four/annexure-four-page-part-two/annexure-four-page-part-two';
import { AnnexureFive } from '../quote-page-annexure-five/annexure-five';
import { AnnexureFivePartOne } from '../quote-page-annexure-five/annexure-five-page-part-one/annexure-five-page-part-one';
import { AnnexureFivePartTwo } from '../quote-page-annexure-five/annexure-five-page-part-two/annexure-five-page-part-two';

//Service
import { QuotationStore } from '../services/quotation-service';

@Component({
	selector: 'quotation-preview',
	imports: [
		CoverPage,
		AnnexureOne, AnnexureTwo, AnnexureThree, AnnexuerThreeSecondPart, 
		AnnexureFour, AnnexureFourPartOne, AnnexureFourPartTwo,
		AnnexureFive, AnnexureFivePartOne, AnnexureFivePartTwo, 
		PageHeader, PageFooter],
	templateUrl: './quotation-preview.html',
	styleUrl: './quotation-preview.scss'
})
export class QuotationPreview {
	private quotationStore: any = inject(QuotationStore);
	quotationDetails: any;

	ngOnInit() {
		this.getDetails();
	}

	getDetails() {
		this.quotationStore.getQuoteDetails().subscribe({
			next: (data: any) => {
				console.log(data);
				this.quotationDetails = data;
			},
			error: (err: any) => { console.log(err) },
			complete: () => { console.log("done") }
		});
	}

	generatePDF() {
		window.print();
	}
}