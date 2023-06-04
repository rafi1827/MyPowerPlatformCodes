// this concept needs ->field1  ->field2  ->field3 and a -> cascade table where filed1 and field 2 and field3 cascade data is stored.
//this function will run onchange event handler of field1 and field2
// function will
//-> get id of the selected option from field1 and field2
// -> The addPreSearch allows you to specify what event will fire when a user clicks on the lookup. this is just to trigger the lookup field
// -> get all the records matches the id from cascade table and list all field3 records and
//create a fetchxml to retrive the records from field3 lookup table
//->  targetfieldcontrol.addCustomFilter(fetchXML); use this to filter the data in the lookup field2

var eventType3XML = null;
var eventType2control, targetcontrol;

function Eventtype3cascade(execontext) {
    var formcontext = execontext.getFormContext();
    var fetchXML;
    var eventtype1id = formcontext.getAttribute("mlh_psp_eventtype1").getValue();
    var eventtype2id = formcontext.getAttribute("mlh_psp_eventtype2").getValue();
    if (eventtype1id !== null && eventtype2id !== null) {
        var eventtype1formattedid = eventtype1id[0].id.replace('{', '').replace('}', '');
        var eventtype2formattedid = eventtype2id[0].id.replace('{', '').replace('}', '');
        eventType2control = formcontext.getControl("mlh_psp_eventtype2");
        targetcontrol = formcontext.getControl("mlh_psp_eventtype3");
        targetcontrol.addPreSearch(filtereventtype3);
        var Entity = "mlh_psp_eventtypeclassificationcascading";
        var OdataFilter = "?$select=_mlh_psp_papsrslevel3description_value&$filter=_mlh_psp_papsrslevel1description_value eq " + eventtype1formattedid + " and _mlh_psp_papsrslevel2description_value eq " + eventtype2formattedid;
        var result = Xrm.WebApi.retrieveMultipleRecords(Entity, OdataFilter).then(
            function success(result) {

                fetchXML = "<fetch><entity name=\"mlh_psp_eventtype3\" ><filter type=\"or\" ><condition attribute=\"mlh_psp_eventtype3id\" operator=\"in\" >";

                //Now we have the GUID of the Rating Program records. By looping over the result we will going to build the FetxhXML by appending the GUID of the rating program record
                for (var i = 0; i < result.entities.length; i++) {

                    fetchXML = fetchXML + "<value>" + result.entities[i]._mlh_psp_papsrslevel3description_value + "</value>";
                    //console.log(result.entities[i]);

                }
                fetchXML = fetchXML + " </condition> </filter></entity></fetch>";
                eventType3XML = fetchXML;
                console.log(eventType3XML);
                targetcontrol.addCustomFilter(fetchXML);
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }
}

function filtereventtype3() {
    if (eventType3XML === null)
        eventType3XML = "<fetch><entity name=\"mlh_psp_eventtype3\" /></fetch>";
    targetcontrol.addCustomFilter(eventType3XML);

}