import { useState, useEffect } from "react";
import { Category } from "@/types";
import { toast } from "sonner";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const mockCategories: Category[] = [
          { id: 1, name: "Alimentação" },
          { id: 2, name: "Transporte" },
          { id: 3, name: "Entretenimento" },
          { id: 4, name: "Outros" },
          { id: 5, name: "Saúde" },
          { id: 6, name: "Educação" },
          { id: 7, name: "Compras" },
          { id: 8, name: "Viagem" },
          { id: 9, name: "Investimentos" },
          { id: 10, name: "Dívidas" },
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
