const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export const getData = () => [
  {
    name: "hello",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
  {
    name: "checking",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
  {
    name: "hi",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
  {
    name: "musu",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
  {
    name: "testing one",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
  {
    name: "first",
    mobile: "111134343",
    purpose_of_visit: "testing",
    occupation: "docter",
    arrival_date: "11/10/22",
    departure_date: "21/10/22",
    room_number: "12",
  },
];
export function insertEmployee(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function updateEmployee(data) {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id == data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
  let employees = getAllEmployees();
  employees = employees.filter((x) => x.id != id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}
