import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beers!: Beer[];
  selectedBeer!: Beer;
  selectedBeers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(
      data => this.beers = data
    )
  }

  getBeer() {
    const selectedValue = (document.getElementById('beersList') as HTMLSelectElement).value;
    const beerId = this.beers.find(beer => beer.name === selectedValue)?.id;

    this.beerService.getBeerById(beerId!).subscribe(data => this.selectedBeer = data);

    if (this.selectedBeers.includes(this.selectedBeer)) {
      return this.selectedBeers
    } this.selectedBeers.push(this.selectedBeer);

    return this.selectedBeers
  }

}
