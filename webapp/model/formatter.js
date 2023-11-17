sap.ui.define([], function () {
    "use strict";

    return {
        dateFormat: function (oDate) {
            if (oDate != null) {
                var oDate = (oDate instanceof Date) ? oDate : new Date(oDate);
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd.MM.yyyy" });

                return dateFormat.format(oDate);
            }
        },

        timeFormat: function (oTime) {
            if (oTime != null && oTime.ms != null) {
                var totalSeconds = Math.floor(oTime.ms / 1000);
                var hours = Math.floor(totalSeconds / 3600);
                var minutes = Math.floor((totalSeconds % 3600) / 60);

                var formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
                return formattedTime;
            }
        },

        notificationstatus: function (oStatus) {
            if (oStatus){
                switch (oStatus) {
                    case '4':
                        return "Low";
                        break;
    
                    case '1':
                        return "Very High";
                        break;
    
                    case '2':
                        return "High";
                        break;
    
                    case '3':
                        return "Medium";
                        break;
                }
            }
         
        },
    };
});