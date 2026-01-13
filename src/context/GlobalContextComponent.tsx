import { createContext, useState } from "react";

export type formDataType = {
  description: string;
  amount: string;
  type: string;
  id?: number;
};

type contextType = {
  formData: formDataType;
  setFormData: (value: formDataType) => void;
  totalTransaction: formDataType[] | [];
  setTotalTransaction: (value: formDataType[]) => void;
};

export const GlobalContext = createContext<contextType | null>(null);

export default function GlobalContextComponent({
  children,
}: {
  children: React.ReactElement;
}) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "income",
  });
  const [totalTransaction, setTotalTransaction] = useState<formDataType[] | []>(
    []
  );

  return (
    <GlobalContext.Provider
      value={{ formData, setFormData, totalTransaction, setTotalTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
