"use strict";

try {
  require("./opener")();
} catch (error) {
  console.error("Failed to open browser site", error);
}
