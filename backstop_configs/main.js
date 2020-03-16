module.exports = {
	"scenarios": [
		{
		  "label": "main-nav0",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".js-open-support-service__dropdown"],
		  "postInteractionWait": 1500,
		  "selectors": [".support-service__dropdown"],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "desctop",
			  "width": 1920,
			  "height": 1080
			},
			{
			  "label": "small desctop",
			  "width": 1280,
			  "height": 800
			}]
		},
		{
		  "label": "main-nav",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-nav__item:nth-of-type(1n) .main-nav__link"],
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
			},
			{
			  "label": "small desctop",
			  "width": 1280,
			  "height": 800
			}]
		},
		{
		  "label": "main-nav2",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 2500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelector": [".main-nav__item:nth-of-type(2n) .main-nav__link"],
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
			},
			{
			  "label": "small desctop",
			  "width": 1280,
			  "height": 800
			}]
		},
		{
		  "label": "news",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".highlight",
		  "delay": 3500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": ".news__link",
		  "clickSelector": [],
		  "postInteractionWait": 3500,
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
		  "label": "highlights",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".highlight",
		  "delay": 3500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": ".highlight__link",
		  "clickSelector": [],
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
		  "label": "main-nav--mobile",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".js-open-mobile-menu",
		  "delay": 3500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".js-open-mobile-menu", ".main-nav__item:nth-of-type(1n) .main-nav__link"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "iPad landscape",
			  "width": 1024,
			  "height": 768
			},
			{
			  "label": "iPad portrait",
			  "width": 768,
			  "height": 1024
			},
			{
			  "label": "iphone SE",
			  "width": 320,
			  "height": 568
			}]
		},
		{
		  "label": "main-nav2--mobile",
		  "cookiePath": "",
		  "url": "http://hyundai/",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": ".js-open-mobile-menu",
		  "delay": 1500,
		  "hideSelectors": [".content"],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "clickSelectors": [".js-open-mobile-menu",  ".main-nav__item:nth-of-type(2n) .main-nav__link", ".df-dropdown__title"],
		  "postInteractionWait": 1500,
		  "selectors": [],
		  "selectorExpansion": true,
		  "expect": 0,
		  "misMatchThreshold" : 0.1,
		  "requireSameDimensions": true,
		  "viewports": [{
			  "label": "iPad landscape",
			  "width": 1024,
			  "height": 768
			},
			{
			  "label": "iPad portrait",
			  "width": 768,
			  "height": 1024
			},
			{
			  "label": "iphone SE",
			  "width": 320,
			  "height": 568
			}]
		}
	  ],
}