/*global QUnit*/

sap.ui.define([
	"com/UserInfo/controller/UserInfoView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UserInfoView Controller");

	QUnit.test("I should test the UserInfoView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});