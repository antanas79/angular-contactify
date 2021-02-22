import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss'],
})
export class IconTextComponent implements OnInit {
  @Input() svgId: string;
  @Input() texts: [];
  @Input() class: string;

  constructor() {}

  ngOnInit(): void {}
}
