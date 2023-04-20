// Очистка выходных каталогов
import { deleteAsync } from "del";
export const reset = () => {
   return deleteAsync(['dist']);
}