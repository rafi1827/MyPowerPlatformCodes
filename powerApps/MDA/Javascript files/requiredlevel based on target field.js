function onLoadEventHandler(executionContext) {
    var formContext = executionContext.getFormContext();
    var requestStatus = formContext.getAttribute('target_column').getValue();

    if (requestStatus === 914530004) // if Request Status is target column, make attribute1 and attribute2 Reqrd
    {
        formContext.getAttribute("attribute1").setRequiredLevel("required");
        formContext.getAttribute("attribute2").setRequiredLevel("required");
    }
    else // else make them not required
    {
        formContext.getAttribute("attribute1").setRequiredLevel("none");
        formContext.getAttribute("attribute2").setRequiredLevel("none");
    }
}
