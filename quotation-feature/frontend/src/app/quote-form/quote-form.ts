import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Third Party Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

//Service
import { QuotationStore } from '../services/quotation-service';

@Component({
	selector: 'quote-form',
	imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, CommonModule ],
	templateUrl: './quote-form.html',
	styleUrl: './quote-form.scss',
	providers: [provideNativeDateAdapter()]
})

export class QuoteForm {
	private fb = inject(FormBuilder);
	private route = inject(Router);
	private quoteService = inject(QuotationStore);

	quoteDetailsForm: FormGroup = this.fb.group({
		customerName: ['N Vijaya Kumar', {
			validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
			updateOn: 'blur'
		}],
		mobileNumber: ['9876504321', {
			validators: [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)],
			updateOn: 'blur'
		}],
		customerAddress: ['Ibrahimpatnam.'],
		siteAddress: ['Ibrahimpatnam.', Validators.required],
		quoteDate: ['', Validators.required],
		siteVisitDate: ['', Validators.required],
		elevatorType: ['MRL Passenger Lift', Validators.required],
		passengerCapacity: ['6', Validators.required],
		capacityWeight: [''],
		driveType: ['Traction', Validators.required],
		travelSpeed: ['1', Validators.required],
		totalFloors: ['G + 3', Validators.required],
		floorStops: ['4', Validators.required],
		floorOpenings: ['4', Validators.required],
		controllerSystem: ['Microprocessor Based Control', Validators.required],
		operationLogic: ['Down Collective System', Validators.required],
		signalType: ['Up & Down Arrows and Floor Position', Validators.required],
		carIndicators: ['Indicators at All Landing and Inside the car', Validators.required],
		machineWidthDimensions: ['200', Validators.required],
		machineDepthDimensions: ['200', Validators.required],
		shaftWidthDimensions: ['200', Validators.required],
		shaftDepthDimensions: ['200', Validators.required],
		cabinType: ['M S Structure', Validators.required],
		cabinWidthDimensions: ['200', Validators.required],
		cabinDepthDimensions: ['200', Validators.required],
		cabinConstruction: ['SS Cabin 304 Matt Finish 1.2mm Thickness , Celling with Blower & LED Lit, Matt Floor', Validators.required],
		cabinDoorHeader: ['SS Automatic Big Vision Glass Door', Validators.required],
		landingDoorHeader: ['SS Automatic Big Vision Glass Door', Validators.required],
		clearDoorOpening: ['600 mm Door CO/TO Opening', Validators.required],
		powerSupply: ['415V; 3 Phase 50HZ 220V; 1 Phase', Validators.required],
		coplop: ['7 Segment Indicator', Validators.required],
		civilWorks: ['Additional extra Indicated', Validators.required],
		warranty: ['1', Validators.required]
	})

	get calculateWeight(): number {
		let capacityValue = (this.quoteDetailsForm.get('passengerCapacity')?.value || 0) * 68;
		this.quoteDetailsForm.get('capacityWeight')?.setValue(capacityValue);
		return capacityValue;
	}

	dateFormatter(date: string) {
		let getDate = new Date(date);
		const formattedDate = Intl.DateTimeFormat('en-GB', {
			day: 'numeric', month: 'long', year: 'numeric'
		})
		return formattedDate.format(getDate);
	}

	getQuoteDetails() {
		let details = JSON.parse(JSON.stringify(this.quoteDetailsForm.value));
		details.quoteDate = this.dateFormatter(details.quoteDate);
		details.siteVisitDate = this.dateFormatter(details.siteVisitDate);
		
		console.log(details);

		let quoteFormData = {
			customerDetails: {
				name: details.customerName,
				customerAddress: details.customerAddress,
				quoteDate: details.quoteDate,
				siteAddress: details.siteAddress,
				siteVisitDate: details.siteVisitDate,
				passengers: details.passengerCapacity
			},
			specifications: [
				{ label: 'Customer Name', value: details.customerName, order: 1 },
				{ label: 'Type Of Lift', value: details.elevatorType, order: 2 },
				{ label: 'Capacity-Nos /Kgs', value: details.passengerCapacity + " Passenger (" + details.capacityWeight + ") Kgs", order: 3 },
				{ label: 'Drive', value: details.driveType, order: 4 },
				{ label: 'Speed', value: details.travelSpeed + ' Mtr / Sec', order: 5 },
				{ label: 'Controller', value: details.controllerSystem, order: 6 },
				{ label: 'Operation', value: details.operationLogic, order: 7 },
				{ label: 'Signals', value: details.signalType + ", " + details.carIndicators, order: 8 },
				{ label: 'Travel/Floors', value: details.totalFloors + " Upper Floors", order: 9 },
				{ label: 'Landings And Openings', value: details.floorStops + " Stops and " + details.floorOpenings + " Openings", order: 10 },
				{ label: 'Machine', value: "Will be Placed in machine room. Closed enclosure of " + details.machineWidthDimensions + " X " + details.machineDepthDimensions + " feet required for the Same", order: 11 },
				{ label: 'Lift Shaft/Well Size', value: details.shaftWidthDimensions +" mm Width X " + details.shaftDepthDimensions + " mm Depth", order: 12 },
				{ label: 'Car', value: details.cabinType, order: 13 },
				{ label: 'Cabin Construction', value: details.cabinConstruction, order: 14 },
				{ label: 'Car Inside Clear', value: details.cabinWidthDimensions + " mm Width " + details.cabinDepthDimensions + " mm Depth As Per Standards", order: 15 },
				{ label: 'Car Door header', value: details.cabinDoorHeader, order: 16 },
				{ label: 'Landing Door header', value: details.landingDoorHeader, order: 17 },
				{ label: 'Clear Opening', value: details.clearDoorOpening, order: 18 },
				{ label: 'Power Supply', value: details.powerSupply, order: 19 },
				{ label: 'COP/LOP', value: details.coplop, order: 20 },
				{ label: 'Steel /Civil works', value: details.civilWorks, order: 21 },
				{ label: 'Warranty', value: details.warranty + " Year", order: 22 }
			]
		};

		console.log(quoteFormData);

		this.quoteService.setQuoteDetails(quoteFormData).subscribe({
			next: (data) => {
				console.log(data);
				this.route.navigate(['/QuotationPreview']);
			},
			error: (err) => { console.log(err) },
			complete: () => { console.log("Complete") }
		})
	}
}