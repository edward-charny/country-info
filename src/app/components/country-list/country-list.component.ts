import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[];
  private countrySubscription;

  constructor(private countryService: CountryService) {
    this.countries = new Array<Country>();
    this.countrySubscription = new Subscription();
  }

  ngOnInit(): void {
    this.countrySubscription = this.countryService.filteredCountries$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.countries = results;
      }
    }, error => {
      console.log('error retrieving countries');
    });
    this.countryService.getCountryList();
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }
}
