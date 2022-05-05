import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { CountryRoute } from '../model/CountryRoute';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private covid: CovidService) { }

  routeProps: { name: string; endpoint: string }[] = [];

  ngOnInit(): void {

    this.covid.getAll().subscribe((data) => {
      this.routeProps = Object.entries(data).map((result) => {
        return {
          name: result[0],
          endpoint: result[1].Path,
        };
      });
    })
    
  }

}