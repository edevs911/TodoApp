import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user: any;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userEmmiter.subscribe(user =>{
      this.user = user;
    })
  }

}
