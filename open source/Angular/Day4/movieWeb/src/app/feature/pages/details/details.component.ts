import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { ImagePathPipe } from "../../../shared/pipes/image-path.pipe";

@Component({
  selector: 'app-details',
  imports: [ImagePathPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  _route = inject(ActivatedRoute);
  _apiService = inject(ApiService);
  details!: any;

  ngOnInit(): void {
    this.getDetails()
  }
  getDetails() {
    const type = this._route.snapshot.params['type'];
    const id = this._route.snapshot.params['id'];

    this._apiService.getDetails(type, id).subscribe({
      next:(res)=>{
        console.log(res)
        this.details =res;
        console.log(this.details)
      },
      error(err) {
          console.log(err)
      },
      complete() {
        console.log('completed')

      },
    });
  }
}
