import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardContainerComponent } from './components/board-container/board-container.component';
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [
    BoardContainerComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
