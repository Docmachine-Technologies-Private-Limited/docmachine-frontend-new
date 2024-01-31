import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { WindowInformationService } from '../../service/window-information.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
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
    public validator?: UploadServiceValidatorService,
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
    console.log("userData", this.userData)
    this.memeberForm = this.formBuilder?.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });

    this.userService?.getMemeber(this.id).subscribe((data) => {
      console.log(data,"getMemeber")
      this.item1 = data['data']
    }, error => {
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
    if (this.userData['result']['Login_Limit'] > this.userData['result']?.members_list?.length) {
      this.img = '';
      formmodel?.displayShow
      this.response()
    } else {
      formmodel?.displayHidden
      this.toastr?.error('Yours add member limit exceeded...');
    }
  }
  CONSOLE(value: any) {
    const file: any = value[0];
    console.log(file, 'sdfjsdggfdsjfsdf')
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.userService?.UploadS3Buket({ fileName: file?.name, buffer: reader.result, type: file?.type }).subscribe((response: any) => {
        console.log(response, 'response')
        this.img = reader.result;
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

        this.FORM_BUILDER['DMS'] = this.userData['result']['DMS'];
        this.FORM_BUILDER['Teasury'] = this.userData['result']['Teasury'];
        this.FORM_BUILDER['Transaction'] = this.userData['result']['Transaction'];

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

  SUBMITTED_BUTTON_SHOW: boolean = false;

  response() {
    let SubscriptionType: any = [];
    let RoleType: any = [];

    if (this.userData?.result['Role_Type'] == '1') {
      RoleType = []
    } else if (this.userData?.result['Role_Type'] == '2') {
      RoleType = ['Maker', 'Approver']
    } else if (this.userData?.result['Role_Type'] == '3') {
      RoleType = ['Maker', 'Checker', 'Approver']
    }

    if (this.userData?.result['Subscription'] == 'Import') {
      SubscriptionType = ['Import']
    } else if (this.userData?.result['Subscription'] == 'Export') {
      SubscriptionType = ['Export']
    } else if (this.userData?.result['Subscription'] == 'both') {
      SubscriptionType = ['Export', 'Import', 'both']
    }
    this.SUBMITTED_BUTTON_SHOW = false;
    setTimeout(() => {
      this.validator?.buildForm({
        name: {
          type: "text",
          value: "",
          label: "Name",
          rules: {
            required: true,
          }
        },
        email: {
          type: "text",
          value: "",
          label: "Email id",
          rules: {
            required: true,
          }
        },
        Subscription: {
          type: "SelectOption",
          value: "",
          label: "Subscription",
          items: SubscriptionType,
          rules: {
            required: true,
          }
        },
        role: {
          type: "LabelShow",
          value: this.ROLE_LIST[this.userData?.result['Role_Type']],
          label: "Role_Type",
          rules: {
            required: true,
          },
          Inputdisabled: true
        },
        UnderSubscriptionCheckBox: {
          type: "SelectOption",
          value: "",
          label: "Role",
          items: RoleType,
          rules: {
            required: this.userData?.result['Role_Type'] == '1' ? false : true,
          }
        },
      }, 'ADD_NEW_MEMBER').then((res) => this.SUBMITTED_BUTTON_SHOW = true);
    }, 200);
  }

  SubmitButton(value: any, ADD_NEW_MEMBER_POPUP_PANEL: any) {
    console.log(value, "SubmitButton")
    if (value?.status == "VALID") {
      this.userService?.getEamilByIdUserMember(value?.value['email']).then((emailvalidation: any) => {
        console.log(emailvalidation, 'sdshdfjdsfhsdgfsdhfgjsd')
        if (emailvalidation.length == 0) {
          value.value['role'] = this.LIST_ROLE[value.value['role']]
          this.userService?.addMemeber(this.id, value?.value).subscribe(data => {
            console.log("king123")
            console.log(data)
            ADD_NEW_MEMBER_POPUP_PANEL?.displayHidden;
            ADD_NEW_MEMBER_POPUP_PANEL?.resetForm;
            this.toastr?.success('Added Successfully data...');
            this.userService?.getMemeber(this.id).subscribe(data1 => {
              console.log("king123")
              console.log(data1)
              this.item1 = data1['data']
              console.log(this.item1['length'])
            }, error => {
              console.log("error")
            });
          },
            error => {
              console.log("error")
            });
        } else {
          this.toastr?.error('This email id already exit please used different email id.');
        }
      });
    }
  }


  editresponse(EDIT_NEW_MEMBER_POPUP_PANEL, data: any) {
    this.SELECTED_EDIT_DATA = this.item1[data?.index]
    let SubscriptionType: any = [];
    let RoleType: any = [];
    this.img = this.SELECTED_EDIT_DATA?.imageUrl
    console.log(data, this.SELECTED_EDIT_DATA, "EDIT_NEW_MEMBER_POPUP_PANEL");

    if (this.userData?.result['Role_Type'] == '1') {
      RoleType = []
    } else if (this.userData?.result['Role_Type'] == '2') {
      RoleType = ['Maker', 'Approver']
    } else if (this.userData?.result['Role_Type'] == '3') {
      RoleType = ['Maker', 'Checker', 'Approver']
    }

    if (this.userData?.result['Subscription'] == 'Import') {
      SubscriptionType = ['Import']
    } else if (this.userData?.result['Subscription'] == 'Export') {
      SubscriptionType = ['Export']
    } else if (this.userData?.result['Subscription'] == 'both') {
      SubscriptionType = ['Export', 'Import', 'both']
    }
    this.SUBMITTED_BUTTON_SHOW = false;
    setTimeout(() => {
      this.validator?.buildForm({
        name: {
          type: "text",
          value: this.item1[data?.index]?.name,
          label: "Name",
          rules: {
            required: true,
          }
        },
        email: {
          type: "LabelShow",
          value: this.item1[data?.index]?.email,
          label: "Email id",
          rules: {
            required: true,
          },
          Inputdisabled: true
        },
        UnderSubscription: {
          type: "SelectOption",
          value: this.item1[data?.index]?.Subscription,
          label: "Subscription",
          items: SubscriptionType,
          rules: {
            required: true,
          }
        },
        role: {
          type: "LabelShow",
          value: this.ROLE_LIST[this.userData?.result['Role_Type']],
          label: "Role_Type",
          rules: {
            required: true,
          },
          Inputdisabled: true
        },
        UnderSubscriptionCheckBox: {
          type: "SelectOption",
          value: this.item1[data?.index]?.UnderSubscriptionCheckBox,
          label: "Role",
          items: RoleType,
          rules: {
            required: this.userData?.result['Role_Type'] == '1' ? false : true,
          }
        },
      }, 'EDIT_NEW_MEMBER').then((res) => {
        this.SUBMITTED_BUTTON_SHOW = true;
        EDIT_NEW_MEMBER_POPUP_PANEL?.displayShow
      });
    }, 200);
  }

  EditSubmitButton(value: any, EDIT_NEW_MEMBER_POPUP_PANEL: any) {
    console.log(value, "SubmitButton")
    if (value?.status == "VALID") {
      value.value['role'] = this.LIST_ROLE[value.value['role']]
      value.value['DMS'] = this.userData['result']['DMS'];
      value.value['Teasury'] = this.userData['result']['Teasury'];
      value.value['Transaction'] = this.userData['result']['Transaction'];
      value.value['imageUrl'] = this.img != undefined ? this.img : this.SELECTED_EDIT_DATA['imageUrl'];
      this.userService?.UpdateUserMemeber(value.value['email'], value.value).subscribe(data => {
        console.log("king123")
        console.log(data)
        EDIT_NEW_MEMBER_POPUP_PANEL?.displayHidden;
        EDIT_NEW_MEMBER_POPUP_PANEL?.resetForm;
        this.toastr?.success('Successfully Update data...');
        this.userService?.getMemeber(this.id).subscribe(data1 => {
          console.log("king123")
          console.log(data1)
          this.item1 = data1['data']
          console.log(this.item1['length'])
        }, error => {
          console.log("error")
        });
      });
    }
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
    console.log(formmodel)
    this.findEmptyObject(this.EDIT_FORM_BUILDER, [undefined, null, '', 'Select Subscription']).then((value: any) => {
      if (value == true) {
        this.EDIT_FORM_BUILDER['UnderSubscription'] = this.EDIT_FORM_BUILDER['UnderSubscription'] != undefined ? this.EDIT_FORM_BUILDER['UnderSubscription'] : this.SELECTED_EDIT_DATA['Subscription'];
        this.EDIT_FORM_BUILDER['imageUrl'] = this.img != undefined ? this.img : this.SELECTED_EDIT_DATA['imageUrl'];
        this.EDIT_FORM_BUILDER['Role_Type'] = this.ROLE_TYPES != '' ? this.ROLE_TYPES : this.userData?.result['Role_Type'];
        this.EDIT_FORM_BUILDER['UnderSubscriptionCheckBox'] = this.ROLE_TYPES != '' ? this.ROLE_TYPES : this.EDIT_FORM_BUILDER['UnderSubscriptionCheckBox'];

        this.EDIT_FORM_BUILDER['DMS'] = this.userData['result']['DMS'];
        this.EDIT_FORM_BUILDER['Teasury'] = this.userData['result']['Teasury'];
        this.EDIT_FORM_BUILDER['Transaction'] = this.userData['result']['Transaction'];

        console.log(this.EDIT_FORM_BUILDER, 'this.memeberForm')
        this.userService?.UpdateUserMemeber(this.SELECTED_EDIT_DATA['email'], this.EDIT_FORM_BUILDER).subscribe(
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
