import { Injectable } from '@angular/core';
import { Book } from '../model/book';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Array<Book> = [];

  constructor(private httpClient: HttpClient) { }

  private convertToJSON(book: Book) {
    return {
      title: book.getTitle(),
      count: book.getCount()
    };
  }

  public updateData(title: string, book: Book) {
    return this.httpClient.put("https://localhost:7085/api/Data/" + title, this.convertToJSON(book), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public insertData(book: Book) {
    return this.httpClient.post("https://localhost:7085/api/Data", this.convertToJSON(book), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public deleteData(title: string) {
    return this.httpClient.delete("https://localhost:7085/api/Data/" + title);
  }

  public getData() {
    return this.httpClient.get("https://localhost:7085/api/Data");
  }
}
