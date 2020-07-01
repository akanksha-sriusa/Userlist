import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  changeText:String = "click here" ;

  textStatus = 'No server was created !';

  serverID : Number=10;
  serverStatus: String ='offline';


  constructor() {
   setTimeout(() => { this.changeText = "click here";},2000);
   }

  // onCreateText() {
    // this.textStatus = 'server was created ';
   //}
  ngOnInit() {
  }



}
