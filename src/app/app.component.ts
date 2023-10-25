import { Component, OnInit } from '@angular/core';
import { snapModels } from './models/snapModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  postSnap! : snapModels[];
  /*mySnap! : snapModels;
  myOtherSnap! : snapModels;
  myLastSnap! : snapModels;*/

  ngOnInit() {
    this.postSnap = [
      {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      dateCreation: new Date(),
      localisation:"kara",
      snap: 500
    },
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      dateCreation: new Date(),
      snap: 0
    },
    {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      dateCreation: new Date(),
      localisation:"lome",
      snap: 0
    }

  ]   ;
  }
 

}
