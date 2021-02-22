import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anchor-tag',
  templateUrl: './anchor-tag.component.html',
  styleUrls: ['./anchor-tag.component.scss']
})
export class AnchorTagComponent implements OnInit {
  @Input() class: string;
  @Input() link: any;

  constructor() { }

  ngOnInit(): void {
  }

}
