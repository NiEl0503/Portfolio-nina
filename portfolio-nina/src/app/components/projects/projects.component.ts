import { Component } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { PROJECT } from 'src/assets/files/mock-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
title: string = "Projetos realizados";

  projectList: ProjectModel[] = PROJECT;
}
