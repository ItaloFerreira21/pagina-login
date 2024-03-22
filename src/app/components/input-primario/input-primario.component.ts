import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
type InputTypes = "text" | "email" | "password"
@Component({
  selector: 'app-input-primario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrimarioComponent),
      multi: true
    }
  ],
  templateUrl: './input-primario.component.html',
  styleUrl: './input-primario.component.scss'
})
export class InputPrimarioComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() inputName: string = "";


  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }
  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(_isDisabled: boolean): void {}
}
