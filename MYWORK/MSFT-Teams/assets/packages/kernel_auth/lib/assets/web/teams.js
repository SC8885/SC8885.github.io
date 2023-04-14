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
      window.rflxMediator('getTeamsTenantId', obj.tid);
    });
  } else {
    console.log("App not embedded in Teams");
    window.rflxMediator('getTeamsTenantId', '');
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
    window.rflxMediator('getTeamsToken', '');
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

