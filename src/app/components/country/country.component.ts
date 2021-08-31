import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input('country') country: Country;

  constructor() {
    this.country = new Country();
  }

  ngOnInit(): void {
  }

}
