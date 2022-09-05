export {};

declare global {
  interface Window {
    Klarna: {
      Payments: {
        authorize: (
          a: {
            payment_method_category: string;
            auto_finalize: boolean;
          },
          b: (c: { authorization_token: string }) => void
        ) => void;
      };
    };
  }
}
