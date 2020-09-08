import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/iron-media-query/iron-media-query.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-dialog'
import '@polymer/paper-item/paper-item.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@vaadin/vaadin-grid/vaadin-grid'
import '@vaadin/vaadin-grid/vaadin-grid-filter'
import '@vaadin/vaadin-grid/vaadin-grid-sorter'
import '@vaadin/vaadin-context-menu/vaadin-context-menu'
import { AppHeaderElement } from '@polymer/app-layout/app-header/app-header.js'
import { AppDrawerElement } from '@polymer/app-layout/app-drawer/app-drawer.js'
import { IronPagesElement } from '@polymer/iron-pages/iron-pages.js'
import { html, PolymerElement } from '@polymer/polymer/polymer-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js'
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js'
import { timeOut, microTask } from '@polymer/polymer/lib/utils/async.js'

const page404 = 'h404'


export class ExampleAdmin extends PolymerElement
{
    static get is() { return 'example-admin' }

    static get template() { return html([`<style></style>Example Admin 123`]) }

    static get properties() 
    {
        return {
        }
    }

    static get observers() 
    {
        return [
        ]
    }
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        super.connectedCallback()
    }
}
