import { Component, OnInit } from '@angular/core';
import { snapModels } from './models/snapModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  postSnap! : snapModels;

  ngOnInit() {
    this.postSnap=new snapModels(
      "Meuble",
      "ce Meuble est tellement jolie qu'il m'en faudrais dans ma chambe",
      "https://media.gettyimages.com/id/1293762741/fr/photo/int%C3%A9rieur-moderne-de-salle-de-vie-rendu-3d.jpg?s=612x612&w=0&k=20&c=BKixm6wq1Y6NFFF-8XllknUQvSboRmCmjn_Lm_erHmQ=",
      new Date(),
      3
    );

      
  }

}
