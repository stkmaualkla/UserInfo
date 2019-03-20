sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.UserInfo.controller.UserInfoView", {
		onInit: function () {
			// Create the model
			var oModel = new sap.ui.model.json.JSONModel();
			// Load the data
			oModel.loadData("/services/userapi/currentUser");
			// Assign the model to the view
			this.getView().setModel(oModel);
			// Add a completion handler to log the json and any errors
			oModel.attachRequestCompleted(function onCompleted(oEvent){
				if(oEvent.getParameter("success"))
				{
					this.setData({"json": this.getJSON(), "status": "Success"}, true);
				}
				else
				{
					var msg = oEvent.getParameter("errorObject").textStatus;
					if(msg)
					{
						this.setData("status", msg);
					}
					else
					{
						this.setData("status", "Unknow error retrieving user info ---");
					}
				}
			});
		},
		createContent: function()
		{
			
		}
	});
});