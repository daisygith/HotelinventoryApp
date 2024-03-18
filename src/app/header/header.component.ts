import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../serivces/config.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  title : string = '';

  constructor(private configService: ConfigService) {
  }
  ngOnInit(): void {
  }

}
