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
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});