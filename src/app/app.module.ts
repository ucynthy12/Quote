import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DaysCountPipe } from './days-count.pipe';
import { VoteCountComponent } from './vote-count/vote-count.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDisplayComponent,
    QuoteFormComponent,
    DaysCountPipe,
    VoteCountComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
