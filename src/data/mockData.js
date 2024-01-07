import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Lev Kia",
    email: "levkia@gmail.com",
    age: 42,
    phone: "+254715762536",
    access: "Doctor",
  },
  {
    id: 2,
    name: "Revon Chey",
    email: "revonchey@gmail.com",
    age: 42,
    phone: "+254736253766",
    access: "Doctor",
  },
  {
    id: 3,
    name: "Rora Tid",
    email: "roratid@gmail.com",
    age: 34,
    phone: "+254779362542",
    access: "Admin",
  },
  {
    id: 4,
    name: "Teli Moh",
    email: "telimoh@gmail.com",
    age: 37,
    phone: "+254765243567",
    access: "Radiologist",
  },
  {
    id: 5,
    name: "Leti Mona",
    email: "letimona@gmail.com",
    age: 39,
    phone: "+254709356783",
    access: "Doctor",
  },
  {
    id: 6,
    name: "Jim Cole",
    email: "jimcole@gmail.com",
    age: 44,
    phone: "+254756382763",
    access: "Radiologist",
  },
  {
    id: 7,
    name: "Rick Johnson",
    email: "rickjohnson@gmail.com",
    age: 28,
    phone: "+254763840937",
    access: "Admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Ric Flair",
    email: "ricflair@gmail.com",
    age: 20,
    phone: "+254745238976",
    city: "Nairobi",
    userId: 1009,
  },
  {
    id: 2,
    name: "Morty Ron",
    email: "mortyron@gmail.com",
    age: 36,
    phone: "+254774538976",
    city: "Nairobi",
    userId: 1113,
  },
  {
    id: 3,
    name: "Vince Lin",
    email: "vincelin@gmail.com",
    age: 33,
    phone: "+254786338976",
    city: "Thika",
    userId: 1234,
  },
  {
    id: 4,
    name: "Ric Flair",
    email: "ricflair@gmail.com",
    age: 20,
    phone: "+254745238976",
    city: "Nairobi",
    userId: 1167,
  },
  {
    id: 5,
    name: "Blair Kev",
    email: "blairkev@gmail.com",
    age: 38,
    phone: "+254778238976",
    city: "Nairobi",
    userId: 1203,
  },
  {
    id: 6,
    name: "Riz Lett",
    email: "rizlett@gmail.com",
    age: 32,
    phone: "+254745238976",
    city: "Nairobi",
    userId: 1003,
  },
  {
    id: 7,
    name: "Zena Lena",
    email: "zenalena@gmail.com",
    age: 29,
    phone: "+254745536976",
    city: "Ruiru",
    userId: 1132,
  },
  {
    id: 8,
    name: "Tira Lev",
    email: "tiralev@gmail.com",
    age: 30,
    phone: "+254745227976",
    city: "Nairobi",
    userId: 1020,
  },
  {
    id: 9,
    name: "Tina Ret",
    email: "tinaret@gmail.com",
    age: 42,
    phone: "+254745838976",
    city: "Juja",
    userId: 1312,
  },
];

export const mockHistory = [
  {
    patient: "Theo Watte",
    date: "2023-11-15",
    diagnosis: "Normal",
  },
  {
    patient: "Julian Lene",
    date: "2023-11-13",
    diagnosis: "Pneumonia",
  },
  {
    patient: "John Doe",
    date: "2023-11-15",
    diagnosis: "lung cancer",
  },
  {
    patient: "Jane Doe",
    date: "2023-10-12",
    diagnosis: "Bronchiectasis",
  },
  {
    patient: "Lilian Pele",
    date: "2023-11-12",
    diagnosis: "lung cancer",
  },
];
export const mockLineData = [
  {
    id: "Lung Cancer",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "February",
        y: 75,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "August",
        y: 232,
      },
      {
        x: "September",
        y: 281,
      },
      {
        x: "October",
        y: 1,
      },
      {
        x: "November",
        y: 35,
      },
      {
        x: "December",
        y: 14,
      },
    ],
  },
  {
    id: "Bronchiectasis",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "January",
        y: 212,
      },
      {
        x: "February",
        y: 190,
      },
      {
        x: "March",
        y: 270,
      },
      {
        x: "April",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 175,
      },
      {
        x: "July",
        y: 33,
      },
      {
        x: "August",
        y: 189,
      },
      {
        x: "September",
        y: 97,
      },
      {
        x: "October",
        y: 87,
      },
      {
        x: "November",
        y: 299,
      },
      {
        x: "December",
        y: 251,
      },
    ],
  },
  {
    id: "Pneumonia",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "January",
        y: 191,
      },
      {
        x: "February",
        y: 136,
      },
      {
        x: "March",
        y: 91,
      },
      {
        x: "April",
        y: 190,
      },
      {
        x: "May",
        y: 211,
      },
      {
        x: "June",
        y: 152,
      },
      {
        x: "July",
        y: 189,
      },
      {
        x: "August",
        y: 152,
      },
      {
        x: "September",
        y: 8,
      },
      {
        x: "October",
        y: 197,
      },
      {
        x: "November",
        y: 107,
      },
      {
        x: "December",
        y: 170,
      },
    ],
  },
];