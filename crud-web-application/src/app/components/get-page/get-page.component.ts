import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/model/book';
import { DataService } from 'src/app/core/services/data-service.service';

//TODO: Implement 
@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {
  public data: Array<Book> = [];
  public bookName: string = "";

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data: any) => Object.keys(data).map((key) => data[key]).map((book) => this.data.push(new Book(book.title, book.count))),
      (error) => alert("Can\'t read books from server!")
    );  
  }

  private updateBookCount(delta: any): void {
    let book = this.data.find((b) => { return b.getTitle() == this.bookName });
    if (book != null) {
      if (book.getCount() == 0 && delta < 0) {
        alert("There is no more copies of the book!");
        return;
      }
      let count = parseInt(book.getCount().toString()) + delta;
      this.service.updateData(book.getTitle(), new Book(book.getTitle(), count)).subscribe(
        (e) => alert("Success"),
        (error) => alert("Can\'t update the data!")
      );
    } else {
      alert("This book does not exist!");
    }
  }

  public changeName(e: Event) {
    this.bookName = (<HTMLInputElement>e.target).value;
  }

  public getBook(e: Event) {
    console.log(this.bookName);
    this.updateBookCount(-1);
    window.location.reload();
  }

  public returnBook(e: Event) {
    this.updateBookCount(1);
    window.location.reload();
  }
}
