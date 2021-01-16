import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
    .subscribe(params => {
      if (params.postSuccessful !== undefined && params.postSuccessful === 'true')

          this.toastrService.success('Post Created');
    }
    );

  }

}
