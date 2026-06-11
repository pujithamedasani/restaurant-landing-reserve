type RestaurantErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type RestaurantEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: RestaurantErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __restaurantEvents?: RestaurantEvents;
  }
}

export function reportRestaurantError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__restaurantEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
