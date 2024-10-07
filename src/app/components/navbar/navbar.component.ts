import { Component } from "@angular/core";

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "./navbar.component.html"
})
export class Navbar{
    screen: string = "Hello, World!"

    changeScreen = (screen: string) => {
        this.screen = screen;
        alert("Displaying " + this.screen + " screen")
    }
}