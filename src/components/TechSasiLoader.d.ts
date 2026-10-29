import { FC } from "react";

export interface TechSasiLoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const TechSasiLoader: FC<TechSasiLoaderProps>;
export default TechSasiLoader;
