import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this._router.navigate(['products']);
  }
}
