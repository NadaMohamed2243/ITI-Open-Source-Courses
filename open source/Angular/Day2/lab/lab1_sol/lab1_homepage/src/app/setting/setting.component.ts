import { Component } from '@angular/core';
import { ProfileSettingComponent } from '../profile-setting/profile-setting.component';
@Component({
  selector: 'app-setting',
  imports: [ProfileSettingComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  userName = 'John Doe';
}
