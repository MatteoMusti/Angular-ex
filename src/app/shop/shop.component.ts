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

  checkType(): void {
    const type = (document.getElementById('typeList') as HTMLSelectElement).value;
    const name = (document.getElementById('beersList') as HTMLSelectElement).value;
    const beerId = this.beers.find(beer => beer.name === name)?.id;

    this.beerService.getBeerById(beerId!).subscribe((data) => {
      if (data.type === type){
        this.selectedBeer = data
      }
    })
  }

  getBeer(): void {
    const name = (document.getElementById('beersList') as HTMLSelectElement).value;
    const type = (document.getElementById('typeList') as HTMLSelectElement).value;
    const beerId = this.beers.find(beer => beer.name === name)?.id;

    this.beerService.getBeerById(beerId!).subscribe((data) => {
      if (this.selectedBeers.includes(data)) {
          return this.selectedBeers
      }
      if (data.type === type) {     
        this.selectedBeers.push(data);
      }
      return this.selectedBeers
    })
  }

}
