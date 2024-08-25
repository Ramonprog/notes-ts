export type Position = {
    x: number;
    y: number;
};

export type Colors = {
    id: string;
    colorHeader: string;
    colorBody: string;
    colorText: string;
};

export type NotesData = {
    $id: number;
    body: string;
    colors: Colors;  
    position: Position;  
};

export interface NotesContextType {
  notes: NotesData[];
  addNote: (colors: Colors) => void;
  removeNote: (id: number) => void;
}