import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService {
  public role;
  public authToken;
  public name;
  constructor(private http: HttpClient) { }

  public addToken(token) {
    console.log(token);
    localStorage.setItem("token", token);
    this.authToken = token;
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  register(user) {
    return this.http.post(`http://localhost:3000/v1/authenticate/signup`, {
      fullName: user.fullName,
      emailId: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      role: user.role
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
      `http://localhost:3000/v1/authenticate/login`,
      null,
      httpOptions
    );
  }

  public updatePsw(data, email) {
    return this.http.put(`http://localhost:3000/v1/authenticate/updatepsw`, {
      newPassword: data.password1,
      emailId: email,
    });
  }

  public forgotpsw(loginData) {
    return this.http.put(`http://localhost:3000/v1/authenticate/forgotpsw`, {
      emailId: loginData.emailId,
    });
  }

  public creatTeam(team) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/team/post`,
      {
        team: team,
      },
      httpOptions
    );
  }

  verify(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/otp/verify",
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
      "http://localhost:3000/v1/otp/delete",
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
    return this.http.post(
      `http://localhost:3000/v1/team/get`,
      {
        team: "team",
      },
      httpOptions
    );
  }

  updateTeam(team) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/team/update`,
      {
        team: team,
      },
      httpOptions
    );
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
      `http://localhost:3000/v1/pipo/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

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
      `http://localhost:3000/v1/pipo/updateSingle`,
      {
        id: id,
        file: file,
        doc: doc
      },
      httpOptions
    );
  }

  updateManyPipo(pipo, file, doc) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(file)
    console.log(pipo)
    console.log(doc)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/pipo/updateMany`,
      {
        pipo: pipo,
        file: file,
        doc: doc
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
    return this.http.post(
      `http://localhost:3000/v1/team/getUser`,
      {
        team: "team",
      },
      httpOptions
    );
  }

  public creatBene(bene) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/bene/post`,
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
      `http://localhost:3000/v1/bene/get`,
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
      `http://localhost:3000/v1/bene/getSingleBene`,
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
      `http://localhost:3000/v1/bene/update`,
      {
        id: id,
        bene: bene,
      },
      httpOptions
    );
  }

  public addMemeber(id, member) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/member/post`,
      {
        id: id,
        member: member,
      },
      httpOptions
    );
  }
  public getMemeber(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/member/get`,
      {
        teamId: id,
      },
      httpOptions
    );
  }

  addpipo(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/pipo/post`,
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
      `http://localhost:3000/v1/pipo/get`,
      { pi_poNo: pipoNumber },
      httpOptions
    );
  }

  getUserDetail() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http
      .get(`http://localhost:3000/v1/user/profile`, httpOptions)
      .toPromise();
  }

  getBeneByName(name) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http
      .post(
        `http://localhost:3000/v1/bene/getByName`,
        { beneName: name },
        httpOptions
      ).toPromise();

  }
}
