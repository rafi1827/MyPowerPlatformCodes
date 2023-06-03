

What does this powershell script does?
  this powershell script deploys the reports, datasets and dashboards to target workspace in power bi pipeline

  How does this powershell script does?

  step 1 : installs MicrosoftPowerBIMgmt Module
  step 2 : Imports Modules  MicrosoftPowerBIMgmt
						   MicrosoftPowerBIMgmt.Profile

Step 3 : connects to powerbi service using username and password
step 4 : add datasets, reeports and dashboards as required
step 5 : compose the body
step 6 : invoke rest api post method and pass  body and get deploy result
step 7 : use deploy result and invoke rest api get method to get the status of the deployment.
