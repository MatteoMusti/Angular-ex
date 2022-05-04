import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Country } from '../model/Country';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private covid: CovidService) { }

  object = {};
  properties!: string[];
  map = {};

  ngOnInit(): void {
    this.covid.getAll()
      .subscribe((data) => {
        this.object = { ...data };
        this.properties = Object.keys(this.object);

        let entries = Object.entries(this.object)
        this.map = entries.map(result => {
          return { name: result[0], endpoint: result[1] }
        })
        console.log(this.map)
      });
  }

}
