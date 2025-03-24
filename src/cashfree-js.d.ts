declare module '@cashfreepayments/cashfree-js' {
    export interface Cashfree {
      checkout(options: { paymentSessionId: string; redirectTarget: string }): Promise<void>;
    }
  
    export function load(config: { mode: 'sandbox' | 'production' }): Promise<Cashfree>;
  }