const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function getCurrentBreakpoint(): string {
  const windowWidth = window.innerWidth;

  let currentBreakpoint = "";

  for (const breakpoint in breakpoints) {
    if (windowWidth >= breakpoints[breakpoint as Breakpoint]) {
      currentBreakpoint = breakpoint;

      console.log({ breakpoint, currentBreakpoint, windowWidth });
    }
  }

  return currentBreakpoint;
}
