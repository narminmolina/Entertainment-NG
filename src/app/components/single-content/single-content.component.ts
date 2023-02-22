import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.scss']
})
export class SingleContentComponent {
@Input() movie!:any
  @Input() mediaType!: string;
}
