// Implement a table with data fetched from API:

// Fetch users from https://jsonplaceholder.typicode.com/users
// Display name, email, address, phone and website for each user in a table
// The address should contain only street, suite, city and zipcode separated by commas

// Write your JS code here
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then((items) => {
    console.log(items);
    // items.forEach((item) => {
    //   const name = item.name;
    //   const email = item.email;
    //   const address = item.address;
    //   const phone = item.phone;
    //   const website = item.website;
    //   const displayedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

    //   const tr = document.createElement("tr");
    //   const tdName = document.createElement("td");
    //   tdName.textContent = name;

    //   const tdEmail = document.createElement("td");
    //   tdEmail.textContent = email;

    //   const tdAddress = document.createElement("td");
    //   tdAddress.textContent = displayedAddress;

    //   const tdPhone = document.createElement("td");
    //   tdPhone.textContent = phone;

    //   const tdWebsite = document.createElement("td");
    //   tdWebsite.textContent = website;

    //   tr.appendChild(tdName);
    //   tr.appendChild(tdEmail);
    //   tr.appendChild(tdAddress);
    //   tr.appendChild(tdPhone);
    //   tr.appendChild(tdWebsite);

    //   const tbody = document.querySelector("tbody");
    //   tbody.appendChild(tr);
    // });
    items.forEach((item) => {
      const displayedAddress = `${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`;

      const tr = document.createElement("tr");

      const values = [
        item.name,
        item.email,
        displayedAddress,
        item.phone,
        item.website,
      ];

      values.forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });

      const tbody = document.querySelector("tbody");
      tbody.appendChild(tr);
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
