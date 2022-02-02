import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private token: TokenService, private router: Router){}

  ngOnInit(): void {
    this.obterToken()
  }

  title = 'FinanceiroCobranca';

  obterToken(){
    this.token.obterToken()
    .subscribe(
      res => {
          setTimeout(()=>{
          sessionStorage.setItem("user", res.user.username);
          sessionStorage.setItem("token", res.token);
          this.router.navigate(['/lotes'])
        },500)

      }
    )
  }

}
