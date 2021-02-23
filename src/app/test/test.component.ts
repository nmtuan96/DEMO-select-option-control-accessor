import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formGroup= this.fb.group({
    province: new FormControl('')
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  change(){
    console.log(this.formGroup.value);
  }
}
