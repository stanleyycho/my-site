import { Component, OnInit } from '@angular/core';
import { LearningMaterial } from '../learning-material'

@Component({
  selector: 'app-my-resources',
  templateUrl: './my-resources.component.html',
  styleUrls: ['./my-resources.component.css']
})
export class MyResourcesComponent implements OnInit {

  learningMaterials: LearningMaterial[] = [
    {
      language: "C++", resources: [
        { name: "Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14", url: "https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996" },
        { name: "Youtube CppCon", url: "https://www.youtube.com/user/CppCon/videos" },
        { name: "Youtube CppCast", url: "https://www.youtube.com/channel/UCuCjADS4u3uJDTqUaG0H9dA" }
      ]
    },
    {
      language: "Python", resources: [
        { name: "Learning Python, 5th Edition", url: "https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730" },
        { name: "Fluent Python: Clear, Concise, and Effective Programming", url: "https://www.amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1491946008" }]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
