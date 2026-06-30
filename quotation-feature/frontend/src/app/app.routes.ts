import { Routes } from '@angular/router';

// Custom Classes imports
import { QuoteForm } from './quote-form/quote-form';
import { QuotationPreview } from './quotation-preview/quotation-preview';

export const routes: Routes = [
    { path: '', component: QuoteForm, title: 'Request Quotation - Rainbow Lifts'},
    { path: 'RequestQuotation', component: QuoteForm, title: 'Request Quotation - Rainbow Lifts' },
    { path: 'QuotationPreview', component: QuotationPreview, title: 'Quotation Preview - Rainbow Lifts'}
];
