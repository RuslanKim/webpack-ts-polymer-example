import { setRootPath, setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js'
setRootPath(window.Polymer.rootPath)
// setPassiveTouchGestures(true) // turn off due vaadin context menu uses defaults

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
