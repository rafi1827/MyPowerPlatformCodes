// This function allows to compare dates and opens alert dialog on button click clears the attribute value.
// can use this function onchange event listner on attribute

function closeddate(executionContext) {
    'use strict';
    var formtext = executionContext.getFormContext();
    // alert(Date(Date.now()));
    var today = new Date(Date.now());

    if (formtext.getAttribute("attribute_name").getValue() !== null && formtext.getAttribute("attribute_name").getValue() !== null && formtext.getAttribute("attribute_name").getValue() !== null) {

        var ed = new Date(formtext.getAttribute("attribute_name").getValue());
        var dd = new Date(formtext.getAttribute("attribute_name").getValue());
        var id = new Date(formtext.getAttribute("attribute_name").getValue());
//    the condition to compare the dates
        if (id < today || id < ed || id < dd) {
            var alertStrings = { confirmButtonLabel: "Clear Closed Date", text: "Closed Date cannot be Less than present date or Event Date(" + formtext.getAttribute("attribute_name").getValue() + ") or Discovery Date(" + formtext.getAttribute("attribute_name").getValue() + ")", title: "Incorrect Closed Date" };
            var alertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
                function (success) {
                    formtext.getAttribute("attribute_name").setValue(null);
                },
                function (error) {
                    console.log(error.message);
                }
            );
        }
    }
}