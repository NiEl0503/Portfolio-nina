import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-done',
  templateUrl: './projects-done.component.html',
  styleUrls: ['./projects-done.component.scss']
})
export class ProjectsDoneComponent {
  @Input() projects: any;
}
