
document.addEventListener('click', async e => {


  const el = e.target;
  const elID = el.id;
  const todo = el.getAttribute("todo");
  // const key = el.getAttribute("key");
  const customer = {};
  if (todo === "Post") {

    customer.First_Name = FirstNID.value
    customer.Last_Name = LastNID.value
    customer.Phone_Number = PhoneID.value
    customer.Email = EmailID.value
    customer.Reason = ReasonID.value
    customer.Symptoms = SymptomsID.value
    customer.Travel = TravelID.value
    customer.Distancing = DistancingID.value
    customer.IsolationID = IsolationID.value

    console.log(customer);
    postData("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/customer", customer)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  }
  if (todo === "Get") {
    console.log("this is from Get")
    fetch("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/customer")
  .then(response => response.json())
  .then(data => console.log(data));
  }
})
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


