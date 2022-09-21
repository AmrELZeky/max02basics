import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Respies Website';
  selectedLink:string='recipe';

  onNavigate(selectedLink:string){
    this.selectedLink=selectedLink;
  }
}
