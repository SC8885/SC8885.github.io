function alertMessage(text) {
  alert(text)
  console.log(text);
}

async function initializeTeams() {
  try {
    await microsoftTeams.app.initialize();
    console.log("microsoftTeams initialization success: " + e);
    return true;
  } catch(e) {
    console.log("microsoftTeams initialization failed: " + e);
    return false;
  }
}
  
async function getTeamsContext() {
  if(await initializeTeams()) {
    console.log("Teams initialize : getTeamsContext");
    microsoftTeams.app.getContext().then(async (context) => {
      return (context.user.tenant.id);
    });
  }
} 
  
async function getTeamsAuthToken() {
  if(await initializeTeams()) {
    console.log("Teams initialize : getAuthToken");
    var authTokenRequest = {
      successCallback: function (result) {
        console.log("Success: " + result);
        return(result);
      },
      failureCallback: function (error) { console.log("Failure: " + error); },
    };
  
    microsoftTeams.authentication.getAuthToken(authTokenRequest);
  }
}