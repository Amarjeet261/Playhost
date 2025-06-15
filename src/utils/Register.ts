export interface FormField {
  label: string;
  name: string;
  type: string;
}

export const formFields: FormField[] = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email Address", name: "email", type: "email" },
  { label: "Choose a Username", name: "username", type: "text" },
  { label: "Phone", name: "phone", type: "text" },
  { label: "Password", name: "password", type: "password" },
  { label: "Re-enter Password", name: "confirmPassword", type: "password" },
];