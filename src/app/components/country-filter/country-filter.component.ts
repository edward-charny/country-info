import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {
  filteredCountries: Country[];
  regions: string[];
  private filteredCountrySubscription;
  private regionSubscription;
  selectedRegion: string;


  constructor(private countryService: CountryService) {
    this.filteredCountries = new Array<Country>();
    this.filteredCountrySubscription = new Subscription();
    this.regions = new Array<string>();
    this.regionSubscription = new Subscription();
    this.selectedRegion = '';
  }

  ngOnInit(): void {
    this.filteredCountrySubscription = this.countryService.filteredCountries$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.filteredCountries = results;
      }
    }, error => {
      console.log('error retrieving countries');
    });
    this.regionSubscription = this.countryService.regions$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.regions = results.sort();
      }
    }, error => {
      console.log('error retrieving regions');
    });
  }

  handleSelectionChange(selectedRegion: string): void {
    this.countryService.restoreFilteredCountries();
    if(selectedRegion !== '') {
      let results = this.filteredCountries.filter(country => country.region.toLowerCase().includes(selectedRegion.toLowerCase()));
      this.countryService.updateFilteredCountries(results, true);
    }
  }

  ngOnDestroy(): void {
    if (this.filteredCountrySubscription) {
      this.filteredCountrySubscription.unsubscribe();
    }
    if (this.regionSubscription) {
      this.regionSubscription.unsubscribe();
    }
  }
}
