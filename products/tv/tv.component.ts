import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this._router.navigate(['products']);
  }
}
