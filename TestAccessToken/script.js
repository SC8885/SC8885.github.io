function showAlert(message) {
    alert(message)
}

function getTeamsContext() {
  microsoftTeams.app.getContext().then(async (context) =>{
    
  });
}

function initializeMST(message) {
  microsoftTeams.app.initialize().then(() => {
    microsoftTeams.app.getContext().then(async (context) => {
      alert(context.user.tenant.id)
    });

    var authTokenRequest = {
        successCallback: function (result) {
            console.log("Success: " + result);
        },
        failureCallback: function (error) { console.log("Failure: " + error); },
      };

      microsoftTeams.authentication.getAuthToken(authTokenRequest);
  });
}
