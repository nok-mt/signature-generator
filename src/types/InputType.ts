export interface InputType {
  name: string;
  nameEn: string;
  company: string;
  department: string;
  mailAdress: string;
  phoneNumber: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  setNameEn?: React.Dispatch<React.SetStateAction<string>>;
  setCompany?: React.Dispatch<React.SetStateAction<string>>;
  setDepartment?: React.Dispatch<React.SetStateAction<string>>;
  setMailAdress?: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
}
