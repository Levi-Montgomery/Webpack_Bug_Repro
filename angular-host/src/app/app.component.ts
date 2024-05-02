import { CUSTOM_ELEMENTS_SCHEMA, Component, AfterContentInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registry } from './remote';

        
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit {
  public async ngAfterContentInit(): Promise<void> {
    await registry.mfe();
  }
  title = 'angular-host';
}
