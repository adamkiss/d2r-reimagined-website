import { route, IRouterEvents, INavigationModel, IRouteContext, ICurrentRoute } from '@aurelia/router-lite';
import { lazy, resolve } from '@aurelia/kernel';

const routes: array = [
    {
        path: '',
        component: import('./pages/home/home'),
        title: 'Home',
    },
    {
        path: 'cube-recipes',
        component: import('./pages/cube-recipes/cube-recipes'),
        title: 'Cube Recipes',
    },
    {
        path: 'uniques',
        component: import('./pages/uniques/uniques'),
        title: 'Uniques',
    },
    {
        path: 'sets',
        component: import('./pages/sets/sets'),
        title: 'Sets',
    },
    {
        path: 'runewords',
        component: import('./pages/runewords/runewords'),
        title: 'Runewords',
    }
];

@route({
    title: 'D2R Reimagined',
    routes
})

export class App {
    public readonly routes: array = routes;
    private loading: boolean = true;

    private readonly routeContext = resolve(lazy(IRouteContext));
    private currentRoutePath;

    fonts: Font[] = [
        { class: 'font-classic', name: 'Classic' },
        { class: 'font-resurrected', name: 'Resurrected' },
        { class: 'font-neutral', name: 'Neutral' },
    ];

    public constructor() {
        const events = resolve(IRouterEvents);
        events.subscribe('au:router:navigation-end', ev => {
            this.currentRoutePath = ev.finalInstructions?.children[0]?.component?.value ?? null;
        });

    }

    attached() {
        this.loadFont();
        this.loading = false;
        
        console.log(this.currentRoute);
    }

    async binding() {
        this.routeContextResolved = await this.routeContext();
    }

    handleFontSelected(font: Font) {
        window.localStorage.setItem('font', font.class);
        this.loadFont();
    }

    loadFont() {
        const selectedFont = window.localStorage.getItem('font') || 'font-resurrected';
        if (selectedFont) {
            const allClasses = this.fonts.map(font => font.class);
            document.body.classList.remove(...allClasses);
            document.body.classList.add(selectedFont);
        }
    }

    // get currentRoute() {
    //     console.log(this.routeContextResolved);
    //     return this.routeContextResolved;
    // }

    get isLoading() {
        return this.loading;    
    }
}

type Font = {
    class: string;
    name: string;
};
