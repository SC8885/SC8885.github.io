function showAlert(message) {
  alert(message)
}

function getTeamsContext() {
  microsoftTeams.app.initialize().then(() => {
    microsoftTeams.app.getContext().then(async (context) => {
      alert(context.user.tenant.id)
    });
  });
} 

function getAuthToken() {
  microsoftTeams.app.initialize().then(()=> {
    var authTokenRequest = {
      successCallback: function (result) {
        console.log("Success: " + result);
        alert(result)
      },
      failureCallback: function (error) { console.log("Failure: " + error); },
    };

    microsoftTeams.authentication.getAuthToken(authTokenRequest);
  })

}