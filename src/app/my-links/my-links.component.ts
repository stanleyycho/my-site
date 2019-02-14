import { Component, OnInit } from '@angular/core';
import { ExternalLink } from '../external-link'

@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.css']
})
export class MyLinksComponent implements OnInit {

  sites : ExternalLink[] = [
    {name: "LinkedIn", url: "https://linkedin.com/in/stanleyycho/"},
    {name: "GitHub", url: "https://github.com/stanleyycho"}
    ]
  
  constructor() { }

  ngOnInit() {
  }

}
