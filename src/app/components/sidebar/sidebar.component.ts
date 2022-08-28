import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output()
  envSelected = new EventEmitter<string>();
  
  envSelect( env: string){
    this.envSelected.emit(env);
    
  }
  ngOnInit(): void {
  }

}
