import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-app-seguradora';

  alertOptions: any = {
		timeOut: 5000,
		preventLastDuplicates: true,
		maxStack: 3,
		showProgressBar: true
	}

  strRenaval = ''
  veiculo = {}
  sendVeiculo = false

  constructor() { }

}
