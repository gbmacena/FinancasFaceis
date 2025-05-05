import { useState, useEffect } from "react";
import { Category } from "@/types";
import { toast } from "sonner";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const mockCategories: Category[] = [
          { id: 2, name: "Alimentação" },
          { id: 3, name: "Transporte" },
          { id: 4, name: "Entretenimento" },
          { id: 5, name: "Outros" },
          { id: 6, name: "Saúde" },
          { id: 7, name: "Educação" },
          { id: 8, name: "Compras" },
          { id: 9, name: "Viagem" },
          { id: 10, name: "Investimentos" },
          { id: 11, name: "Dívidas" },
        ];
        setCategories(mockCategories);
      } catch {
        toast.error("Erro ao carregar categorias. Tente novamente.");
      }
    };

    fetchCategories();
  }, []);

  return categories;
};
