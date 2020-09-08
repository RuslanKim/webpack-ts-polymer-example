import { setRootPath, setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js'
setRootPath(window.Polymer.rootPath)
// setPassiveTouchGestures(true) // turn off due vaadin context menu uses defaults

import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/iron-media-query/iron-media-query.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@vaadin/vaadin-grid/vaadin-grid'
import '@vaadin/vaadin-grid/vaadin-grid-filter'
import '@vaadin/vaadin-grid/vaadin-grid-sorter'


import { ExampleAdmin } from  './example-admin/example-admin'



// Add your STATIC elements here
const static_elements = [
	
	// APP
	ExampleAdmin,
]

for (const si of static_elements) 
{
	const id = '' + si.is
	if (!window.customElements.get(id)) {
		window.customElements.define(id, si)
		// console.log('Register Staticaly - ' + id)
	}
}
