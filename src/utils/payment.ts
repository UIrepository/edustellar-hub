
interface PaymentConfig {
  amount: number;
  currency?: string;
  description?: string;
}

export const getCoursePrice = (id: string): number => {
  switch (id) {
    case "neet-crash-course":
      return 1; // 1 rupee
    case "jee-advanced-math":
      return 99;
    case "neet-biology":
      return 599;
    default:
      return 499;
  }
};

export const initializeQRPayment = async ({ amount, currency = "INR", description = "Course Payment" }: PaymentConfig) => {
  const options = {
    key: "rzp_live_vaLIiJidPPfFlr", // Using the live key
    amount: amount * 100, // Razorpay accepts amount in paise
    currency,
    description,
    readonly: {
      method: true // Lock payment method to QR only
    },
    config: {
      display: {
        blocks: {
          banks: {
            name: "Pay via QR Code",
            instruments: [
              {
                method: "upi"
              }
            ]
          },
          other: { //hide other payment blocks
            name: "Other Payment Methods",
            instruments: []
          }
        },
        sequence: ["block.banks"],
        preferences: {
          show_default_blocks: false
        }
      }
    },
    handler: (response: any) => {
      console.log("Payment successful", response);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
