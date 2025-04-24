// Mock microsoftTeams object
var microsoftTeams = {
  registerOnThemeChangeHandler: function (callback) {
    console.log("registerOnThemeChangeHandler called");
    // Simulate theme change
    setTimeout(() => {
      console.log("Simulating theme change");
      callback("light");
    }, 2000);
  },
};

// Expose microsoftTeams to global scope for Dart interop
window.microsoftTeams = microsoftTeams;

// Cached result of whether we're running in Teams
let cachedResult = true;

async function isInTeams() {
  return cachedResult;
}

async function ensureTeamsSdkInitialized() {
  return Promise.resolve();
}

async function checkIfInTeams() {
  return cachedResult;
}

async function getTeamsContext() {
  return Promise.resolve(
    JSON.stringify({ theme: "default", tid: "mock-tenant-id" })
  );
}

async function getTeamsContextProperty(property) {
  const mockContext = {
    tid: "mock-tenant-id",
    userObjectId: "mock-user-object-id",
    theme: "default",
    userPrincipalName: "mock-user-principal-name",
    subEntityId: "mock-sub-entity-id",
  };
  return Promise.resolve(mockContext[property]);
}

async function getTeamsTenantId() {
  return Promise.resolve("mock-tenant-id");
}

async function getTeamsUserObjectId() {
  return Promise.resolve("mock-user-object-id");
}

async function getTeamsTheme() {
  return Promise.resolve("default");
}

async function getTeamsUserPrincipalName() {
  return Promise.resolve("mock-user-principal-name");
}

async function getTeamsToken() {
  return Promise.resolve("mock-token");
}

async function getTeamsDeepLink() {
  return Promise.resolve("mock-deep-link");
}

async function navigateToTabWithUrl(launchUrl, teamsAppId) {
  return Promise.resolve(true);
}

async function watchPosition() {
  return Promise.resolve([42, -71]);
}

async function copyProjectDeepLink(title, deeplink) {
  return Promise.resolve(true);
}

async function shareToTeams(title, appLink, teamsAppId) {
  return Promise.resolve(true);
}

function createTeamsDeeplink(appLink, teamsAppId) {
  return "mock-deeplink";
}

function getEntityId(appLink) {
  return "mock-entity-id";
}

function rflxDownloadFileJS(url, filename) {
  return Promise.resolve(true);
}
