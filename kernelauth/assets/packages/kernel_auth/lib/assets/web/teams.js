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
    } catch (e) {
        console.log(`${e} from Teams SDK, may be running outside of Teams`);
        return false;
    }
}

// Get Teams context
async function getTeamsContext() {
    try {
        if (await isInTeams()) {
            console.log("getting TeamsContext..");
            microsoftTeams.getContext((context) => {
                console.log("TeamsContext successCallback");
                window.rflxMediator('getTeamsContext', JSON.stringify(context), '');
            });
        } else {
            console.log("App not embedded in Teams");
            window.rflxMediator('getTeamsContext', '', '');
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsContext`);
        window.rflxMediator('getTeamsContext', '', '');
    }
}

// Get Teams context
async function getTeamsTenantId() {
    try {
        if (await isInTeams()) {
            console.log("getting Teams TenantId..");
            microsoftTeams.getContext((context) => {
                let obj = JSON.parse(JSON.stringify(context));
                console.log("TeamsTenantId successCallback: ", obj.tid)
                window.rflxMediator('getTeamsTenantId', obj.tid, '');
            });
        } else {
            console.log("App not embedded in Teams");
            window.rflxMediator('getTeamsTenantId', 'failed', '');
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsTenantId`);
        window.rflxMediator('getTeamsTenantId', 'failed', '');
    }
}

// Get UserObjectId
async function getTeamsUserObjectId() {
    try {
        if (await isInTeams()) {
            console.log("getting Teams UserObjectId..");
            microsoftTeams.getContext((context) => {
                let obj = JSON.parse(JSON.stringify(context));
                console.log("getTeamsUserObjectId successCallback: ", obj.userObjectId)
                window.rflxMediator('getTeamsUserObjectId', obj.userObjectId, '');
            });
        } else {
            console.log("App not embedded in Teams");
            window.rflxMediator('getTeamsUserObjectId', 'failed', '');
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsUserObjectId`);
        window.rflxMediator('getTeamsUserObjectId', 'failed', '');
    }
}

// Get UserPrincipalName
async function getTeamsUserPrincipalName() {
    try {
        if (await isInTeams()) {
            console.log("getting Teams UserPrincipalName..");
            microsoftTeams.getContext((context) => {
                let obj = JSON.parse(JSON.stringify(context));
                console.log("getTeamsUserPrincipalName successCallback: ", obj.userPrincipalName)
                window.rflxMediator('getTeamsUserPrincipalName', obj.userPrincipalName, '');
            });
        } else {
            console.log("App not embedded in Teams");
            window.rflxMediator('getTeamsUserPrincipalName', 'failed', '');
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsUserPrincipalName`);
        window.rflxMediator('getTeamsUserPrincipalName', 'failed', '');
    }
}

// Get a client side token from Teams
async function getTeamsToken() {
    try {
        if (await isInTeams()) {
            console.log("getting TeamsToken..");
            microsoftTeams.authentication.getAuthToken({
                successCallback: (result) => {
                    console.log("TeamsToken successCallback", result);
                    window.rflxMediator('getTeamsToken', result, '');
                },
                failureCallback: (error) => {
                    console.log("TeamsToken failureCallback" + error);
                    window.rflxMediator('getTeamsToken', 'failed', '');
                }
            });
        } else {
            console.log("App not embedded in Teams");
            window.rflxMediator('getTeamsToken', 'failed', '');
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsToken`);
        window.rflxMediator('getTeamsToken', 'failed', '');
    }

}

async function getTeamsDeepLink() {
    try {
        if (await isInTeams()) {
            microsoftTeams.getContext((context) => {
                console.log("getTeamsDeepLink successCallback");
                console.log(JSON.stringify(context));
                let obj = JSON.parse(JSON.stringify(context));
                window.rflxMediator('getTeamsDeepLink', obj.subEntityId, '');
            });
        } else {
            console.log("App not embedded in teams");
        }
    } catch (e) {
        console.log(`${e} from Teams SDK, in getTeamsDeepLink`);
    }

}

function createTeamsDeeplink(appLink, teamsAppId) {
    try {
        //set entityId
        let entityId = '';
        if (appLink.includes('mywork://')) {
            entityId = 'mywork';
        } else if (appLink.includes('qwalk://')) {
            entityId = 'qwalk';
        }
        //form the deeplink
        if (entityId == '') {
            throw new Error('Invalid entityId');
        } else {
            //appLink = mywork://feedkey?feedkey=${feedKey}
            const encodedContext = encodeURIComponent(`{"subEntityId":"${appLink}"}`);
            //form the deeplink
            const deeplink = `https://teams.microsoft.com/l/entity/${teamsAppId}/${entityId}?&context=${encodedContext}`;
            console.log('Created deeplink: ', deeplink);
            return deeplink
        }
    } catch (err) {
        console.error('Failed to create teams deeplink: ', err);
        return '';
    }
}

async function navigateToTabWithUrl(launchUrl, teamsAppId) {
    try {
        const deeplink = createTeamsDeeplink(launchUrl, teamsAppId);
        if (deeplink != '') {
            console.log(`navigateToTabWithUrl: ${launchUrl} and teams deeplink: ${deeplink}`);
            //execute deeplink
            microsoftTeams.executeDeepLink(deeplink)
        } else {
            throw new Error('Empty deeplink');
        }
    } catch (error) {
        console.error('Failed to navigate to tab with Url - ', error);
        window.rflxMediator('navigateToTabWithUrl', 'failed', '');
    }
}

async function copyProjectDeepLink(title, deeplink) {
    try {
        //temp textarea for copy to clipboard functionality
        let textarea = document.createElement("textarea");
        console.log('Copying deeplink: ', deeplink);
        textarea.value = `${title}: ${deeplink}`;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy"); //deprecated but there is an issue with navigator.clipboard api
        document.body.removeChild(textarea);
    } catch (err) {
        console.error('copyProjectDeepLink Failed to copy Teams Deeplink: ', err);
    }
}

async function shareToTeams(isMobileOrTablet, title, appLink, teamsAppId) {
    console.log('shareToTeams isMobileOrTablet: ', isMobileOrTablet);
    const deeplink = createTeamsDeeplink(appLink, teamsAppId);
    if (deeplink != '') {
        if (isMobileOrTablet) {
            //Copy link to clipboard because MSFT doenst support share to teams feature for Tablet/Mobile
            copyProjectDeepLink(title, deeplink);
        } else {
            console.log('shareToTeams deepLink: ', deeplink);
            try {
                if (await isInTeams()) {
                    microsoftTeams.sharing.shareWebContent({
                        content: [
                            {
                                type: 'URL',
                                url: deeplink,
                                message: title,
                                preview: true
                            }
                        ]
                    });
                } else {
                    console.log("shareToTeams : App not embedded in Teams");
                }
            } catch (error) {
                console.error('shareToTeams Failed to copy Teams Deeplink: ', error);
                copyProjectDeepLink(title, deeplink);
            }
        }
    }
}

function rflxDownloadFileJS(url, filename) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let blob = new Blob([xhr.response], {type: 'octet/stream'});
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };
    xhr.send();
}



function success(pos) {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Teams.js Latitude : ${crd.latitude}`);
    console.log(`Teams.js Longitude: ${crd.longitude}`);
    console.log(`Teams.js More or less ${crd.accuracy} meters.`);
    window.rflxMediator('watchPosition', crd.latitude, crd.longitude);
  }

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

async function watchPosition() {
    console.log('Entered watchPosition');
      if (navigator.geolocation) {
        console.log('geolocation permission : success');
        navigator.geolocation.watchPosition(success, error, options);
      } else {
        console.warn(`Geolocation is not supported by this browser.`);
        return null;
      }
}



