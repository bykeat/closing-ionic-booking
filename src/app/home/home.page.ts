import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public booking_detail: Object = {
    book_option: "book"
  }

  constructor(public alertController: AlertController) {

  }

  updateBookOption(option) {

    const element = document.getElementById("datetime");
    if (element) {
      element.setAttribute("disabled", option === "book" ? "true" : "false");
      console.log(element);
    }

    this.booking_detail = {
      ...this.booking_detail,
      book_option: option
    }
  }

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
    this.booking_detail = {
      ...this.booking_detail,
      passengers: count
    }
  }

  setPickupTime() {
    document.getElementById("datetime").click();
  }

  updatePickupTime(time) {
    this.booking_detail = {
      ...this.booking_detail,
      time: time
    }
  }

  calculateFare() {
    const pickupDateElement = document.getElementById("datetime");
    const passengerCountElement = document.getElementById("passenger_count");
    const routeDistanceElement = document.getElementById("route_distance");
  }
}
