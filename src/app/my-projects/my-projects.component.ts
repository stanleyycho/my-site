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
      companyName: "Nvidia",
      briefSummary: "Contributed to on-board data collection and fleet management software for building high-definition maps for autonomous vehicles.",
      projects: [
      ]
    },
    {
      companyName: "Deepmap (acquired by Nvidia)",
      briefSummary: "Contributed to on-board softwares for building high-definition maps for autonomous vehicles.",
      projects: [
        { name: 'Data Collection and Fleet Management', description: 'Developed fleet management on-board softwares in C++, which scales up mapping capacity, and mentored interns in the project.' },
      ]
    },
    {
      companyName: "Roche",
      briefSummary: "Built cloud-based images analysis platform for Pathology. The platform has revolutionized tissue diagnostics and accelerated pharmaceutical development process.",
      projects: [
        { name: 'Microscopy Image Server', description: 'Implemented high resolution microscopy image HTTP server in C++. Improved scalability, response time and throughput by 50%' },
        { name: 'Machine Learning Pipeline', description: 'Built cloud-based image analysis pipeline, which serves as data management and pipeline for data labeling and machine learning model training.' },
        { name: 'Detection', description: 'Contributed to developing cell detection algorithm in deep learning. Integrated and productized it to image analysis platform.' },
        { name: 'Segmentation', description: 'Implemented semi-automatic interactive segmentation algorithm and tool for real-time tissue segmentation in Matlab and in C++.' },
        { name: 'Framework', description: 'Contributed to developing features of image processing/computer vision library in C++.' }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
