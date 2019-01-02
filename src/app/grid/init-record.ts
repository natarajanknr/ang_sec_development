export class Init {
  load() {
    if (localStorage.getItem('records') === null || localStorage.getItem('records') == undefined) {
      console.log("initial set of records ...");
      var records = [
        {
          id: 1,
          name: "Ram",
          band:"B1",
          location: "Bangalore"
        },
        {
          id: 2,
          name: "Raj",
          band:"C1",
          location: "Chennai"
        },
        {
          id: 3,
          name: "Vinay",
          band:"A1",
          location: "Pune"
        }
      ];
      localStorage.setItem('records', JSON.stringify(records));
    }
    else {
      console.log("Loaded the records from local storage ...");
    }
  }
}