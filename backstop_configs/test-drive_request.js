module.exports = {
	"scenarios": [
		{
		  "label": "test-drive-request",
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
		  "label": "test-drive-request-dd",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
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
		  "label": "test-drive-request--form-invalid",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".td-form__button"],
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
		  "label": "test-drive-request rules popup",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".td-form__description a"],
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
		  "label": "test-drive-request map popup",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".td-form__map a"],
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