import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes : Receipe[] = [
    new Receipe("Putt", "Just Putt", "https://images.freeimages.com/images/large-previews/51f/healthy-food-1328279.jpg"),
    new Receipe("Appam", "Just Appam", "https://images.freeimages.com/images/large-previews/fcf/food-4-1324994.jpg")
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
