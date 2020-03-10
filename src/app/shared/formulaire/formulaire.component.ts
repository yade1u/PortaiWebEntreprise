import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit, OnChanges {
  @Input() model: any;
  @Input()isUpdateMode: boolean;

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.model = { address: {} };
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = Boolean(this.model);
    }
  }
  cancel() {
    this.cancel$.emit();
  }

  submit() {
    this.submit$.emit(this.model);
  }

}
