declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}
declare global {
  interface Window {
    HSRangeSlider: any; // Define it as 'any' if you're unsure of the exact type
  }
}
export {};