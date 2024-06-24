function CallAssignOwnertoSteps( executionContext,rawProcedureInstanceId) {

//this code gets two parameters from command button from MDA command Bar
//executionContext => primarycontrol  for formcontext
//rawProcedureInstanceId => firstprimaryitemid
//
    var procedureInstanceId = rawProcedureInstanceId.replace('{', '').replace('}', '').toLowerCase();
    var formContext = executionContext;

    formContext.data.save().then(
        function () {
           var globalContext = Xrm.Utility.getGlobalContext();
            var serverURL = globalContext.getClientUrl();
            var actionName; // Assign Action Name here
            var data = {
                "procedureinstanceid": procedureInstanceId
            };

            var req = new XMLHttpRequest();
            req.open("POST", serverURL + "/api/data/v9.2/" + actionName, true);
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-version", "4.0");
            req.onreadystatechange = function () {
                req.onreadystatechange = null;
                if (this.status == 200 || this.status == 204) {
                    alert("Procedure Steps are Assigned/Reassigned. Please Refresh");
                }
                else {
                    alert("Error occured while Assigning/Reassigning Procedure Steps");
                }
            }
            req.send(JSON.stringify(data));
        },
        function () {
            console.log("Failed while saving!");
        });

}


