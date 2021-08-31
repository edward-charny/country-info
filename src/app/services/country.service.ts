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
  private dataStore: {
    countries: Country[];
    regions: string[];
  }

  constructor(private http: HttpClient) { 
    this.dataStore = { 
      countries: new Array<Country>(),
      regions: new Array<string>()
    };
    this._countries = new BehaviorSubject(new Array<Country>());
    this.countries$ = this._countries.asObservable();
    this._regions = new BehaviorSubject(new Array<string>());
    this.regions$ = this._regions.asObservable();
    this.filteredOptions$ = new Observable<Country[]>();
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

  private getCountries(url:string) {
    this.http.get(url, {responseType: 'json'}).subscribe((response: any) => {
      if(response !== undefined && response !== null) {
        let countries: Country[] = new Array<Country>();
        countries = response;
        this.dataStore.countries = countries;
        this.processRegions();
        this._countries.next(Object.assign({}, this.dataStore).countries)
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
