module.exports = {
	"scenarios": [
		{
		  "label": "find-dealer",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 5500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": [".dealer__button"],
		  "clickSelector": [],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		},
		{
		  "label": "find-dealer-dd",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".c-find-dealer__zoomIn",
		  "delay": 5500,
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
		}
	  ]
}