// Ensure that the Teams SDK is initialized once no matter how often this is called
let teamsInitPromise;
async function ensureTeamsSdkInitialized() {
    if (!teamsInitPromise) {
        teamsInitPromise = await microsoftTeams.app.initialize();
    }
    return teamsInitPromise;
}

// Function returns a promise which resolves to true if we're running in Teams
async function isInTeams() {
    try {
        console.log("checking isInTeams.."); 
        await ensureTeamsSdkInitialized();
        await microsoftTeams.app.getContext();
        return (true);
    }
    catch (e) {
        console.log(`${e} from Teams SDK, may be running outside of Teams`);  
        return false;
    }
  }

// Get Teams context
async function getTeamsContext() {
  if (await isInTeams()) {  
    console.log("getting TeamsContext..");      
    microsoftTeams.getContext((context) => {
      console.log("TeamsContext successCallback");
      window.rflxMediator('getTeamsContext', JSON.stringify(context));
    });
  }
}

// Get Teams context
async function getTeamsTenantId() {
  if (await isInTeams()) {  
    console.log("getting Teams TenantId..");      
    microsoftTeams.getContext((context) => {
      console.log("getTeamsTenantId successCallback");
      let obj = JSON.parse(JSON.stringify(context));
      window.rflxMediator('getTeamsTenantId', obj.tenantId);
    });
  } else {
    console.log("App not embedded in Teams");
    window.rflxMediator('getTeamsTenantId', 'af59082a-938b-4312-af98-ff333b80b02a');
  }
}


// Get a client side token from Teams
async function getTeamsToken() {
  if (await isInTeams()) {  
    console.log("getting TeamsToken..");      
    microsoftTeams.authentication.getAuthToken({
        successCallback: (result) => {
            console.log("TeamsToken successCallback");
            window.rflxMediator('getTeamsToken', result);
        },
        failureCallback: (error) => {
            console.log("TeamsToken failureCallback" + error);
            window.rflxMediator('getTeamsToken', '');
        }
    });
  } else {
    console.log("App not embedded in Teams");
    window.rflxMediator('getTeamsToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYjU3Njk5OC02ZDQzLTQ4YzUtYmNjNC05ZTdjZGMxYTZiYjkiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vYWY1OTA4MmEtOTM4Yi00MzEyLWFmOTgtZmYzMzNiODBiMDJhL3YyLjAiLCJpYXQiOjE2ODEzODk3MDYsIm5iZiI6MTY4MTM4OTcwNiwiZXhwIjoxNjgxMzk4Nzc1LCJhaW8iOiJBVFFBeS84VEFBQUFVYUdOdElBb0NyQUhiYTJ5emtNOCtMdEd4VnhUMm9sOXJnN1V0WlpyS3JxVzlxckJ1bitBQSt3Snk5Z0ZrNURaIiwiYXpwIjoiNWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2IiwiYXpwYWNyIjoiMCIsIm5hbWUiOiJQYXR0aSBGZXJuYW5kZXoiLCJvaWQiOiIwZGMwOGI0MS0wNjQ2LTQ5NzYtYjA0ZC0wM2YyNDAxMzg5OGQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJQYXR0aUZANjIwaHc1Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BWDBBS2doWnI0dVRFa092bVA4ek80Q3dLcGhwVnd0RGJjVkl2TVNlZk53YWE3bWNBRFUuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJDZzJSVmg0aVNJV0NHLXd0RDhKcjNxcGx5bHUyLTJxS2VsN3dmVERyZDEwIiwidGlkIjoiYWY1OTA4MmEtOTM4Yi00MzEyLWFmOTgtZmYzMzNiODBiMDJhIiwidXRpIjoiekNhMUtjVlZUVVdfTHZiOHI4ODJBQSIsInZlciI6IjIuMCJ9.l-TJJzs_4kW5oDQQsO0ion2XQyl7DZ5Th7Cc65dFYroq4MIGPnBE3kfxtD6KmWKEiY1p-bKZFOvEXpbHMIxbQufhpIG37OqvOUAFVMR0k5izcbvWM2lCOBJkpSYb-SA_D9_JxArLrc2UTNDlejL-69GjURhV_2Hrb9v48hoTVv6lP9t8sxftjbddR8bP1H6Zi2g9dyAhaCT0JHsvF-RdNUVTol7ibkQhr7Tv5pFYbXGQ2Fioh6L87Nqqg2ACVoAf5RVOVoNp-vFz2UcUzjshtdPhraTPClMudF7SFwmfllxJQDUZMx1vdRp67pm57Mx08CQtQqiG0Tnn_8ChrGa8Xw');
  }
}

async function getTeamsDeepLinkParams() {
  if (await isInTeams()) {  
      microsoftTeams.getContext((context) => {
          console.log("getTeamsDeepLinkParams successCallback");   
          console.log(JSON.stringify(context));
          let obj = JSON.parse(JSON.stringify(context));
          window.rflxMediator('getTeamsDeepLinkParams', obj.subEntityId);
      });
  } else {
      console.log("App not embedded in Teams");
  }
}

async function copyTeamsDeepLink(feedKey, teamsAppId) {
  try {
    //temp textarea for copy to clipboard functionality
    let textarea = document.createElement("textarea");
    const encodedContext = encodeURI(`{"subEntityId": "${feedKey}"}`);
    //form the deeplink                       
    const deeplink = `https://teams.microsoft.com/l/entity/${teamsAppId}/mywork?&context=${encodedContext}`;
    textarea.value = deeplink;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); //deprecated but there is an issue with navigator.clipboard api
    document.body.removeChild(textarea);
  } catch (err) {
      console.error('Failed to copy: ', err);
  }
}

