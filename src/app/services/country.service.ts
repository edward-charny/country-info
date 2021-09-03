import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private completeListUrl: string = 'https://restcountries.eu/rest/v2/all';
  private codeUrl: string = 'https://restcountries.eu/rest/v2/alpha/';
  private regionUrl: string = 'https://restcountries.eu/rest/v2/region/';

  countries$: Observable<Country[]>;
  private _countries: BehaviorSubject<Country[]>;
  countryDetails$: Observable<Country>;
  private _countryDetails: BehaviorSubject<Country>;
  regions$: Observable<string[]>;
  private _regions: BehaviorSubject<string[]>;
  filteredCountries$: Observable<Country[]>;
  private _filteredCountries: BehaviorSubject<Country[]>;
  private dataStore: {
    countries: Country[];
    countryDetails: Country;
    filteredCountries: Country[];
    filteredCountriesBackup: Country[];
    regions: string[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = {
      countries: new Array<Country>(),
      countryDetails: new Country(),
      filteredCountries: new Array<Country>(),
      filteredCountriesBackup: new Array<Country>(),
      regions: new Array<string>()
    };
    this._countries = new BehaviorSubject(new Array<Country>());
    this.countries$ = this._countries.asObservable();
    this._countryDetails = new BehaviorSubject(new Country());
    this.countryDetails$ = this._countryDetails.asObservable();
    this._filteredCountries = new BehaviorSubject(new Array<Country>());
    this.filteredCountries$ = this._filteredCountries.asObservable();
    this._regions = new BehaviorSubject(new Array<string>());
    this.regions$ = this._regions.asObservable();
  }

  getCountryList(): void {
    this.getCountries(this.completeListUrl);
  }

  getCountryByCode(code: string): void {
    this.http.get(this.codeUrl + code, {responseType: 'json'}).subscribe((response: any) => {
      if(response !== undefined && response !== null) {
        let country: Country = new Country();
        country = response;
        this.dataStore.countryDetails = country;
        this._countryDetails.next(Object.assign({}, this.dataStore).countryDetails);
      }
    }, error => {
      console.log('error retrieving countries');
      console.log(error);
    });
  }

  getCountryByRegion(region: string): void {
    this.getCountries(this.regionUrl + region);
  }

  restoreFilteredCountries(): void {
    if(this.dataStore.filteredCountriesBackup.length > 0) {
      this.dataStore.filteredCountries = this.dataStore.filteredCountriesBackup;
      this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
      this.dataStore.filteredCountriesBackup = new Array<Country>();
    }
  }

  updateFilteredCountries(countries: Country[], filterMode: boolean): void {
    if(filterMode && this.dataStore.filteredCountriesBackup.length == 0) {
      if(this.dataStore.filteredCountries.length == 0) {
        this.dataStore.filteredCountriesBackup = countries;
      } else {
        this.dataStore.filteredCountriesBackup = this.dataStore.filteredCountries;
      }
    }
    this.dataStore.filteredCountries = countries;
    if(!filterMode) {
      this.processRegions();
    }
    this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
    
  }

  private getCountries(url:string): void {
    this.http.get(url, {responseType: 'json'}).subscribe((response: any) => {
      if(response !== undefined && response !== null) {
        let countries: Country[] = new Array<Country>();
        countries = response;
        this.dataStore.countries = countries;
        this.dataStore.filteredCountries = countries;
        this.processRegions();
        this._countries.next(Object.assign({}, this.dataStore).countries);
        this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
      }
    }, error => {
      console.log('error retrieving countries');
      console.log(error);
    });
  }

  private processRegions(): void {
    let countries = this.dataStore.filteredCountries;
    this.dataStore.regions = new Array<string>();
    this.dataStore.regions.push('');

    for(let country of countries) {
      if(!this.dataStore.regions.includes(country.region)){
        this.dataStore.regions.push(country.region)
      }
    }

    this._regions.next(Object.assign({}, this.dataStore).regions)
  }
}
