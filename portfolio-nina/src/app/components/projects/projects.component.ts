import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
title: string = "Projetos realizados";

  projectList = [
  {
    "id": 1,
    "title": "BurgerBots",
    "urlImage": "../../../assets/img/logoNC.png",
    "description": "xx"
  },
  {
    "id": 2,
    "title": "ExplorAi",
    "urlImage": "../../../assets/img/logoNC.png",
    "description": "xx"
  },
  {
    "id": 3,
    "title": "PokeData Go",
    "urlImage": "../../../assets/img/logoNC.png",
    "description": "xx"
  },
  {
    "id": 4,
    "title": "Markdowns",
    "urlImage": "../../../assets/img/logoNC.png",
    "description": "xx"
  },
  {
    "id": 5,
    "title": "Sistema Bancario",
    "urlImage": "../../../assets/img/logoNC.png",
    "description": "xx"
  },
];
}
