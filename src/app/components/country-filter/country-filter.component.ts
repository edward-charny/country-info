import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {
  regions: string[];
  private regionSubscription;

  constructor(private countryService: CountryService) {
    this.regions = new Array<string>();
    this.regionSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.regionSubscription = this.countryService.regions$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.regions = results.sort();
      }
    }, error => {
      console.log('error retrieving regions');
    });
  }

  ngOnDestroy(): void {
    if (this.regionSubscription) {
      this.regionSubscription.unsubscribe();
    }
  }
}
