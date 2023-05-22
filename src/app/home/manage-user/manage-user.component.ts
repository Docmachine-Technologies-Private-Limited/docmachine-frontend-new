import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { WindowInformationService } from '../../service/window-information.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['../../../sass/application.scss', './manage-user.component.scss']
})
export class ManageUserComponent implements OnInit, AfterViewInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public type: string = 'directive';
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, { static: true }) directiveRef?: DropzoneDirective;
  memeberForm?: FormGroup;
  id: any;
  item: Object;
  item1: any = [];
  authToken: any;
  headers: any;
  img: any = '';
  toggle = false;
  submitted = false;

  public config: DropzoneConfigInterface;
  api_base: any;

  FORM_BUILDER: any = {
    email: "",
    name: ""
  }
  EDIT_FORM_BUILDER: any = {
    name: ''
  }
  SELECTED_EDIT_DATA: any = [];
  SELECTED_INDEX = 0;

  userData: any = [];
  ROLE_TYPES: any = '';
  MEMBER_DATA: any = [];

  ROLE_LIST = {
    '1': 'Without maker/checker',
    '2': 'Maker and Approver',
    '3': 'Maker checker and Approver'
  }
  LIST_ROLE = {
    'Without maker/checker': 1,
    'Maker and Approver': 2,
    'Maker checker and Approver': 3
  }
  constructor(@Inject(PLATFORM_ID) public platformId,
    public route?: ActivatedRoute, public formBuilder?: FormBuilder,
    public userService?: UserService,
    public sanitizer?: DomSanitizer, public toastr?: ToastrService,
    public elRef?: ElementRef,
    public wininfo?: WindowInformationService) {
    this.loadFromLocalStorage()
    this.api_base = userService?.api_base;
    console.log(this.api_base)
    console.log(this.authToken)
    this.headers = {
      id: this.id,
      Authorization: this.authToken,
    }


    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        url: `${this.api_base}/member/uploadImage`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles: 'image/*',
        previewTemplate: '<div  class=\"dz-preview dz-file-preview\" style=\"text-align: right; margin-right:3px;\">\n <div class=\"dz-image\" style=\"text-align: right; margin-right:3px;\"> <img data-dz-thumbnail /></div>\n <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <i style=\"color: red; text-align: center;font-size: 30px;\" class=\"fa fa-exclamation-circle\"></i>\n  </div>\n</div>'
      };
    }
  }

  async ngOnInit() {
    this.wininfo?.set_controller_of_width(270, '.content-wrap')
    this.toggle = false;
    this.id = this.route?.snapshot.queryParams['id'];
    console.log(this.id)
    this.userData = await this.userService?.getUserDetail();
    // this.userData = this.userData.result
    console.log("userData", this.userData)
    this.memeberForm = this.formBuilder?.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });

    this.userService?.getMemeber(this.id)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          this.item1 = data['data']
          console.log(this.item1['length'])
        },
        error => {
          console.log("error")
        });
  }

  URL_CREATE(url) {
    return this.sanitizer?.bypassSecurityTrustResourceUrl(url);
  }
  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    //this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    //this.uploading = false;
    console.log(args)
    console.log(args[1].data)
    this.toggle = true;
  }
  OpenPopup(formmodel: any) {
    if (this.userData['result']['Login_Limit'] > this.item1.length) {
      this.img = '';
      formmodel.style.display = 'block'
    } else {
      formmodel.style.display = 'none';
      this.toastr?.error('Yours add member limit exceeded...');
    }
  }
  CONSOLE(value: any) {
    const file:any = value[0];
    console.log(file,'sdfjsdggfdsjfsdf')
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.userService?.UploadS3Buket({fileName:file?.name,buffer:reader.result,type:file?.type}).subscribe((response:any)=>{
        console.log(response,'response')
        this.img = response?.url;
      })
    };
    console.log(value, 'console')
  }
  
  EditData(temp: any, data: any) {
    this.SELECTED_INDEX = 1;
    console.log(this.SELECTED_EDIT_DATA, 'sdhfjsdfsdfsdf');
    this.MEMBER_DATA = []
    this.userService?.getEamilByIdUserMemberDetails(this.item1[data['index']]['email']).then((data: any) => {
      this.MEMBER_DATA = data?.UserDetails != null ? data?.UserDetails : data?.MemberDetails;
      this.SELECTED_EDIT_DATA = data?.MemberDetails
      this.img = data?.MemberDetails?.imageUrl
      this.EDIT_FORM_BUILDER = {
        name: data?.MemberDetails?.name
      }
      console.log(data, 'getUserDetailByIdgetUserDetailById');
    })
  }
  cleardata() {
    this.FORM_BUILDER = []
  }
  onSubmit(formmodel: any) {
    this.submitted = true;
    console.log(this.FORM_BUILDER)
    this.findEmptyObject(this.FORM_BUILDER, [undefined, null, '', 'Select Subscription']).then((value: any) => {
      if (value == true) {
        this.FORM_BUILDER['UnderSubscriptionCheckBox'] = this.ROLE_TYPES != '' ? this.ROLE_TYPES : 'NA'
        this.FORM_BUILDER['Subscription'] = this.FORM_BUILDER['UnderSubscription'];
        this.FORM_BUILDER['imageUrl'] = this.img;
        console.log(this.FORM_BUILDER, 'this.memeberForm')
        this.userService?.getEamilByIdUserMember(this.FORM_BUILDER['email']).then((emailvalidation: any) => {
          console.log(emailvalidation, 'sdshdfjdsfhsdgfsdhfgjsd')
          if (emailvalidation.length == 0) {
            this.userService?.addMemeber(this.id, this.FORM_BUILDER)
              .subscribe(
                data => {
                  console.log("king123")
                  console.log(data)
                  if (data['data'] != undefined && data['data'] != null) {
                    formmodel.style.display = 'none'
                    this.toastr?.success('Added Successfully data...');
                    this.resetform();
                    this.FORM_BUILDER = {};
                    this.FORM_BUILDER = {
                      email: "",
                      name: ""
                    }
                    this.userService?.getMemeber(this.id).subscribe(data => {
                        console.log("king123")
                        console.log(data)
                        this.item1 = data['data']
                        console.log(this.item1['length'])
                      },
                      error => {
                        console.log("error")
                      });
                  } else {
                    this.toastr?.error(data['message']);
                  }
                },
                error => {
                  console.log("error")
                  this.resetform();
                });
          } else {
            this.toastr?.error('This email id already exit please used different email id.');
          }
        },
          error => {
            console.log("error")
            this.resetform();
          });

      } else {
        for (const key in value) {
          this.toastr?.error(value[key]);
        }
      }
    });
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.memeberForm?.controls as any;
  }
  ngAfterViewInit() {
  }
  FORM_BUILDER_INSERT_VALUE(key: any, value: string) {
    this.FORM_BUILDER[key] = value;
  }
  EDIT_FORM_BUILDER_INSERT_VALUE(key: any, value: string) {
    this.EDIT_FORM_BUILDER[key] = value;
  }
  findEmptyObject(object: any, errorlist: any) {
    var temp: any = {};
    return new Promise((resolve, reject) => {
      var objectkeys = Object.keys(object);
      if (objectkeys.length == 0) {
        resolve([])
        return;
      }
      for (let index = 0; index < objectkeys.length; index++) {
        if (errorlist.includes(object[objectkeys[index]]) || object[objectkeys[index]] == '') {
          temp[objectkeys[index]] = objectkeys[index] + ' Please check input value is empty!';
        }
        if (objectkeys.length == (index + 1)) {
          if (Object.keys(temp).length != 0) {
            resolve(temp);
          } else {
            resolve(true);
          }
        }
      }
    });
  }
  resetform() {
    $('.edit_form_new_sec').find('input:text, input:password, input:file, select, textarea').each(function () {
      $(this).val('');
    });
    $('.edit_form_new_sec').find('input:radio,input:checkbox').each(function () {
      $(this).removeAttr('checked');
      $(this).removeAttr('selected');
      $(this).prop('checked', false); // Unchecks it
    });
  }
  deleteuser(data: any) {
    this.userService?.deleteUser_Role(data['email']).subscribe((res: any) => {
      if (res['status'] == true) {
        this.ngOnInit()
      }
      console.log(res, 'dfsdfdsfsgdsfhdsgfd');
    })
  }
  onEditSubmit(formmodel: any) {
    this.submitted = true;
    console.log(this.EDIT_FORM_BUILDER)
    this.findEmptyObject(this.EDIT_FORM_BUILDER, [undefined, null, '', 'Select Subscription']).then((value: any) => {
      if (value == true) {
        this.EDIT_FORM_BUILDER['UnderSubscription'] = this.EDIT_FORM_BUILDER['UnderSubscription'] != undefined ? this.EDIT_FORM_BUILDER['UnderSubscription'] : this.SELECTED_EDIT_DATA['Subscription'];
        this.EDIT_FORM_BUILDER['imageUrl'] = this.img != undefined ? this.img : this.SELECTED_EDIT_DATA['imageUrl'];
        this.EDIT_FORM_BUILDER['Role_Type'] = this.ROLE_TYPES != '' ? this.ROLE_TYPES : this.userData?.result['Role_Type'];
        this.EDIT_FORM_BUILDER['UnderSubscriptionCheckBox'] = this.ROLE_TYPES != '' ? this.ROLE_TYPES : this.EDIT_FORM_BUILDER['UnderSubscriptionCheckBox'];
        console.log(this.EDIT_FORM_BUILDER, 'this.memeberForm')
        this.userService?.UpdateUserMemeber(this.SELECTED_EDIT_DATA['email'], this.EDIT_FORM_BUILDER)
          .subscribe(
            data => {
              console.log(data, 'UpdateMemeber')
              if (data['data'] != undefined && data['data'] != null) {
                formmodel.style.display = 'none'
                this.toastr?.success('Successfully Update data...');
                this.ngOnInit()
                this.SELECTED_EDIT_DATA = [];
                this.SELECTED_INDEX = 0;
                this.EDIT_FORM_BUILDER = {
                  name: '',
                }
                this.userService?.getMemeber(this.id).subscribe(data => {
                  console.log("king123")
                  console.log(data)
                  this.item1 = data['data']
                  console.log(this.item1['length'])
                },
                  error => {
                    console.log("error")
                  });
              } else {
                this.toastr?.error(data['message']);
                this.SELECTED_EDIT_DATA = [];
                this.SELECTED_INDEX = 0;
                this.EDIT_FORM_BUILDER = {
                  name: ''
                }
              }
              this.resetform();
            },
            error => {
              console.log("error")
              this.SELECTED_EDIT_DATA = [];
              this.SELECTED_INDEX = 0;
              this.EDIT_FORM_BUILDER = {
                name: ''
              }
            });
      } else {
        for (const key in value) {
          this.toastr?.error(value[key]);
        }
      }
    });
  }
  ObjectLength(data: any) {
    return Object.keys(data).length;
  }
  onChange(event, email: string, isChecked: boolean) {
    $('.form-check-input').prop("checked", false);
    if (isChecked) {
      $(event.target).prop("checked", true);
    }
    if (isChecked) {
      this.ROLE_TYPES = email;
    } else {
      this.ROLE_TYPES = '';

    }
  }
  JSON_TO_ARRAY(object: any) {
    var temp: any = [];
    for (const key in object) {
      if (object[key] != '' && object[key] != undefined) {
        temp.push(object[key]);
      }
    }
    return temp;
  }
}
