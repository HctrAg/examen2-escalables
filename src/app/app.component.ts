import { Component } from '@angular/core';
import { GeneralViewComponent } from "./components/general-view/general-view.component";
import { NgFor } from '@angular/common';
import { ListComponent } from "./components/list/list.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralViewComponent, NgFor, ListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
