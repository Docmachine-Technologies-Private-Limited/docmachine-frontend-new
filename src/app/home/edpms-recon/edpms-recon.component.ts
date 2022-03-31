import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-edpms-recon',
  templateUrl: './edpms-recon.component.html',
  styleUrls: ['./edpms-recon.component.scss']
})
export class EdpmsReconComponent implements OnInit {

  public uploading = false;
  config3:any;
  documentType = '';
  public benneDetail: any = [];
  public buyerDetail: any = [];
  authToken: string;
  public size;
  width: any = 0;


  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }

  public onUploadInit(args: any): void {
    console.log("onUploadInit:", args);
  }

  public onUploadSuccess(args: any){
    if (this.documentType !== "") {
      this.uploading = false;
      console.log("ARGS", args);
      console.log("DATA", args[1].data);
      console.log(args[1].data.boeNumber);
      console.log("jhsjshsjshjsh",args[1].data.billNo)
      console.log("Message Message", args[1].message);
      if (args[1].message == "This file already uploaded") {
  }
}
  }

  public submit(args: any){
      if (this.documentType !== "") {
        console.log("ajbkab");
        this.uploading = true;
        console.log(args[0].size);
        this.size = this.formatBytes(args[0].size);
        //document.getElementById("uploadError").style.display = "none";

        this.runProgressBar(args[0].size);
      } else {
        console.log("Document type not given");
        document.getElementById("uploadError").style.display = "block";
      }
    }

  public formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + " Bytes";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(3) + " KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(3) + " MB";
    } else {
      return (bytes / 1073741824).toFixed(3) + " GB";
    }
  }

  runProgressBar(value) {
    console.log(value / 1500);
    timer(0, value / 2500)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data),
          console.log("Benne Detail22222", this.benneDetail);
      },
      (err) => console.log("Error", err)
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log("Benne Detail111", this.buyerDetail);
      },
      (err) => console.log("Error", err)
    );
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
}
