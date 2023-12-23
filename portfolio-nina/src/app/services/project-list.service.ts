import { Injectable } from '@angular/core';
import { PROJECT } from 'src/assets/files/mock-project';
import { ProjectModel } from '../models/project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  projects: ProjectModel[] = PROJECT;

  constructor() { }

  getProjects(): Observable<ProjectModel[]> {
    const projects = of(PROJECT);
    return projects;
  }
}
