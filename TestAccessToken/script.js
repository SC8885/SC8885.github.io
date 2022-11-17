function showAlert(message) {
    alert(message)
}

function initializeMST(message) {
    alert(message)
    microsoftTeams.app.initialize().then(() => {
        microsoftTeams.app.getContext().then(async (context) => {
          // Generate random state string and store it, so we can verify it in the callback
          var currentURL = new URL(window.location);
          var clientId = currentURL.searchParams.get("clientId");
          var scope = currentURL.searchParams.get("scope");
          var loginHint = currentURL.searchParams.get("loginHint");

          const msalConfig = {
            auth: {
              clientId: clientId,
              authority: `https://login.microsoftonline.com/${context.user.tenant.id}`,
              navigateToLoginRequestUrl: false
            },
            cache: {
              cacheLocation: "sessionStorage",
            },
          }

          alert(context.user.tenant.id)

          const msalInstance = new msal.PublicClientApplication(msalConfig);
          const scopesArray = scope.split(" ");
          const scopesRequest = {
            scopes: scopesArray,
            redirectUri: window.location.origin + `/auth-end.html?clientId=${clientId}`,
            loginHint: loginHint
          };
          await msalInstance.loginRedirect(scopesRequest);

          var authTokenRequest = {
            successCallback: function (result) {
                //call server side to exchange the  token from teams with access token & used it to call graph
                fetch("/token?token=" + result)              
                            .then(json => json.json()).then(result=> {
                                document.getElementById("jsonData").textContent = JSON.stringify(result, undefined, 2);
                            });
                           
              
            },
            failureCallback: function (error) { console.log("Failure: " + error); },
        };
        microsoftTeams.authentication.getAuthToken(authTokenRequest)
            .then((response) => {
            if (!response) {
                console.error('GetToken failed');
                reject();
                return;
            }
            resolve(response);
            })
            .catch((error) => {
            console.error('GetToken failed', error);
            reject();
            });
        });
      });
}