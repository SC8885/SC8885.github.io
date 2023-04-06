// Ensure that the Teams SDK is initialized once no matter how often this is called
let teamsInitPromise;
async function ensureTeamsSdkInitialized() {
    if (!teamsInitPromise) {
        teamsInitPromise = await microsoftTeams.app.initialize();
    }
    return teamsInitPromise;
}

// Function returns a promise which resolves to true if we're running in Teams
async function inTeams() {
    try {
        await ensureTeamsSdkInitialized();
        const context = await microsoftTeams.app.getContext();
        return (context.app.host.name === microsoftTeams.HostName.teams);
    }
    catch (e) {
        console.log(`${e} from Teams SDK, may be running outside of Teams`);    
        return false;
    }
}


// Get a client side token from Teams
async function getTeamsToken() {
  if (await inTeams()) {  
    console.log("getting TeamsToken");      
    await ensureTeamsSdkInitialized();
    microsoftTeams.authentication.getAuthToken({
        successCallback: (result) => {
            console.log("TeamsToken successCallback");
            window.rflxMediator('getTeamsToken', result);
        },
        failureCallback: (error) => {
            console.log("TeamsToken failureCallback" + error);
            window.rflxMediator('getTeamsToken', null);
        }
    }); 
  } else {
    console.log("App not embedded in Teams");
  }
}

// Get Teams context
async function getTeamsContext() {
  if (await inTeams()) {  
    console.log("getting TeamsContext");      
    await ensureTeamsSdkInitialized();
    microsoftTeams.getContext((context) => {
      console.log("TeamsContext successCallback");
      window.rflxMediator('getTeamsContext', JSON.stringify(context));
    });
  } else {
    console.log("App not embedded in Teams");
  }
}

async function getSubEntityId() {
    if (await inTeams()) {  
        console.log("getSubEntityId started");      
        await ensureTeamsSdkInitialized();
        microsoftTeams.getContext((context) => {
            console.log("SubEntityId successCallback");   
            console.log(JSON.stringify(context));
            var appId = context.teamId;
            console.log("Teams app ID: ", appId);
            obj = JSON.parse(JSON.stringify(context));
            window.rflxMediator('subEntityId', obj.subEntityId);
        });
    } else {
        window.rflxMediator('subEntityId', 'details');
        console.log("App not embedded in Teams");
    }
  }

   async function copyTeamsDeepLink(feedKey) {
    try {
      // //temp textarea for copy to clipboard functionality
      // var textarea = document.createElement("textarea");
      // const encodedContext = encodeURI(`{"subEntityId": "${feedKey}"}`);
      // //form the deeplink                       
      // const deeplink = `https://teams.microsoft.com/l/entity/a7e6c91e-5eed-4eb7-837a-3aeaa4eea6a7/MyWork?&context=${encodedContext}`;
      // textarea.value = deeplink;
      // document.body.appendChild(textarea);
      // textarea.select();
      // document.execCommand("copy"); //deprecated but there is an issue with navigator.clipboard api
      // document.body.removeChild(textarea);
        
        
      if (await inTeams()) {  
        console.log("copyTeamsDeepLink started");      
        await ensureTeamsSdkInitialized();
        microsoftTeams.shareDeepLink({ subEntityId: feedKey});
        microsoftTeams.getContext((context) => {
            console.log("copyTeamsDeepLink successCallback");   
            console.log(JSON.stringify(context));
            microsoftTeams.shareDeepLink({ subEntityId: feedKey});
        });
      } 
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
  }
