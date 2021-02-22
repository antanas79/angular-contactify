import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  @Input() svgId: string;
  @Input() class: string;
  constructor() { }

  ngOnInit(): void {
  }

}
