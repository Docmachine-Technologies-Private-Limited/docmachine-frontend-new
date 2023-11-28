import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { BehaviorSubjectListService } from "../home/CommanSubjectApi/BehaviorSubjectListService/BehaviorSubjectList.service";

@Injectable({ providedIn: "root" })
export class UserService implements OnInit {
  public role;
  public authToken;
  public name;
  api_base: string;
  userData;
  USER_RESULT: any = [];
  public loginData = new BehaviorSubject({});
  public userDataListener$ = this.loginData.asObservable();
  constructor(private http: HttpClient, public router: Router, public SubjectListService: BehaviorSubjectListService) {
    this.api_base = AppConfig.BASE_URL;
    console.log(this.api_base)
  }
  ngOnInit(): void {
    // this.SubjectListService.callAllCommonApi();
  }
  public addLoginData(data) {
    this.loginData.next(data);
    this.userData = data
  }

  public addToken(token) {
    console.log(token);
    sessionStorage.setItem("token", token);
    this.authToken = token;
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  register(user) {
    return this.http.post(`${this.api_base}/authenticate/signup`, {
      user: user
    });
  }

  deleteUser(id) {
    return this.http.post(`${this.api_base}/authenticate/deleteUser`, {
      id: id
    });
  }

  public login(loginData) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + btoa(loginData.email + ":" + loginData.password),
      }),
    };
    console.log('httpOptions');
    console.log(httpOptions);

    return this.http.post(
      `${this.api_base}/authenticate/login`,
      null,
      httpOptions
    );
  }


  Rolelogin(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken, data);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + btoa(data.emailId + ":" + data.password),
      }),
    };
    console.log('httpOptions');
    console.log(httpOptions);
    return this.http.post(`${this.api_base}/authenticate/SingIn`, null, httpOptions);
  }

  public getUserbyEmail(loginData) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    console.log(httpOptions);
    return this.http.post(`${this.api_base}/authenticate/getUserbyEmail`, loginData, httpOptions);
  }

  public updatePsw(data, email) {
    return this.http.put(`${this.api_base}/authenticate/updatepsw`, {
      newPassword: data.password1,
      emailId: email,
    });
  }

  public updateOneUser(data, value, emailId) {
    return this.http.put(`${this.api_base}/authenticate/updateOneUser`, {
      id: data,
      data: value,
      emailId: emailId
    });
  }

  public updateEmail(data, email) {
    return this.http.put(`${this.api_base}/authenticate/updateemail`, {
      data: data,
      emailId: email,
    });
  }

  public forgotpsw(loginData) {
    return this.http.put(`${this.api_base}/authenticate/forgotpsw`, {
      emailId: loginData.emailId,
    });
  }

  public documentSend(id, byteArray) {
    return this.http.post(`${this.api_base}/authenticate/documentSend`, {
      emailId: id,
      byteArray: byteArray
    });
  }

  public documentSendMail(id, byteArray) {
    return this.http.post(`${this.api_base}/authenticate/documentSendMail`, {
      emailId: id,
      byteArray: byteArray
    });
  }


  public getAllUser() {
    return this.http.get(`${this.api_base}/authenticate/getAllUser`).toPromise();
  }

  public creatTeam(team) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/team/post`, { team: team }, httpOptions);
  }

  public createTeamUser(team, id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/post`, { team: team, userId: id }, httpOptions);
  }

  verify(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/otp/verify`,
      {
        data: data,
      },
      httpOptions
    );
  }
  SingUpVerify(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/otp/SingUpverify`, data,
      httpOptions
    );
  }
  loginVerfiy(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/otp/login/verify`,
      {
        data: data,
      },
      httpOptions
    );
  }

  loginlogout(bool) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/otp/loginlogout`, { status: bool }, httpOptions);
  }


  deleteUser_Role(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/member/deleteUserRole`,
      {
        data: data,
      },
      httpOptions
    );
  }
  delete(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/otp/delete`,
      {
        data: data,
      },
      httpOptions
    );
  }

  public getTeam() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/get`, { team: "team" }, httpOptions);
  }
  public getTeambyId(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/getbyid`, { id: id }, httpOptions);
  }
  public getTeamByUser(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/authenticate/getUser`, { companyId: id }, httpOptions);
  }

  updateTeam(team) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/team/update`,
      {
        team: team,
      },
      httpOptions
    );
  }

  updateTeamById(team, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/Team_Update`, { team: team, id: id }, httpOptions);
  }

  mergePdf(filename) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
      responseType: "blob"
    };
    return this.http.post(
      `${this.api_base}/pipo/mergePdf`,
      {
        filename: filename
      },
      httpOptions,
    );
  }

  ConvertPdfImage(filename) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),

    };
    return this.http.post(`${this.api_base}/pipo/ConvertPdfImage`, { filename: filename }, httpOptions);
  }

  ConvertPdfDocx(filename) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/pipo/ConvertPdfDocx`, { filename: filename }, httpOptions);
  }

  MultipleMergePdf(filename) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/pipo/multiplemergePdf`, { filename: filename }, httpOptions);
  }
  mergePdfPromise(filename) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return new Promise((resolve, reject) => {
      this.http.post(`${this.api_base}/pipo/mergePdf`, { filename: filename }, httpOptions).subscribe((res: any) => resolve(res))
    });
  }
  mergeListPdf(filename) {
    this.loadFromLocalStorage();
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
      responseType: "arraybuffer"
    };
    return this.http.post(`${this.api_base}/pipo/doc_mergePdf`, { doclist: filename }, httpOptions);
  }
  mergePdfChecking(filename) {
    this.loadFromLocalStorage();
    const httpOptions: Object = {
      headers: new HttpHeaders({ Authorization: this.authToken })
    };
    return this.http.post(`${this.api_base}/pipo/mergePdf`, { url: filename }, httpOptions);
  }



  updatePipo(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // mergePdf(){

  // }

  updateSinglePipo(id, file, doc) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(file)
    console.log(id)
    console.log(doc)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/updateSingle`,
      {
        id: id,
        file: file,
        doc: doc
      },
      httpOptions
    );
  }

  updateManyPipo(pipo, file, doc, updatedData = {}) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(file)
    console.log(pipo)
    // console.log(doc)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let data = {
      pipo: pipo,
      file: file,
      ...updatedData,
      doc: doc
    };

    return this.http.post(
      `${this.api_base}/pipo/updateMany`,
      data,
      httpOptions
    );
  }

  updateManyPipo1(pipo, file) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(file)
    console.log(pipo)
    // console.log(doc)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/updateMany1`,
      {
        pipo: pipo,
        file: file
      },
      httpOptions
    );
  }

  public getUser() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/getUser`, { team: "team", }, httpOptions);
  }



  public getUserById(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/getUserById`, { email: id }, httpOptions);
  }

  public creatBene(bene) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/bene/post`,
      {
        bene: bene,
      },
      httpOptions
    );
  }

  getBene(boeNumber) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/bene/get`,
      {
        boeNumber: boeNumber,
      },
      httpOptions
    );
  }

  getSingleBene(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/bene/getSingleBene`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateBene(id, bene) {
    console.log("BENNNE", bene);
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/bene/update`,
      {
        id: id,
        bene: bene,
      },
      httpOptions
    );
  }

  deleteBene(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/bene/delete`, { id: id }, httpOptions).toPromise();
  }

  getBeneByName(name) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http
      .post(
        `${this.api_base}/bene/getByName`,
        { benneName: name },
        httpOptions
      ).toPromise();

  }

  public creatBuyer(buyer) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/buyer/post`,
      {
        buyer: buyer,
      },
      httpOptions
    );
  }

  getBuyer(boeNumber) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/buyer/get`,
      {
        boeNumber: boeNumber,
      },
      httpOptions
    );
  }

  getSingleBuyer(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/buyer/getSingleBuyer`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateBuyer(id, buyer) {
    console.log("BENNNE", buyer);
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/buyer/update`,
      {
        id: id,
        buyer: buyer,
      },
      httpOptions
    );
  }

  deleteBuyer(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/buyer/delete`, { id: id }, httpOptions).toPromise();
  }

  getBuyerByName(name) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http
      .post(
        `${this.api_base}/buyer/getByName`,
        { buyerName: name },
        httpOptions
      ).toPromise();

  }

  public addMemeber(id, member) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/member/post`,
      {
        id: id,
        member: member,
      },
      httpOptions
    );
  }
  public QR_RESET(userdetails) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    return this.http.post(`${this.api_base}/authenticate/qrreset`, { userdetails: userdetails, });
  }
  public UpdateMemeber(id, member) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/member/update`,
      {
        id: id,
        member: member,
      },
      httpOptions
    );
  }
  public UpdateUserMemeber(id, member) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/member/UPDATE_USER_MEMBER`, { email: id, member: member }, httpOptions);
  }

  public UploadS3Buket(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/documents/uploadFiletoS3Bucket`, data, httpOptions);
  }

  public getReadS3File(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/documents/getReadS3File`, data, httpOptions);
  }

  public getMemeber(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/member/get`, { teamId: id }, httpOptions);
  }

  addpipo(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/post`,
      { pipo: pipo },
      httpOptions
    );
  }

  getPipo(pipoNumber) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/pipo/get`,
      { pi_poNo: pipoNumber },
      httpOptions
    );
  }

  getManyPipo(pipoNumber) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/pipo/getMany`,
      { pipo: pipoNumber },
      httpOptions
    );
  }

  getUserDetail() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/user/profile`, httpOptions).toPromise();
  }
  getUser_Profile() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/user/profile`, httpOptions);
  }
  getUserDetailById(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/user/getprofilebyId`, { email: id }, httpOptions).toPromise();
  }
  getEamilByIdUserMember(id: any) {
    return this.http.post(`${this.api_base}/authenticate/getEamilByIdUserMember`, { email: id }).toPromise();
  }
  getEamilByIdUserMemberDetails(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/user/getEamilByIdUserMember`, { email: id }, httpOptions).toPromise();
  }
  getAllUserMember() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/user/getAllUserMember`, httpOptions).toPromise();
  }

  getAllCompanyId() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/companyinfo/getAllCompanyId`, httpOptions).toPromise();
  }

  DeleteAllCompanyIddata(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/companyinfo/deletealldata`, { companyId: id }, httpOptions).toPromise();
  }

  getCollectionNameData(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/companyinfo/getCollectionNameData`, data, httpOptions).toPromise();
  }

  AddDataTabel(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/companyinfo/add`, data, httpOptions).toPromise();
  }

  DeletebyCollectionName(id: any, name: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/companyinfo/deletebyCollectionName`, { companyId: id, CollectionName: name }, httpOptions).toPromise();
  }

  Url_Change_Authorization(name_url: any) {
    this.router.navigate([name_url]);
  }

  RoleBaseSingUp(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    // return this.http.post(`${this.api_base}/authenticate/signup`, { user: data});
    return this.http.post(`${this.api_base}/RoleBaseSingInSingUp/SingUp`, data, httpOptions);
  }

  public RoleBaseSingUpupdateEmail(data, email) {
    return this.http.put(`${this.api_base}/authenticate/RoleBase_Update_Email`, {
      data: data,
      emailId: email,
    });
  }

}
