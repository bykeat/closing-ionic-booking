import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) { }

  async setPassengers() {
    const alert = await this.alertController.create({
      header: "How many going?",
      inputs: [
        {
          name: "passengers",
          type: "number",
        }
      ],
      buttons: [
        {
          text: "Set",
          handler: (e) => {
            this.updatePassenger(e.passengers);
          },

        }, {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  updatePassenger(count) {
    const passengerCountElement = document.getElementById("passenger_count");
    passengerCountElement.innerHTML = count;
  }

  setPickupTime() {
    document.getElementById("datetime").click();
  }

  calculateFare() {
    const pickupDateElement = document.getElementById("datetime");
    const passengerCountElement = document.getElementById("passenger_count");
    const routeDistanceElement = document.getElementById("route_distance");
  }
}
