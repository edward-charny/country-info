import { Currency } from './currency';
import { Language } from './language';

export class Country {
    borders: string[];
    capital: string;
    currencies: Currency[];
    domain: string;
    flag: string;
    languages: Language[];
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;

    constructor() {
        this.borders = new Array<string>();
        this.capital = '';
        this.currencies = new Array<Currency>();
        this.domain = '';
        this.flag = '';
        this.languages = new Array<Language>();
        this.name = '';
        this.nativeName = '';
        this.population = 0;
        this.region = '';
        this.subRegion = '';
    }
}
