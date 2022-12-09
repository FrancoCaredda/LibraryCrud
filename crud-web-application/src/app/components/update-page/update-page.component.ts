import { Component } from '@angular/core';

import { Book } from 'src/app/core/model/book';
import { DataService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {
  public oldTitle: string = "";
  public title: string = "";
  public count: any = 0;

  public constructor(private service: DataService) {

  }

  public onOldTitleChange(e: Event) {
    this.oldTitle = (<HTMLInputElement>e.target).value;
  }

  public onTitleChange(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }

  public onCountChange(e: Event) { 
    this.count = (<HTMLInputElement>e.target).value;
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    this.service.updateData(this.oldTitle, new Book(this.title, this.count)).subscribe(
      (k) => alert("Success!"),
      (error) => alert("Can't update the data")
    );
  }
}
