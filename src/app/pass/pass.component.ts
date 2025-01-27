import { Component, createNgModule, OnInit, signal } from '@angular/core';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-pass',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatInputModule, ReactiveFormsModule,MatIconModule],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

   
    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }
  }


