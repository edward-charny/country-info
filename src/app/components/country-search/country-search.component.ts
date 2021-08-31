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
  filteredOptions: Observable<Country[]>;
  private countrySubscription;

  constructor(private countryService: CountryService) {
    this.searchControl = new FormControl();
    this.countries = new Array<Country>();
    this.filteredOptions = new Observable<Country[]>();
    this.countrySubscription = new Subscription();
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
    this.countryService.filteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filteredOptions = this.countryService.filteredOptions$;
  }

  private _filter(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }
}
