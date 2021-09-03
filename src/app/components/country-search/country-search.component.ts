import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  searchControl;
  countries: Country[];
  private countrySubscription;
  filteredCountries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {
    this.countries = new Array<Country>();
    this.countrySubscription = new Subscription();
    this.filteredCountries$ = new Observable<Country[]>();
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.countrySubscription = this.countryService.countries$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.countries = results;
      }
    }, error => {
      console.log('error retrieving countries');
    });
    this.countryService.getCountryList();
    this.filteredCountries$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Country[] {
    const filterValue = value.toLowerCase();

    let results = this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    this.countryService.updateFilteredCountries(results, false);
    return results;
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }
}
