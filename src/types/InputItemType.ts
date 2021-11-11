export interface InputItemType {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
