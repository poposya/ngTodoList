export interface TodoItem {
  itemName: string;
  status: boolean;
}
export interface TodoList {
  id?: string;
  name: string;
  items: TodoItem[];
}
