import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khoisanpham3',
  templateUrl: './khoisanpham3.component.html',
  styleUrls: ['./khoisanpham3.component.css']
})
export class Khoisanpham3Component implements OnInit {
  menusanphams:any[] = ['Goplus', 'Vinamilk', 'Th TruMilk'];

  constructor() { }

  ngOnInit(): void {
  }

}
