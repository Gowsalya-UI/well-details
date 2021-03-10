import { Component, OnInit,ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms'
 

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  wellForm: FormGroup;  
  @Output() emitAdd: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('sourceKeyInput') keyInput: ElementRef;
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.wellForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      sourceKey: []
  });
}

  submitAdd() {
    this.emitAdd.emit(this.wellForm.value);
  }
  
  updateSourceKey(key: number){
   this.wellForm.patchValue({sourceKey:key});
  }
  
  get fb() { return this.wellForm.controls; }
}
