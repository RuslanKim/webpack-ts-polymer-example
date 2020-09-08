import { html, PolymerElement } from '@polymer/polymer/polymer-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js'
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js'
import { timeOut, microTask } from '@polymer/polymer/lib/utils/async.js'
import { scroll } from '@polymer/app-layout/helpers/helpers'
import { AppHeaderElement } from '@polymer/app-layout/app-header/app-header.js'
import { IronPagesElement } from '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-media-query/iron-media-query.js'
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-progress/paper-progress.js'
import '@polymer/paper-spinner/paper-spinner-lite.js'
import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
const page404 = 'h404'
const NOTABSPAGES = ['customize', 'checkout', 'cart', 'signin', 'signout']
const NOTAPAGE ={ 'build': 1, 'data': 1, 'images': 1, '.well-known': 1, }



// @CustomElement
export class ExampleApp extends PolymerElement
{
    static get is() { return 'example-app' }

    static get template() { return html([`<style include=""></style><p>example app 123</p>`]) }

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

    disconnectedCallback()
    {
        super.disconnectedCallback()
    }

    ready()
    {
        super.ready()
    }


}
