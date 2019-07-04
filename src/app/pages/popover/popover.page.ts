import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent, // Manda a llamar al componente y despues a la pagina
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const {data} = await popover.onDidDismiss(); // Una vez se cierre por completo
    const {data} = await popover.onWillDismiss(); // cuando este apunto de cerrar

    console.log('Padre', data);
  }

}
