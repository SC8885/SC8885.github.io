// Flag to check if Teams SDK has been initialized
let teamsInitPromise = null;
let watchId;
const TRUSTED_ORIGIN = window.location.href;

/**
 * Checks if the Teams SDK has been initialized.
 * @returns {Promise<boolean>} A promise that resolves to true if the SDK was initialized successfully, false otherwise.
 */
async function checkTeamsSdkInitialized() {
  if (!teamsInitPromise) {
    try {
      await microsoftTeams.app.initialize();
      teamsInitPromise = true;
    } catch (error) {
      console.log("Error initializing Teams SDK:", error);
      teamsInitPromise = false;
    }
  }

  return teamsInitPromise;
}

/**
 * Ensures the Teams SDK is initialized.
 */
async function ensureTeamsSdkInitialized() {
  try {
    await checkTeamsSdkInitialized();
  } catch (error) {
    console.log("Error initializing Teams SDK:", error);
    teamsInitPromise = false;
  }
}

/**
 * Gets the Teams context.
 * @returns {Promise<object>} A promise that resolves to the Teams context if successful, an empty object otherwise.
 */
async function getTeamsContext() {
  try {
    await ensureTeamsSdkInitialized();
    return new Promise((resolve) => {
      microsoftTeams.getContext((context) => {
        resolve(context);
      });
    });
  } catch (error) {
    console.log("Error getting Teams context:", error);
    return {};
  }
}

/**
 * Gets a property from the Teams context.
 * @param {string} property - The property to get.
 * @param {string} defaultValue - The default value to return if the property is not found.
 * @returns {Promise<string>} A promise that resolves to the property value if successful, the default value otherwise.
 */
async function getTeamsContextProperty(property, defaultValue = "") {
  try {
    const context = await getTeamsContext();
    return context[property] || defaultValue;
  } catch (error) {
    console.log(`Error getting Teams context property ${property}:`, error);
    return defaultValue;
  }
}

/**
 * Gets the Teams tenant ID.
 * @returns {Promise<string>} A promise that resolves to the tenant ID if successful, an empty string otherwise.
 */
async function getTeamsTenantId() {
  return getTeamsContextProperty("tid");
}

/**
 * Gets the Teams user object ID.
 * @returns {Promise<string>} A promise that resolves to the user object ID if successful, an empty string otherwise.
 */
async function getTeamsUserObjectId() {
  return getTeamsContextProperty("userObjectId");
}

/**
 * Gets the Teams user principal name.
 * @returns {Promise<string>} A promise that resolves to the user principal name if successful, an empty string otherwise.
 */
async function getTeamsUserPrincipalName() {
  return getTeamsContextProperty("userPrincipalName");
}

/**
 * Gets the Teams theme.
 * @returns {Promise<string>} A promise that resolves to the theme if successful, "default" otherwise.
 */
async function getTeamsTheme() {
  return getTeamsContextProperty("theme", "default");
}

/**
 * Gets the Teams token.
 * @returns {Promise<string>} A promise that resolves to the Teams token if successful, an empty string otherwise.
 */
async function getTeamsToken() {
  try {
    await ensureTeamsSdkInitialized();
    return new Promise((resolve, reject) => {
      microsoftTeams.authentication.getAuthToken({
        successCallback: resolve,
        failureCallback: (error) => reject(error),
      });
    });
  } catch (error) {
    console.log("Error getting Teams Token:", error);
    return "";
  }
}

/**
 * Gets the Teams deep link.
 * @returns {Promise<string>} A promise that resolves to the deep link if successful, an empty string otherwise.
 */
async function getTeamsDeepLink() {
  return getTeamsContextProperty("subEntityId");
}

/**
 * Navigates to a tab with a given URL.
 * @param {string} launchUrl - The URL to navigate to.
 * @param {string} teamsAppId - The Teams app ID.
 * @returns {Promise<boolean>} A promise that resolves to true if the navigation was successful, false otherwise.
 */
async function navigateToTabWithUrl(launchUrl, teamsAppId) {
  console.log("Navigating to tab with url: ", launchUrl);
  return new Promise((resolve) => {
    try {
      const deeplink = createTeamsDeeplink(launchUrl, teamsAppId);
      if (!deeplink) {
        console.log("Empty deeplink");
        resolve(false);
        return;
      }

      microsoftTeams.executeDeepLink(deeplink, (err) => {
        resolve(!err);
      });
    } catch (error) {
      console.log("Error in navigateToTabWithUrl:", error);
      resolve(false);
    }
  });
}

/**
 * Copies a project deep link to the clipboard.
 * @param {string} title - The title of the project.
 * @param {string} deeplink - The deep link to copy.
 * @returns {Promise<boolean>} A promise that resolves to true if the copy was successful, false otherwise.
 */
async function copyProjectDeepLink(title, deeplink) {
  console.log("Copying deeplink: ", deeplink);
  return new Promise(async (resolve) => {
    try {
      await navigator.clipboard.writeText(`${title}: ${deeplink}`);
      resolve(true);
    } catch (err) {
      console.log("copyProjectDeepLink Failed to copy Teams Deeplink: ", err);
      resolve(false);
    }
  });
}

/**
 * Shares content to Teams.
 * @param {string} title - The title of the content.
 * @param {string} appLink - The link to the app.
 * @param {string} teamsAppId - The Teams app ID.
 * @param {boolean} isCopyLink - Whether to copy the link.
 * @returns {Promise<boolean>} A promise that resolves to true if the share was successful, false otherwise.
 */
function shareToTeams(title, appLink, teamsAppId) {
  console.log("shareToTeams title: ", title);
  const deeplink = createTeamsDeeplink(appLink, teamsAppId);
  console.log("shareToTeams deeplink: ", deeplink);
  if (!deeplink) {
    console.log("shareToTeams Empty deeplink");
    return false;
  }

  try {
    console.log("shareToTeams shareWebContent");
    shareWebContent(title, deeplink);
    return true;
  } catch (error) {
    console.log("Error in shareToTeams:", error);
    return false;
  }
}

/**
 * Shares web content to Teams.
 * @param {string} title - The title of the content.
 * @param {string} deeplink - The deep link to the content.
 * @returns {Promise<boolean>} A promise that resolves to true if the share was successful, false otherwise.
 */
function shareWebContent(title, deeplink) {
  console.log("shareWebContent started");
  microsoftTeams.sharing.shareWebContent({
    content: [
      {
        type: "URL",
        url: deeplink,
        message: title,
        preview: true,
      },
    ],
  });
  console.log("shareWebContent ended");
}

/**
 * Creates a Teams deep link.
 * @param {string} appLink - The link to the app.
 * @param {string} teamsAppId - The Teams app ID.
 * @returns {string} The created deep link, or an empty string if the entity ID could not be determined.
 */
function createTeamsDeeplink(appLink, teamsAppId) {
  const entityId = getEntityId(appLink);
  if (!entityId) {
    console.log("Invalid entityId");
    return "";
  }

  const encodedContext = encodeURIComponent(`{"subEntityId":"${appLink}"}`);
  const deeplink = `https://teams.microsoft.com/l/entity/${teamsAppId}/${entityId}?&context=${encodedContext}`;

  console.log("Created deeplink: ", deeplink);
  return deeplink;
}

/**
 * Gets the entity ID from an app link.
 * @param {string} appLink - The app link.
 * @returns {string} The entity ID, or an empty string if the entity ID could not be determined.
 */
function getEntityId(appLink) {
  if (appLink.includes("mywork://")) {
    return "mywork";
  }
  if (appLink.includes("qwalk://")) {
    return "qwalk";
  }
  return "";
}

/**
 * Downloads a file.
 * @param {string} url - The URL of the file.
 * @param {string} filename - The name of the file.
 * @returns {boolean} Returns true if the download was successful, false otherwise.
 */
async function rflxDownloadFileJS(url, filename) {
  console.log("Downloading file: ", url);
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
} 

const options = {
  enableHighAccuracy: true,
  timeout: 8000,
  maximumAge: 60000,
};

async function watchPosition() {
  console.log('Entered watchPosition');
  if (navigator.geolocation) {
    console.log(`starting watchPosition...`);
    return new Promise((resolve) => {
      try {
        watchId = navigator.geolocation.watchPosition(
          pos => {
            const crd = pos.coords;
            console.log(`Latitude: ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            window.postMessage([crd.latitude, crd.longitude], TRUSTED_ORIGIN);
            resolve([crd.latitude, crd.longitude]);
          },
          (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            window.postMessage([err.code], TRUSTED_ORIGIN);
            resolve([err.code]);
          },
          options
        );
      } catch (error) {
        console.log(`ERROR in watchPosition(${error}): ${error.message}`);
        window.postMessage([error.code], TRUSTED_ORIGIN);
        resolve([error.code]);
      }
    });
  } else {
    console.warn(`Geolocation is not supported by this browser.`);
    window.postMessage([0], TRUSTED_ORIGIN);
    resolve([0]);
  }
}

function clearWatch() {
  console.log('Entered clearWatch');
  if(watchId != null) {
    console.log('Geolocation watch cleared');
    navigator.geolocation.clearWatch(watchId);
  }
}

