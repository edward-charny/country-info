import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private completeListUrl: string = 'https://restcountries.eu/rest/v2/all';
  private nameUrl: string = 'https://restcountries.eu/rest/v2/name/';
  private regionUrl: string = 'https://restcountries.eu/rest/v2/region/';

  countries$: Observable<Country[]>;
  private _countries: BehaviorSubject<Country[]>;
  regions$: Observable<string[]>;
  private _regions: BehaviorSubject<string[]>;
  filteredOptions$: Observable<Country[]>;
  private _filteredOptions: BehaviorSubject<Country[]>;
  private dataStore: {
    countries: Country[];
    filteredOptions: Country[];
    regions: string[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = {
      countries: new Array<Country>(),
      filteredOptions: new Array<Country>(),
      regions: new Array<string>()
    };
    this._countries = new BehaviorSubject(new Array<Country>());
    this.countries$ = this._countries.asObservable();
    this._filteredOptions = new BehaviorSubject(new Array<Country>());
    this.filteredOptions$ = this._filteredOptions.asObservable();
    this._regions = new BehaviorSubject(new Array<string>());
    this.regions$ = this._regions.asObservable();
  }

  getCountryList() {
    this.getCountries(this.completeListUrl);
  }

  getCountryByName(name: string) {
    this.getCountries(this.nameUrl + name);
  }

  getCountryByRegion(region: string) {
    this.getCountries(this.regionUrl + region);
  }

  updateFilteredOptions(countries: Country[]) {
    this.dataStore.filteredOptions = countries;
    this._filteredOptions.next(Object.assign({}, this.dataStore).filteredOptions);
  }

  private getCountries(url:string) {
    this.http.get(url, {responseType: 'json'}).subscribe((response: any) => {
      if(response !== undefined && response !== null) {
        let countries: Country[] = new Array<Country>();
        countries = response;
        this.dataStore.countries = countries;
        this.dataStore.filteredOptions = countries;
        this.processRegions();
        this._countries.next(Object.assign({}, this.dataStore).countries);
        this._filteredOptions.next(Object.assign({}, this.dataStore).filteredOptions);
      }
    }, error => {
      console.log('error retrieving countries');
      console.log(error);
    });
  }

  private processRegions() {
    let countries = this.dataStore.countries;

    for(let country of countries) {
      if(!this.dataStore.regions.includes(country.region)){
        this.dataStore.regions.push(country.region)
      }
    }

    this._regions.next(Object.assign({}, this.dataStore).regions)
  }
}
