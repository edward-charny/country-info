import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  borderCountries: Country[];
  currencies: string;
  countryDetails: Country;
  countries: Country[];
  private countryDetailsSubscription;
  private countrySubscription;
  id: any;
  languages: string;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {
    this.borderCountries = new Array<Country>();
    this.currencies = '';
    this.countries = new Array<Country>();
    this.countryDetails = new Country();
    this.countrySubscription = new Subscription();
    this.countryDetailsSubscription = new Subscription();
    this.id = '';
    this.languages = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['code'];
    });
    this.countryDetailsSubscription = this.countryService.countryDetails$.subscribe(results => {
      if (results !== undefined && results !== null) {
        this.countryDetails = results;
        this.currencies = this.processCurrencies();
        this.languages = this.processLanguages();
        this.countrySubscription = this.countryService.countries$.subscribe(results => {
          if (results !== undefined && results !== null) {
            this.countries = results;
            this.borderCountries = this.countries.filter(country => this.countryDetails.borders.includes(country.alpha3Code));
          }
        }, error => {
          console.log('error retrieving countries');
        });
      }
    }, error => {
      console.log('error retrieving countries');
    });
    
    this.countryService.getCountryByCode(this.id);
  }

  handleBack(): void {
    this.router.navigate(['/']);
  }

  handleClick(code: string): void {
    this.countryService.getCountryByCode(code);
  }

  processCurrencies(): string {
    let currencies = this.countryDetails.currencies;
    let currencyString = '';

    for(let i = 0; i < currencies.length; i++) {
      currencyString += currencies[i].name;
      if(i < currencies.length - 1)
        currencyString += ', ';
    }
    return currencyString;
  }

  processLanguages(): string {
    let languages = this.countryDetails.languages;
    let languagesString = '';
    
    for(let i = 0; i < languages.length; i++) {
      languagesString += languages[i].name;
      if(i < languages.length - 1)
        languagesString += ', ';
    }
    return languagesString;
  }

  ngOnDestroy(): void {
    if (this.countryDetailsSubscription) {
      this.countryDetailsSubscription.unsubscribe();
    }
  }
}
