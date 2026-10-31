import React from "react";

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * ThemeToggle has been deprecated as theme change support is removed.
 * Returns null to safely maintain backwards-compatibility with any leftover imports.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = () => null;

export default ThemeToggle;
