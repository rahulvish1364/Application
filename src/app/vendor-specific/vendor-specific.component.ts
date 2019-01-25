import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-specific',
  templateUrl: './vendor-specific.component.html',
  styleUrls: ['./vendor-specific.component.css']
})
export class VendorSpecificComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  OnReload(){
    this.router.navigate(['/vendor'], {relativeTo: this.route})

  }
}
