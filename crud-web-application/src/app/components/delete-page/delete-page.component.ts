import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data-service.service';


//TODO: Implement 
@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent {
  public title: string = "";

  public constructor(private service: DataService) {

  }

  public onTitleChange(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    this.service.deleteData(this.title).subscribe(
      (k) => alert("Success!"),
      (error) => alert("Can't delete the data")
    );
  }
}
