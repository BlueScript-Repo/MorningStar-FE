import { Component } from '@angular/core';
import {PackageServiceService} from './package-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  constructor(public authService:PackageServiceService){}
    ngOnInit(): void {
  }
}
