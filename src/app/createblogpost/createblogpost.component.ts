import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';
import { PostRequestPayload } from './post-request.payload';
import { BlogpostService } from '../service/blogpost.service';

@Component({
  selector: 'app-createblogpost',
  templateUrl: './createblogpost.component.html',
  styleUrls: ['./createblogpost.component.css']
})
export class CreateblogpostComponent implements OnInit {
  input;
  imgLink: string;

  constructor(private imageService: ImageService,
     private blogpostService: BlogpostService) { }

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

  createPost(): void{
    let createdPost: PostRequestPayload = {
      username: "asdf",
      title: (document.getElementById("titleField") as HTMLInputElement).value,
      blurb: "asdf",
      fulltext: (document.getElementById("fulltextField") as HTMLInputElement).value,
      imagelink: this.imgLink,
      tags: null
    }
    console.log(createdPost.title);
    this.blogpostService.blogpostConnector(createdPost);
  }
  
  CreateTag(): void{
  var string = 'one, two, test, word, rummy, words';
  var arr = string.split(', ');
  console.log( arr );
  }

}
