import { Component, OnInit } from '@angular/core';

import { PostRequestPayload } from './post-request.payload';

import { ImageService } from '../service/image.service';

import { Tag } from '../tag';
import { AuthserviceService } from '../service/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {PostService} from '../service/post.service';



@Component({
  selector: 'app-createblogpost',
  templateUrl: './createblogpost.component.html',
  styleUrls: ['./createblogpost.component.css']
})
export class CreateblogpostComponent implements OnInit {
  input;
  imgLink: string;
  postDisabled = true;

  constructor(private imageService: ImageService,
              private authService: AuthserviceService,
              private postService: PostService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  uploadPhoto(): void {
    this.input = document.querySelector('#imgupload');
    const imgPreview = document.querySelector('img');
    console.log(this.input.files[0]);
    this.imageService.uploadImage(this.input.files[0]).subscribe(
     data =>
      {
      this.imgLink = data;
      imgPreview.src = data;
      console.log('link: ' + this.imgLink);
      this.postDisabled = false;
      console.log(this.postDisabled);
      }
    );

  }

  createPost(): void{

    const createdPost: PostRequestPayload = {
      username: this.authService.getUserName(),
      title: (document.getElementById('titleField') as HTMLInputElement).value,
      blurb: (document.getElementById('blurbField') as HTMLInputElement).value,
      fulltext: (document.getElementById('fulltextField') as HTMLInputElement).value,
      imagelink: this.imgLink,
      tags: this.convertTagsFromLongStringToIndividualTags((document.getElementById('tagsField') as HTMLInputElement).value)
    };

    console.log(createdPost.title);

    this.postService.blogpostConnector(createdPost).subscribe(() => {
      this.router.navigate(['/'], { queryParams: { createdPost: 'true' } });
    }, () => {
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
