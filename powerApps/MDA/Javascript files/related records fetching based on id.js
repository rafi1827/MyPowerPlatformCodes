async function showWarningIfNoTasks(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();
    var current_record_id = formContext.data.entity.getId();
    current_record_id = current_record_id.replace("{", "").replace("}", "");

    if (blpsrtid != "") {
        let Entity = "entityname";
        var OdataFilter = "?$select=activityid&$filter=_regardingobjectid_value eq " + current_record_id;

        //Calling the API to retrive multiple records
        var result = await Xrm.WebApi.retrieveMultipleRecords(Entity, OdataFilter);

        if (result.entities.length == 0) {
            formContext.ui.setFormNotification("This xxx does not have xxx created. Please create the xxxs first before progressing on this record.", "WARNING", "WN-1001");
        }
    }
}
