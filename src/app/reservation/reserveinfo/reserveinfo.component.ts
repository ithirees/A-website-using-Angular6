import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cuisine-reserveinfo',
  templateUrl: './reserveinfo.component.html',
  styleUrls: ['./reserveinfo.component.css']
})
export class ReserveinfoComponent implements OnInit {

  constructor() { }
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') mail: ElementRef;
  @ViewChild('pnumber') phone: ElementRef;
  @ViewChild('tablelocateoptions') tablelocateoptions:ElementRef;

  namevalidate(namedata) {
  let patt = new RegExp("^[a-zA-Z\ ]+$");
  return patt.test(namedata);
  }
  emailvalidate(maildata) {
  let patt = new RegExp("^([a-zA-Z_+-]+([a-zA-Z0-9_+-])*)(\.[a-zA-Z0-9!#$&_*?^{}~\"+-]+)*@([a-z0-9]+([a-z0-9-]*)\.)[a-zA-Z]+$");
  return patt.test(maildata);
  }
  phonevalidate(phonedata) {
  let patt = new RegExp("^[0-9]+$");
  return patt.test(phonedata);
  }

  tableOption(e){
    let value = (<HTMLInputElement>e.target).getAttribute('value');
    if (value === 'SeaFace'){
      this.tablelocateoptions.nativeElement.innerHTML = "<div class='form-group locatetableoption' style='width:100%'><div><span><label><input type='radio' name='tableplace1'> H1</span><span>max guests 4</span></label><div></div>";
    }
    else if(value === 'RoofTop'){
      this.tablelocateoptions.nativeElement.innerHTML = "<div class='form-group row text-center' style='color:red;width:80%;margin: auto;'>Sorry, The Table You Have Chosen Is Already Reserved. Please Choose Another Table. Thankyou.</div>";
    }
    else if(value === 'Lobby'){
      this.tablelocateoptions.nativeElement.innerHTML = "<div class='form-group locatetableoption'><div class'locate'><span><label><input type='radio' name='tableplace3'> H1</label></span><span>max guests 4</span></div><div class'locate'><span><label><input type='radio' name='tableplace3'> H2</label></span><span>max guests 2</span></div><div class'locate'><span><label><input type='radio' name='tableplace3'> H3</label></span><span>max guests 4</span></div><div class'locate'><span><label><input type='radio' name='tableplace3'> H4</label></span><span>max guests 2</span></div></div>";
    }
    else if(value === 'DanceFace'){
      this.tablelocateoptions.nativeElement.innerHTML = "<div class='form-group text-center' style='color:red;width:80%;margin: auto;'>Sorry, The Table You Have Chosen Is Already Reserved. Please Choose Another Table. Thankyou.</div>";
    }
  }
  reserve() {
    let name = this.name.nativeElement.value;
    console.log(this.namevalidate(name));
    let mail = this.mail.nativeElement.value;
    console.log(this.emailvalidate(mail));
    let phone = this.phone.nativeElement.value;
    console.log(this.phonevalidate(phone));
  }

  ngOnInit() {
  }

}
