// Implement a function that delays an API request by 2 seconds:

// Implement a function delayedRequest(url) that retrieves data from the specified url
// Output the data to the console after 2 seconds
// Can test with any of the https://jsonplaceholder.typicode.com/ APIs

function delayedRequest(url) {
  setTimeout(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, 2000);
}

delayedRequest("https://jsonplaceholder.typicode.com/todos/1");
