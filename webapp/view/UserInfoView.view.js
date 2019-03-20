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
				
				new sap.ui.commons.Label({wrapping: true,width: "100%",text: "JSON: {/json}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "STATUS: {/status}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "Name: {/name}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "Firstname: {/firstname}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "Lastname: {/lastname}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "Displayname: {/displayname}"}),
				new sap.ui.commons.Label({wrapping: false,width: "100%",text: "Email: {/email}"}) 
				
				]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});