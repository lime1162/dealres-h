module.exports = {
	"scenarios": [
		{
		  "label": "service-main",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		},
		{
		  "label": "service-main--dd",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".s-dropdown__head"],
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
		  "label": "service-main map popup",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-s__show-map"],
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
		  "label": "service-main form",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-s__item:nth-of-type(6) .selectize-control.single .selectize-input", ".main-s__item:nth-of-type(6) .selectize-dropdown-content .option", ".js-checkout-dervice"],
		  "postInteractionWait": 1500,
		  "selectors": [".contact-form__center"],
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
		  "label": "service-main form validate",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-s__item:nth-of-type(6) .selectize-control.single .selectize-input", ".main-s__item:nth-of-type(6) .selectize-dropdown-content .option", ".js-checkout-dervice", ".contact-form__button"],
		  "postInteractionWait": 1500,
		  "selectors": [".contact-form__center"],
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
		  "label": "service-main rules",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-s__item:nth-of-type(6) .selectize-control.single .selectize-input", ".main-s__item:nth-of-type(6) .selectize-dropdown-content .option", ".js-checkout-dervice", ".contact-form__description a"],
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
		  "label": "service-main bottom popup",
		  "cookiePath": "",
		  "url": "http://hyundai/service/maintenance",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".sign-up-service__button"],
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
	],
}