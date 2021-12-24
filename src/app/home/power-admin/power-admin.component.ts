import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-power-admin',
  templateUrl: './power-admin.component.html',
  styleUrls: ['../../../sass/application.scss', './power-admin.component.scss']
})
export class PowerAdminComponent implements OnInit {
  item2: any;
  val: Object;
  value: any = [];
  file: any;
  approved: boolean;
  pending: boolean;

  constructor(
    private documentService: DocumentService,
    public router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.val = await this.userService.getAllUser();
    console.log(this.val);


    this.route.params.subscribe(async params => {
      this.val = await this.userService.getAllUser();
      console.log(this.val);
      this.file = this.route.snapshot.params['file'];
      console.log("hello")
      if (this.file === 'approved') {
        console.log("hello1")
        this.approved = true;
        this.pending = false;
        let x: any = [];
        for (let value of this.val['data']) {
          if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com') {
            if (value['verified'] == 'yes') {
              x.push(value)
            }
          }
        }
        this.value = x

      }
      else if (this.file === 'pending') {
        this.approved = false;
        this.pending = true;
        console.log("hello2")
        let x: any = [];
        for (let value of this.val['data']) {
          if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com') {
            if (value['verified'] == 'no') {
              x.push(value)
            }
          }
        }
        console.log(this.value)
        this.value = x
      }

    });

    for (let value of this.val['data']) {
      if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com') {
        if (value['verified'] == 'no') {
          this.value.push(value)
        }
      }
    }
  }
  submit(id, i, emailId) {
    console.log(id)
    let x;
    if (this.approved) {
      x = 'no'
    }
    else if (this.pending) {
      x = 'yes'
    }
    this.userService.updateOneUser(id, x, emailId)
      .subscribe(
        async data => {
          console.log("king123")
          console.log(data)
          this.value.splice(i, 1)
          //this.message = data['message']
          if (this.approved) {
            this.toastr.success('Revoked Successfully');
          }
          else if (this.pending) {
            this.toastr.success('Approved Successfully');
          }

        },
        error => {
          console.log("error")
        });
  }
}