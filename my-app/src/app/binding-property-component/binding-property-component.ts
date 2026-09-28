import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name: string = 'Trần Kim Ngân'
  public email: string = 'ngantkk24411e@st.uel.edu.vn'
  public nameid: string = 'nameid'
  public emailid: string = 'emailid'
  public isDisabled: boolean = false
  public hello: string = 'Hello everyone'
  public red_color: string = 'red'
  public advanced_message: string = '<font color="blue">This is an advanced message</font>'
}
