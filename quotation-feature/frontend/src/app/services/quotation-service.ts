import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class QuotationStore {
    private quoteData: any = new BehaviorSubject<any>({});
    quoteDetails$: any = this.quoteData.asObservable();

    setQuoteDetails(data: any): Observable<any> {
        console.log(data);
        this.quoteData.next(data);
        return of("Success");
    }

    getQuoteDetails(): Observable<any> {
        return this.quoteDetails$;
    }
}