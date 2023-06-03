Install-Module MicrosoftpowerBIMgmt

Import-Module MicrosoftPowerBIMgmt
Import-Module MicrosoftPowerBIMgmt.Profile

$password = "replace it with your yoiur password" | ConvertTo-SecureString -asPlainText -Force
$username = "replace it with your username" 
$credential = New-Object System.Management.Automation.PSCredential($username, $password)

Connect-PowerBIServiceAccount -Credential $credential

# you can multiple datasets,reports and dashboards
$Datasets = @(
        @{sourceId = "replace it with your dataset source id" }
     #  @{sourceId = "replace it with your dataset source id" }
    ) 
    
$Reports =  @(
        @{sourceId = "replace it with your report source id" }
     #   @{sourceId = "replace it with your report source id" }
    )

  $Dashboards = @(
        @{sourceId = "replace it with your  Dashboard source id" }
     #   @{sourceId = "replace it with your Dashboard source id" }
    )

$body = @{ 
    sourceStageOrder = 0 # The order of the source stage. Development (0), Test (1).   
    datasets =$Datasets      
    reports = $Reports 
    dashboards =$Dashboards
    
    options = @{
        allowCreateArtifact = $TRUE
        allowOverwriteArtifact = $TRUE
    }
} | ConvertTo-Json

$deployurl = "pipelines/{0}/Deploy" -f "replace it with your pipeline id"
$deployResult = Invoke-PowerBIRestMethod -Url $deployurl  -Method Post -Body $body | ConvertFrom-Json

echo "deployment instance id : "
echo $deployResult.id

$responseurl =  "pipelines/{0}/Operations/{1}" -f "Replace it with your pipeline id",$deployResult.id
$operation = Invoke-PowerBIRestMethod -Url $responseurl -Method Get | ConvertFrom-Json    
Do
{
    Start-Sleep -s 2
    $operation = Invoke-PowerBIRestMethod -Url $responseurl -Method Get | ConvertFrom-Json
    echo $operation.Status
}while($operation.Status -eq "NotStarted" -or $operation.Status -eq "Executing")