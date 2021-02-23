import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-reactive-select-comp',
  templateUrl: './reactive-select-comp.component.html',
  styleUrls: ['./reactive-select-comp.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveSelectCompComponent),
      multi: true
    },
  ]
})
export class ReactiveSelectCompComponent implements OnInit, ControlValueAccessor {
  provincesList = [
    { id: 1, name: 'Hà Nội', type: 'central' },
    { id: 2, name: 'TP Hồ Chí Minh', type: 'central' },
    { id: 3, name: 'Đà Nẵng', type: 'central' },
    { id: 4, name: 'Lào Cai', type: 'province' },
    { id: 5, name: 'Yên Bái', type: 'province' },
    { id: 6, name: 'Quảng Bình', type: 'province' },
    { id: 7, name: 'Thái Nguyên', type: 'province' },
    { id: 8, name: 'Daklak', type: 'province' },
    { id: 9, name: 'Nghệ An', type: 'province' },
    { id: 10, name: 'Hà Tĩnh', type: 'province' }
  ];
  private provinceData: { id: number, name: string, type: 'central' | 'province' };
  onChange: (data : any) => void;
  onTouched: () =>void;
  disable: boolean;
  constructor() { }
  
  isSelect(provinceId: number): boolean {
    return !this.provinceData ? false : (provinceId === this.provinceData.id);
  }

  writeValue(obj: any): void {
    this.provinceData = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  ngOnInit(): void {
  }

  handleOnProvinceChange(e) {
    const provinceId = parseInt(e.target.value);
    const provinceSelect = this.provincesList.find(province => province.id === provinceId);
    this.writeValue(provinceSelect);
    this.onChange(provinceSelect);
  }

}
