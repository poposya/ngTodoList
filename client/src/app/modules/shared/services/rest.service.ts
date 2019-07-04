import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment";
import { TodoList } from "../models";

type RequestMethod = "get" | "post" | "put" | "delete";

@Injectable()
export class RestService {
  private prefixRestPath: string = environment.backEndUrl || "";

  constructor(private http: HttpClient) {}

  public Todos() {
    return {
      getTodos: () => this.makeRequest("get", "getTodos"),
      getTodoList: (todoListId: string) => this.makeRequest("get", `getTodoById/${todoListId}`),
      saveTodoList: (payload: TodoList) => this.makeRequest("post", "saveTodoList", payload),
      deleteTodoList: (todoListId: string) => this.makeRequest("delete", `deleteTodoListById/${todoListId}`),
    };
  }

  private makeRequest<T>(
    method: RequestMethod,
    restUrl: string,
    body: T = null,
    params: any = {},
    file: boolean = false,
  ): Observable<any> {
    const url = `${this.prefixRestPath}/${restUrl}`;

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
    return headers;
  }
}
