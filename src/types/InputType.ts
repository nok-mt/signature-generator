export interface InputType {
  lineTemp?: string;
  name: string;
  nameEn: string;
  company: string;
  department: string;
  address: string;
  mailAddress: string;
  phoneNumber: string;
  url: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  setNameEn?: React.Dispatch<React.SetStateAction<string>>;
  setCompany?: React.Dispatch<React.SetStateAction<string>>;
  setDepartment?: React.Dispatch<React.SetStateAction<string>>;
  setAddress?: React.Dispatch<React.SetStateAction<string>>;
  setMailAddress?: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
}
