import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input('country') country: Country;

  constructor(private router: Router) {
    this.country = new Country();
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.router.navigate(['details', this.country.alpha3Code.toLocaleLowerCase()]);
  }
}
