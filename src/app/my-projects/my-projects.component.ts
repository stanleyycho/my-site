import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../project';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {

  workExperiences: WorkExperience[] = [
    {
      companyName: "Deepmap",
      projects: [
        { name: 'HD Map', description: 'Building on vehicle software for map update.' },
      ]
    },
    {
      companyName: "Roche",
      projects: [
        { name: 'Microscopy Image Server', description: 'Implemented giga-pixel microscopy image server in C++ using Apache httpd server to streamline workflow and to improve scability and performance by 50%.' },
        { name: 'Detection', description: 'Contributed to improve cell detection algorithm, which classifies cell types using deep learning, and integrated it to imaging platform.' },
        { name: 'Platform', description: 'Developing web-based image analysis platform in both front-end and back-end, which includes image viewer and analysis algorithms. The Pathology platform has helped to revolutionize tissue diagnostics and accelerated pharmaceutical development process.' },
        { name: 'Image server', description: 'Developed features in image server written in Java to support multiple types of image files.' },
        { name: 'Segmentation', description: 'Prototyped semi-automatic interactive segmentation algorithm for real-time tissue segmentation tool in Matlab. Implemented it in C++ and deployed to production.' },
        { name: 'Dev Environment', description: 'Improved unit testing, continuous integration and deployment processes to streamline software development.' },
        { name: 'Framework', description: 'Contributed to developing features, maintained framework, unit testing and documentation of image analysis SDK in both C++ and Matlab.' }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
