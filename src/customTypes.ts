type Address = {
  formattedAddress: string;
  zoneId: string;
};

type Company = {
  name: string;
  address: Address;
  reportTo: {
    name: string;
    phone: string;
  };
};

type Shift = {
  startDate: Date;
  endDate: Date;
};

export type Job = {
  jobId: string;
  jobTitle: {
    name: string;
    imageUrl: string;
  };
  company: Company;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: Shift[];
  branch: String;
  branchPhoneNumber: String;
  requirements: string[];
};

export type User = {
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
};
