
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
  await microsoftTeams.initialize();
  microsoftTeams.getContext((context) => {
      console.log("TeamsContext successCallback");
      window.rflxMediator('getTeamsContext', JSON.stringify(context));
      microsoftTeams.applications.setApplicationIconBadgeNumber(6);
  microsoftTeams.appInitialization.setTabBadge(7);
  microsoftTeams.settings.setTabBadge("8", "#FF0000");
  });
  
}

// Get Teams context
async function setTeamsBadgeCount() {
  console.log("Setting teams badge count");
  await microsoftTeams.initialize(() => {
  microsoftTeams.appInitialization.notifySuccess();

  // Set the badge count
  microsoftTeams.applications.setApplicationIconBadgeNumber(3);
  microsoftTeams.appInitialization.setTabBadge(4);
  microsoftTeams.settings.setTabBadge("5", "#FF0000");
});

}
