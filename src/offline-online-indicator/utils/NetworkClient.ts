export const sendOnlineStatus = (email: string, name: string) => {
  const date: number = Date.now();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const data = {
    email: email,
    name: name,
    lastUpdated: date,
  };
  fetch("https://onlineofflineindicatorsd.azurewebsites.net/setUserStatus", {
    method: "POST",
    body: JSON.stringify(data),
    headers: myHeaders,
    redirect: "follow",
  })
    .then((response) => {
      response.text();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
};
