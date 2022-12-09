import { Component } from '@angular/core';
import { Book } from 'src/app/core/model/book';
import { DataService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent {
  public title: string = "";
  public count: any = 0;

  public constructor(private service: DataService) {

  }

  public onTitleChange(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }

  public onCountChange(e: Event) { 
    this.count = (<HTMLInputElement>e.target).value;
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    this.service.insertData(new Book(this.title, this.count)).subscribe(
      (k) => alert("Success!"),
      (error) => alert("Can't insert the data")
    );
  }
}
