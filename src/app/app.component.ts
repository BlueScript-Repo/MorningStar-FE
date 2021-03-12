import { Component } from '@angular/core';
import { SelectedOption} from './SelectedOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'morningStar';
  description = 'MorningStar application';
  disabled = true;
  color = 'red';

  optionSelected:any = {};
  
  destination = '';

  nameVal ='';
  selectedDate = '';

  dropDownOptions:SelectedOption[] = 
  [
    {key:'BAC123', value:'Dest1'},
    {key:'BAC456', value:'Dest2'},
    {key:'BAC987', value:'Dest3'}
  ]

  dailyIternary = [ {nameVal: '', selectedDate: '' } ]

  getDesc() {
    return this.description;
  }

  getelement(index: number) {
    return this.arr[index];
  }

  alertName(name: string) {
    this.appName = name;
    this.disabled = false;
    this.color = name;
  }

  printSelected(option:SelectedOption) {
    console.log("Selected Key is " + option.value);
    console.log("Selected option is " + option.key);
    console.log("Done");  
  }

  getFormValues(val:any)
  {
    console.log(val);
    
    // let p:any = 
    // {
    //   nameVal: val.textName,
    //   selectedDate : val.selectedDate
    // };

    this.dailyIternary.push({
      nameVal: val.textName,
      selectedDate : val.selectedDate
    });
    this.nameVal = val.textName;
    this.selectedDate = val.selectedDate;
    
  }

  arr = ['One', 'Two', 'Three', 'Four', 'Five'];
}
