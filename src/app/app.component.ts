import {Component} from '@angular/core';
import {Router, Event, NavigationEnd, RouterOutlet, RouterLink} from '@angular/router';
import {IStaticMethods} from 'preline/preline';
import Typed from 'typed.js';

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Polygon Software';

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    window.HSStaticMethods.autoInit();
                }, 100);
            }
        });

        const typed = new Typed('#services-texts', {
            strings: [
                "Inteligência Artificial",
                "Desenvolvimento de software",
                "Criação de sites e sistemas",
                "Consultoria em tecnologia"
            ],
            typeSpeed: 35,
            loop: true
        });
    }
}
