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
            console.log(result);
            //call server side to exchange the  token from teams with access token & used it to call graph
            fetch("/token?token=" + result)              
                        .then(json => json.json()).then(result=> {
                          alert(result);
                          console.log(result);
                        }); 
          
        },
        failureCallback: function (error) { console.log("Failure: " + error); },
      };

      microsoftTeams.authentication.getAuthToken(authTokenRequest);
  });
}
