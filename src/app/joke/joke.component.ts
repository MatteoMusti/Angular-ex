import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  joke: any;
  likedJokes: any[] = [];
  dislikedJokes: any[] = [];

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe(data => {
      this.joke = data;
      console.log(data)
    })
  }

  add(liked: boolean): void {
    if (this.likedJokes.includes(this.joke) || this.dislikedJokes.includes(this.joke)) {
      return undefined
    } else {
      if (liked === true) {
        this.likedJokes.push(this.joke)
      } else
        this.dislikedJokes.push(this.joke)
    }
  }

  swap(index: number, liked: boolean): void {
    if(liked === true) {
      const liked = this.dislikedJokes.splice(index, 1)
      this.likedJokes.push(...liked)
      console.log(this.likedJokes)
    } else {
    const disliked = this.likedJokes.splice(index, 1)
    this.dislikedJokes.push(...disliked)
    console.log(this.dislikedJokes)
    }
  }

}
