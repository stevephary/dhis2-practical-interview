import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  title = 'weather-app';

  selectedCountry: string = '';
  selectedCity: string = '';

  constructor(private router: Router) { }

  checkWeather() {
    // Navigate to the selected city's weather page
    this.router.navigate([this.selectedCity]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
