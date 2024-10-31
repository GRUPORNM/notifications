sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    function (BaseController, JSONModel, formatter) {
        "use strict";

        return BaseController.extend("notificationsoverview.controller.Items", {

            formatter: formatter,

            onInit: function () {
                var oViewModel = new JSONModel({
                    delay: 0,
                    busy: false,
                });

                this.setModel(oViewModel, "itemsView");
                this.getOwnerComponent().getRouter().attachRouteMatched(this.onObjectMatched, this);
                this.getRouter().attachRouteMatched(this.getUserAuthentication, this);
            },

            onAfterRendering: function () {
                var that = this;
                sessionStorage.setItem("goToLaunchpad", "");
                window.addEventListener("message", function (event) {
                    var data = event.data;
                    if (data.action == "goToMainPage") {
                        that.onNavBack();
                    }
                });
            },
        });
    });