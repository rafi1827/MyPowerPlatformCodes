// this concept needs ->field1  ->field2  and a -> cascade table where filed1 and field 2 cascade data is stored.
//this function will run onchange event handler of field1
// function will
//-> get id of the selected option from field1
// -> The addPreSearch allows you to specify what event will fire when a user clicks on the lookup. this is just to trigger the lookup field
// -> get all the records matches the id from cascade table and list all field2 records and
//create a fetchxml to retrive the records from field2 lookup table
//->  targetfieldcontrol.addCustomFilter(fetchXML); use this to filter the data in the lookup field2


var eventType2XML = null;
var targetfieldcontrol;

function Eventtype2cascade(execontext) {
    var formcontext = execontext.getFormContext();
    var fetchXML;
    var id = formcontext.getAttribute("mlh_psp_eventtype1").getValue();//get the id of first field selected option
    if (id !== null) {
        var formattedid = id[0].id.replace('{', '').replace('}', '');// format the id
        targetfieldcontrol = formcontext.getControl("mlh_psp_eventtype2");
        targetfieldcontrol.addPreSearch(filtereventtype2);
        var Entity = "mlh_psp_eventtypeclassificationcascading";
        var OdataFilter = "?$select=_mlh_psp_papsrslevel2description_value&$filter=_mlh_psp_papsrslevel1description_value eq " + formattedid;
        var result = Xrm.WebApi.retrieveMultipleRecords(Entity, OdataFilter).then(
            function success(result) {

                fetchXML = "<fetch><entity name=\"mlh_psp_eventtype2\" ><filter type=\"or\" ><condition attribute=\"mlh_psp_eventtype2id\" operator=\"in\" >";

                //Now we have the GUID of the Rating Program records. By looping over the result we will going to build the FetxhXML by appending the GUID of the rating program record
                for (var i = 0; i < result.entities.length; i++) {

                    fetchXML = fetchXML + "<value>" + result.entities[i]._mlh_psp_papsrslevel2description_value + "</value>";
                    //console.log(result.entities[i]);

                }
                fetchXML = fetchXML + " </condition> </filter></entity></fetch>";
                eventType2XML = fetchXML;
                console.log(eventType2XML);

                targetfieldcontrol.addCustomFilter(fetchXML);
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }
}

function filtereventtype2() {
    if (eventType2XML === null)
        eventType2XML = "<fetch><entity name=\"mlh_psp_eventtype2\" /></fetch>";

    targetfieldcontrol.addCustomFilter(eventType2XML);

}