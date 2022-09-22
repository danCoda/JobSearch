type Company = {
  name: string;
  address: {
    formattedAddress: string;
    zoneId: string;
  };
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
  milesToTrave: number;
  shifts: Shift[];
  branch: String;
  branchPhoneNumber: String;
};
