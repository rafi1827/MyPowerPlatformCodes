//this function sets the default view based on the choice made in another field called concept cascading 
function cascade(executioncontext) {
    'use strict';
    var formcontext = executioncontext.getFormContext();
    var viewid = "view-id";
    if (formcontext.getAttribute("attribute name").getValue() !== null) {
        var site = formcontext.getAttribute("attribute name").getValue();
        var site = site[0].name;
        switch (site) {

            case "choice1":
                viewid = "view-id";
                break;
            case "choice2":
                viewid = "view-id";
                break;
            case "choice3 ":
                viewid = "view-id";
                break;
            case "choice4":
                viewid = "view-id";
                break;
            case "choice5":
                viewid = "view-id";
                break;
            case "choice6":
                viewid = "view-id";
                break;
            case "choice7":
                viewid = "view-id";
                break;
            default:
                viewid = "view-id";
        }

        formcontext.getControl("attribute name").setDefaultView(viewid);

    }
}

