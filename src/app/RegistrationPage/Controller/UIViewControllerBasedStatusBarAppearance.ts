import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UIViewControllerBasedStatusBarAppearance {

    constructor() {
        console.log("UIViewControllerBasedStatusBarAppearance")
        // iOS only
        // window.addEventListener('statusTap', function () {
        //     console.log('statusbar tapped');
        // });

        // // Display content under transparent status bar (Android only)
        // StatusBar.setOverlaysWebView({ overlay: true });

        // const setStatusBarStyleDark = async () => {
        //     await StatusBar.setStyle({ style: Style.Dark });
        // };

        // const setStatusBarStyleLight = async () => {
        //     await StatusBar.setStyle({ style: Style.Light });
        // };

        // const hideStatusBar = async () => {
        //     await StatusBar.hide();
        // };

        // const showStatusBar = async () => {
        //     await StatusBar.show();
        // };
    }
}
