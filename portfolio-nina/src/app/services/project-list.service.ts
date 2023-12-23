import { Injectable } from '@angular/core';
import { PROJECT } from 'src/assets/files/mock-project';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  projects: ProjectModel[] = PROJECT;

  constructor() { }

  getProjects(): ProjectModel[] {
    return this.projects;
  }
}
