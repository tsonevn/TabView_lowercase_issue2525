import { EventData } from "data/observable";
import { Page } from "ui/page";
import { TabView } from "ui/tab-view";
import {isAndroid} from "platform"


var page:Page;

export function navigatingTo(args: EventData) {
    page = <Page>args.object;
}

export function onTabViewLoaded(){
    if(isAndroid){
        var tabview:TabView =<TabView> page.getViewById("tabViewContainer");
        var tab = (<any>tabview)._getAndroidTabView();
        
        for (var i = 0; i < tabview.items.length; i++) {
            tab.getTextViewForItemAt(i).setAllCaps(false);
        }
    }
}