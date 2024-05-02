import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
    mfe: () => loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        exposedModule: "./standalone-component-as-web-component"
    }),
}