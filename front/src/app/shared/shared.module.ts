import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatMenuModule,
        MatListModule,
    ],
})
export class SharedModule {}
