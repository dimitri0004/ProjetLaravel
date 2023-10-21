import { Component,  Input,  OnInit } from '@angular/core';
import { snapModels } from '../models/snapModels';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: snapModels;


  
  button!: string;

  ngOnInit() {
    
    this.button="snap"
  }

  onSnap(){
    if(this.button==="snap"){
      this.facesnap.snap++;
      this.button="Tks Snap";
    }else{
      this.facesnap.snap--
      this.button="snap"
    }
    
  }
  

}
