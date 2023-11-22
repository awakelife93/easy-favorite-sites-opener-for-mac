"use strict";

const childProcess = require("child_process");
const sites = require("./sites.json");
const config = require("./config");

function selectBrowserName() {
  const browserAppName = {
    chrome: "Google Chrome",
    safari: "Safari",
    firefox: "Firefox",
  };

  return browserAppName[config.browser] ?? "Google Chrome";
}

function opener() {
  const browserName = selectBrowserName();

  Object.entries(sites).forEach(([siteName, siteUrl]) => {
    console.log(`open ${siteName} - ${siteUrl}`);

    const child = childProcess.exec(
      `open -a "${browserName}" ${siteUrl}`,
      (error) => {
        if (error) {
          console.error(`opener error ${error}`);
        }
      }
    );

    console.log(`child pid = ${child.pid} end`);
  });
}

opener();
