import { Currency } from './currency';
import { Language } from './language';

export class Country {
    alpha3Code: string;
    borders: string[];
    capital: string;
    currencies: Currency[];
    flag: string;
    languages: Language[];
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];

    constructor() {
        this.alpha3Code = '';
        this.borders = new Array<string>();
        this.capital = '';
        this.currencies = new Array<Currency>();
        this.flag = '';
        this.languages = new Array<Language>();
        this.name = '';
        this.nativeName = '';
        this.population = 0;
        this.region = '';
        this.subregion = '';
        this.topLevelDomain = new Array<string>();
    }
}
