module.exports = {
	"scenarios": [
		{
		  "label": "contactUs",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 4500,
		  "clickSelectors": [".faq__main", ".faq__head"],
		  "postInteractionWait": 1500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": ""
		},
		{
		  "label": "contactUs validation",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 4500,
		  "clickSelectors": [".form-section__button"],
		  "postInteractionWait": 500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "viewports": [{
			"label": "desctop",
			"width": 1920,
			"height": 1080
		  }]
		},
		{
		  "label": "contactUs rules popup",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 4500,
		  "clickSelectors": [".form-accept__description a"],
		  "postInteractionWait": 500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "viewports": [{
			"label": "desctop",
			"width": 1920,
			"height": 1080
		  }]
		},
		{
		  "label": "contactUs sending",
		  "cookiePath": "",
		  "url": "",
		  "referenceUrl": "",
		  "readyEvent": "",
		  "readySelector": "",
		  "delay": 4500,
		  "keyPressSelectors": [
			{
			  "selector": "#surname",
			  "keyPress": "Иванов"
			},
			{
			  "selector": "#name",
			  "keyPress": "Иван"
			},
			{
			  "selector": "#patronymic",
			  "keyPress": "Иванович"
			},
			{
			  "selector": "#city",
			  "keyPress": "Киров"
			},
			{
			  "selector": "#tel",
			  "keyPress": "0000000000"
			},
			{
			  "selector": "#email",
			  "keyPress": "test@test.ru"
			},
			{
			  "selector": "#message",
			  "keyPress": "Это тестовое сообщение"
			}
		  ],
		  "clickSelectors": [".form-section__button"],
		  "postInteractionWait": 5500,
		  "hideSelectors": [],
		  "removeSelectors": [],
		  "hoverSelector": "",
		  "viewports": [{
			"label": "desctop",
			"width": 1920,
			"height": 1080
		  }]
		}
	  ],
}