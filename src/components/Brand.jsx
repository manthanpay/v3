import { asset } from "../utils/assets";
export function Brand({ height = 44 }) {
  return (
    <img
      className="brand-logo"
      style={{ height }}
      src={asset("/logo.png")}
      alt="Manthan Pay – मंथन पे"
    />
  );
}
