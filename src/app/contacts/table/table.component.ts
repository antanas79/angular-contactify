import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columnNames: any[];
  @Input() actions: [];
  @Output() onTableSelectedRowChange = new EventEmitter<any>();
  selected = 0;
  showSort = {} as any;
  descending = {} as any;
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.columnNames.length; i++) {
      this.showSort[this.columnNames[i]] = false;
      this.descending[this.columnNames[i]] = false;
    }
    this.sort(this.columnNames[0]);
  }

  select(i) {
    this.selected = i;
    this.onTableSelectedRowChange.emit(this.selected);
  }

  sort(sortValue: string) {
    if (sortValue === 'phone') {
      return;
    }

    this.descending[sortValue]
      ? this.rows.sort((a, b) =>
          a[sortValue].localeCompare(b[sortValue], undefined, { numeric: true })
        )
      : this.rows.sort((a, b) =>
          b[sortValue].localeCompare(a[sortValue], undefined, { numeric: true })
        );

    for (let i = 0; i < this.columnNames.length; i++) {
      this.showSort[this.columnNames[i]] = false;
    }

    this.showSort[sortValue] = !this.showSort[sortValue];
    this.descending[sortValue] = !this.descending[sortValue];
  }
}
