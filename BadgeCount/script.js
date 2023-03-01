
// Get a client side token from Teams
async function getTeamsToken() {
  console.log("getting TeamsToken");
  await microsoftTeams.initialize();
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

// Get Teams context
async function getTeamsContext() {
  console.log("getting TeamsContext");
  microsoftTeams.initialize(() => {
    microsoftTeams.appInitialization.notifySuccess({
      suggestedDisplayName: "My Teams App"
    });
    console.log("TeamsContext initialize");
    microsoftTeams.appInitialization.setTabBadge(1);
  });
  microsoftTeams.getContext((context) => {
      console.log("TeamsContext successCallback");
      window.rflxMediator('getTeamsContext', JSON.stringify(context));
  });
}
