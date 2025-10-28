/**
 * To integrate search into your documentation:
 * 	1. Go to https://docsearch.algolia.com/, sign up, and set up your documentation database.
 * 	2. Replace the following constants with the credentials found in your dashboard:
 */

const APP_ID = "BH4D9OD16A";
const INDEX_NAME = "docsearch";
const API_KEY = "25626fae796133dc1e734c6bcaaeac3c";

function initializeDocSearch() {
  window.docsearch({
    container: "#docsearch",
    appId: APP_ID,
    indexName: INDEX_NAME,
    apiKey: API_KEY,
    placeholder: "Search documentation…",
    searchParameters: {
      facetFilters: [],
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeDocSearch();
});
