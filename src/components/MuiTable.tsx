import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mockData = [
  {
    id: 1,
    first_name: "Clemente",
    last_name: "Rudeyeard",
    email: "crudeyeard0@ed.gov",
    gender: "Male",
    ip_address: "176.133.234.52",
  },
  {
    id: 2,
    first_name: "Lonni",
    last_name: "Jira",
    email: "ljira1@icq.com",
    gender: "Female",
    ip_address: "0.29.74.247",
  },
  {
    id: 3,
    first_name: "Dot",
    last_name: "Keeble",
    email: "dkeeble2@yandex.ru",
    gender: "Female",
    ip_address: "177.112.40.107",
  },
  {
    id: 4,
    first_name: "Meggi",
    last_name: "Jolland",
    email: "mjolland3@pbs.org",
    gender: "Female",
    ip_address: "70.74.156.101",
  },
  {
    id: 5,
    first_name: "Beryle",
    last_name: "Powdrell",
    email: "bpowdrell4@columbia.edu",
    gender: "Female",
    ip_address: "66.26.177.59",
  },
  {
    id: 6,
    first_name: "Abram",
    last_name: "Sandyfirth",
    email: "asandyfirth5@wiley.com",
    gender: "Male",
    ip_address: "224.121.105.248",
  },
  {
    id: 7,
    first_name: "Putnem",
    last_name: "Van der Hoeven",
    email: "pvanderhoeven6@ft.com",
    gender: "Male",
    ip_address: "235.7.124.136",
  },
  {
    id: 8,
    first_name: "Moore",
    last_name: "Bedding",
    email: "mbedding7@noaa.gov",
    gender: "Male",
    ip_address: "229.85.46.24",
  },
  {
    id: 9,
    first_name: "Aaren",
    last_name: "Baudassi",
    email: "abaudassi8@wordpress.com",
    gender: "Female",
    ip_address: "0.220.25.235",
  },
  {
    id: 10,
    first_name: "Honoria",
    last_name: "Bailiss",
    email: "hbailiss9@forbes.com",
    gender: "Female",
    ip_address: "234.227.86.0",
  },
];
