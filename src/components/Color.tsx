import { Colors } from "../types";

interface ColorProps {
  color: Colors;
  handleAddColor: (color: Colors) => void;
}

export function Color({ color, handleAddColor }: ColorProps) {

  return (
    <div
      onClick={() => handleAddColor(color)}
      className="color"
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
}