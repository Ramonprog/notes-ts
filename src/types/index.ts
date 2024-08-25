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

export type FakeDataItem = {
    $id: number;
    body: string;
    colors: Colors;  
    position: Position;  
};