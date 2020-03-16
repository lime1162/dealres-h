module.exports = {
	"scenarios": [
		{
		  "label": "service-request",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 3500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		},
		{
		  "label": "service-request-dd",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".service-form",
		  "delay": 3500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".selectize-control.single .selectize-input"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "desctop",
			  "width": 1920,
			  "height": 1080
			}]
		},
		{
		  "label": "service-request--form-invalid",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".service-form__button"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "desctop",
			  "width": 1920,
			  "height": 1080
			}]
		},
		{
		  "label": "service-request rules popup",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".service-form__description a"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "desctop",
			  "width": 1920,
			  "height": 1080
			}]
		},
		{
		  "label": "service-request map popup",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".service-form__map a"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "desctop",
			  "width": 1920,
			  "height": 1080
			}]
		}
	  ]
}