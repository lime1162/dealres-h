module.exports = {
	"scenarios": [
		{
		  "label": "brand-collection",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelectors": [],
		  "clickSelectors": [".where-buy .selectize-control.single .selectize-input", ".where-buy .selectize-control.single .selectize-input"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		},
		{
		  "label": "brand-collection product",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelectors": [],
		  "clickSelectors": [".product"],
		  "postInteractionWait": 3500,
		  "selectors": [".p-product"],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true
		}
	],
}