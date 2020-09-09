import { setRootPath, setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js'
setRootPath(window.Polymer.rootPath)
setPassiveTouchGestures(true)


import { ExampleApp } from  './example-app/example-app'



// Add your STATIC elements here
const static_elements = [
	// APP
	ExampleApp,
]

for (const si of static_elements) 
{
	const id = '' + si.is
	if (!window.customElements.get(id)) {
		window.customElements.define(id, si)
		// console.log('Register Staticaly - ' + id)
	}
}
