import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-bank-intimation',
  templateUrl: './upload-bank-intimation.component.html',
  styleUrls: ['./upload-bank-intimation.component.scss']
})
export class UploadBankIntimationComponent implements OnInit {
  public type: string = "directive";
  constructor() { }

  ngOnInit(): void {
  }

}
