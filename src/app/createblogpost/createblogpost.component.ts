import { Component, OnInit } from '@angular/core';

import { PostRequestPayload } from './post-request.payload';

import { ImageService } from '../service/image.service';

import { Tag } from '../tag';
import { AuthserviceService } from '../service/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {PostService} from '../service/post.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-createblogpost',
  templateUrl: './createblogpost.component.html',
  styleUrls: ['./createblogpost.component.css']
})
export class CreateblogpostComponent implements OnInit {
  input;
  imgLink: string;
  prevLink: string;
  tagsPresent: string;
  postRequestPayload: PostRequestPayload;

  constructor(private imageService: ImageService,
              private authService: AuthserviceService,
              private postService: PostService,
              private router: Router,
              private toastr: ToastrService) {
                this.postRequestPayload = {
                  username: "",
                  title: "",
                  blurb: "",
                  fulltext: "",
                  imagelink: "",
                  tags: []
                }
               }

  ngOnInit(): void {
    const imgSelector = document.getElementById('imgupload');
    imgSelector.addEventListener('change', this.imageChanged);
  }

  imageChanged() {
    console.log("image changed");
    let img = (document.getElementById('imgupload') as HTMLInputElement);
    let preview = (document.getElementById('imgpreview') as HTMLImageElement);
    console.log(URL.createObjectURL(img.files[0]));
    preview.src = URL.createObjectURL(img.files[0]);
  }

  async uploadPhotoAndSendPost() {
    let input = (document.querySelector('#imgupload') as HTMLInputElement);
    let button = (document.getElementById("postButton") as HTMLButtonElement);
    let loadingText = document.getElementById("loadingText");
    let loadingWheel = document.getElementById("loadingWheel");
    button.disabled = true;
    loadingText.hidden = false;
    loadingWheel.hidden = false;
    console.log(input.files[0]);
    this.imageService.uploadImage(input.files[0]).subscribe(
     data =>
      {
      this.imgLink = data;
      console.log('link: ' + this.imgLink);
      this.createPost();
      button.disabled = false;
      loadingText.hidden = true;
      loadingWheel.hidden = true;
      }
    );
  }

  async createPost(): Promise<void>{
    //await this.uploadPhoto();

    let createdPost: PostRequestPayload = {
      username: this.authService.getUserName(),
      title: (document.getElementById('titleField') as HTMLInputElement).value,
      blurb: (document.getElementById('blurbField') as HTMLInputElement).value,
      fulltext: (document.getElementById('fulltextField') as HTMLInputElement).value,
      imagelink: this.imgLink,
      tags: this.convertTagsFromLongStringToIndividualTags((document.getElementById('tagsField') as HTMLInputElement).value)
    };

    console.log(createdPost.title);

    this.postService.blogpostConnector(createdPost)
     .subscribe(
       () => {
       this.router.navigate(['/home'], { queryParams: { postSuccessful: 'true' } });
     }, err => {
       this.toastr.error('Something went wrong! Please try again.');
    });
  }

  convertTagsFromLongStringToIndividualTags(t: string): Tag[]{
      return this.convertStringArrayToTagArray(this.separateTags(t));
  }

  convertStringArrayToTagArray(tagStrings: string[]): Tag[]{
    const newTags: Tag[] = [];
    for (const s of tagStrings){
        const newTag: Tag = {
          tagName: s
        };
        newTags.push(newTag);
    }
    return newTags;
  }

  separateTags(tagsToBeSeparated: string): string[]{
  const arr = tagsToBeSeparated.split(', ');
  return arr;
  }

// -If we want to make images a required part of each blogpost, I'll need to make it so that the "post" button is disabled until the image is done uploading to our S3 bucket.
// -I need to make it so that people can't abuse the "upload" button.



}
