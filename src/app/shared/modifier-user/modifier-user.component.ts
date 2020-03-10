import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.scss']
})
export class ModifierUserComponent implements OnInit, OnChanges {
  @Input() model: any;
  isUpdateMode: boolean;

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.model = {  };
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
      console.log(record.model.currentValue.payload.doc.data());
      this.model = record.model.currentValue;
      this.isUpdateMode = true;
    }
  }

  annuler() {
    this.cancel$.emit();
  }

  enregistrer() {
    this.submit$.emit(this.model);
  }

}
