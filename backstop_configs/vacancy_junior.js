module.exports = {
	"scenarios": [
		{
		  "label": "vacancy--junior",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".form-section",
		  "delay": 5500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelectors": [],
		  "clickSelector": ".selectize-control.single .selectize-input",
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		},
		{
		  "label": "vacancy validate",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".form-section",
		  "delay": 5500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelectors": [],
		  "clickSelectors": [".form-section__button"],
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
		  "label": "vacancy rules",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".form-section",
		  "delay": 5500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelectors": [],
		  "clickSelectors": [".form-section__rules-text a"],
		  "postInteractionWait": 1500,
		  "selectors": [".rules__center"],
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