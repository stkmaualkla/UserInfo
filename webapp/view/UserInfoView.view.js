sap.ui.jsview("com.UserInfo.view.UserInfoView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.UserInfoView
	 */
	getControllerName: function () {
		return "com.UserInfo.controller.UserInfoView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.UserInfoView
	 */
	createContent: function (oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				
					new sap.m.Label({wrapping: true,width: "100%",text: " TEST GETTING THE PERSONAL INFO FROM SAP.COM "}),
					new sap.m.Label({wrapping: true,width: "20%",text: "JSON:"}), 
					new sap.m.Input({value: " {/json}",width: "40%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "STATUS: "}),
					new sap.m.Input({value: " {/status}", width: "20%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "Name: "}),
					new sap.m.Input({value: " {/name}", width: "20%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "Firstname: "}),
					new sap.m.Input({value: " {/firstName}", width: "20%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "Lastname: "}),
					new sap.m.Input({ value: " {/lastName}", width: "20%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "Displayname: "}),
					new sap.m.Input({value: " {/displayName}", width: "20%"}),
					new sap.m.Label({wrapping: false,width: "20%",text: "Email: "}), 
					new sap.m.Input({ value: " {/email}", width: "20%"})
				
				]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});