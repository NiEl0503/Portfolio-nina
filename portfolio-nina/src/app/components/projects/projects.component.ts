import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  title: string = "Projetos realizados";

  projectList: ProjectModel[] = [];

  constructor(private projectListService: ProjectListService) { }
  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.projectListService.getProjects().subscribe(projectList => this.projectList = projectList);
  }
}
