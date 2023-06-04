// this function sets dynamic options on choices field based on any value from another field
function Selectsitesoptions(executioncontext) {
    'use strict';
    var formcontext = executioncontext.getFormContext();
    var bmh = { text: "option1", value: 853670000 };
    var bmr = { text: "option2", value: 853670001 };
    var lmc = { text: "option3", value: 853670002 };
    var mlh = { text: "option4", value: 853670005 };
    var mirmont = { text: "option5", value: 853670006 };
    var ph = { text: "option6", value: 853670003 };
    var rh = { text: "option7", value: 853670004 };
    var homecare = { text: "option8", value: 853670007 };
    var selectsitescontrol = formcontext.getControl("attributename");
    if (formcontext.getAttribute("attributename").getValue() !== null) {
        var site = formcontext.getAttribute("attributename").getValue();
        var site = site[0].name;
        switch (site) {
            case "option1": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option2": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option3": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option4": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option5": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option6": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }
            case "option7": {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(homecare);
                break;
            }
            default: {
                if (selectsitescontrol.getOptions() !== null) {
                    selectsitescontrol.clearOptions();
                }
                selectsitescontrol.addOption(bmr);
                selectsitescontrol.addOption(bmh);
                selectsitescontrol.addOption(lmc);
                selectsitescontrol.addOption(mlh);
                selectsitescontrol.addOption(mirmont);
                selectsitescontrol.addOption(ph);
                selectsitescontrol.addOption(rh);
                selectsitescontrol.addOption(homecare);
                break;
            }

        }
    }
}