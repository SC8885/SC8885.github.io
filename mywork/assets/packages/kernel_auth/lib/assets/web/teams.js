
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
        await ensureTeamsSdkInitialized();
        const context = await microsoftTeams.app.getContext();
        window.rflxMediator('isInTeams', (context.app.host.name === microsoftTeams.HostName.teams));
        return (context.app.host.name === microsoftTeams.HostName.teams);
    }
    catch (e) {
        console.log(`${e} from Teams SDK, may be running outside of Teams`);  
        window.rflxMediator('isInTeams', false);  
        return false;
    }
}


// Get a client side token from Teams
async function getTeamsToken() {
  if (await isInTeams()) {  
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
  } 
}

// Get Teams context
async function getTeamsContext() {
  if (await isInTeams()) {  
    console.log("getting TeamsContext");      
    await ensureTeamsSdkInitialized();
    microsoftTeams.getContext((context) => {
      console.log("TeamsContext successCallback");
      window.rflxMediator('getTeamsContext', JSON.stringify(context));
    });
  } 
}