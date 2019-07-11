import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// import { environment } from "../../../../environments/environment";
import { TodoList } from "../models";

@Injectable()
export class RestService {
  public headers: HttpHeaders;
  // private prefixRestPath: string = environment.backEndUrl || "";
  private user: any;

  constructor(private http: HttpClient) {}

  public Todos() {
    return {
      getTodos: () => this.makeRequest("get", "todos"),
      addTodoList: (payload: TodoList) => this.makeRequest("post", "todos", payload),
      deleteTodoList: (todoListId: string) => this.makeRequest("delete", `todos/${todoListId}`),
      getTodoList: (todoListId: string) => this.makeRequest("get", `todo/${todoListId}`),
      updateTodoList: (payload: TodoList) => this.makeRequest("put", "todo", payload),
    };
  }

  private makeRequest(method: string, restUrl: string, body?: any, params?: any, file?: boolean): Observable<any> {
    const url = "/api/" + restUrl; // this.prefixRestPath + "api/v1" + restUrl;

    const options: any = {
      headers: this.createHeaders(file),
    };
    const opts = {};
    if (params) {
      const keys = Object.keys(params);
      keys.map(key => {
        if (params[key]) {
          opts[key] = params[key];
        }
      });
    }
    if (method === "get" || method === "delete") {
      options.params = opts;
      return this.http[method](url, options);
    } else {
      options.params = opts;
      return this.http[method](url, body, options);
    }
  }

  private createHeaders(file?) {
    let headers = new HttpHeaders();
    if (!file) {
      headers = headers.set("Content-Type", "application/json");
    }
    if (this.user) {
      const token = this.user.token;
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
}
