import { Component } from '@angular/core';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'basic.html'
})
export class XButtonBasicPage 
{
	constructor(private camera: Camera,private appVersion: AppVersion) 
	{
		// alert(this.appVersion.getAppName());
		// alert(this.appVersion.getPackageName());
		// alert(this.appVersion.getVersionCode());
		// alert(this.appVersion.getVersionNumber());
	}

	
}
