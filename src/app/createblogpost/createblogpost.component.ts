import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-createblogpost',
  templateUrl: './createblogpost.component.html',
  styleUrls: ['./createblogpost.component.css']
})
export class CreateblogpostComponent implements OnInit {
  input;
  imgLink: string;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  uploadPhoto(): void {
    this.input = document.querySelector('#imgupload');
    let imgPreview = document.querySelector('img');
    console.log(this.input.files[0]);
    this.imageService.uploadImage(this.input.files[0]).subscribe(
     data =>  
      {
      this.imgLink = data;
      imgPreview.src = data;
      console.log("link: " + this.imgLink);
      }
    );

  }

}
