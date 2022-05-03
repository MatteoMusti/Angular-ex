import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beers!: Beer[];
  selectedBeers: Beer[] = [];

  name: string = '';
  type: string = '';

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(
      data => this.beers = data
    )
  }

  checkType(): void {
    const beerId = this.beers.find(beer => beer.name === this.name)?.id;

    this.beerService.getBeerById(beerId!).subscribe((data) => {
      this.type = data.type
    })
  }

  getBeer(): void {
    const beerId = this.beers.find(beer => beer.name === this.name)?.id;

    this.beerService.getBeerById(beerId!).subscribe((data) => {
      if (this.selectedBeers.includes(data)) {
        return this.selectedBeers
      }
      this.selectedBeers.push(data);
      return this.selectedBeers
    })
  }

}
