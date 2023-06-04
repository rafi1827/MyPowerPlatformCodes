function setfocusonprimary(executionContext) {
    'use strict';
    var formtext = executionContext.getFormContext();

    Xrm.WebApi.retrieveRecord("environmentvariablevalue", "guid", "?$select=value").then(
        function success(result) {
            if (result.value === "Yes") {
                formtext.ui.tabs.get("Tab1").setFocus();
                // alert("Retrieved values: Name: " + result.value);
            }
            else {
                formtext.ui.tabs.get("tab2").setFocus();
            }
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );
}