import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from '../../../../environments/environment';
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Injectable({ providedIn: "root" })
export class filterAnyTablePagination implements OnInit {
    public authToken;
    api_base: string;
    USER_RESULT: any = [];
    constructor(private http: HttpClient, public router: Router) {
        this.api_base = AppConfig.BASE_URL;
        console.log(this.api_base)
        this.loadFromLocalStorage();
    }

    ngOnInit(): void {

    }

    public loadFromLocalStorage() {
        const token = sessionStorage.getItem("token");
        this.authToken = token;
        return this.authToken;
    }

    PaginationfilterAnyTable(query, filterPage, table_name: any) {
        this.loadFromLocalStorage();
        const httpOptions = {
            headers: new HttpHeaders({ Authorization: this.authToken }),
        };
        console.log(query, 'filterAnyTablePagination')
        return this.http.post(`${this.api_base}/Pagination/filterAnyTablePagination`, { query: query, tableName: table_name, filterPage: filterPage }, httpOptions);
    }

    PaginationfilterAnyTableList(ID_List) {
        console.log(ID_List, 'filterAnyTablePagination')
        let API_CREATE: any = [];
        this.loadFromLocalStorage();
        console.log(this.authToken);
        const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
        for (let index = 0; index < ID_List.length; index++) {
            const element = ID_List[index];
            API_CREATE.push(this.http.post(`${this.api_base}/Pagination/filterAnyTablePagination`, { query: element?.query, tableName: element?.tableName, filterPage: element?.filterPage }, httpOptions))
        }
        return forkJoin(API_CREATE);
    }

    //   PaginationAnyUpdateTable(id,query, table_name: any) {
    //     this.loadFromLocalStorage();
    //     console.log(this.authToken);
    //     const httpOptions = {
    //       headers: new HttpHeaders({ Authorization: this.authToken }),
    //     };
    //     console.log(query, 'filterAnyTable')
    //     return this.http.post(`${this.api_base}/Pagination/UpdateAnyTable`, {id:id ,query: query, tableName: table_name }, httpOptions);
    //   }

}
