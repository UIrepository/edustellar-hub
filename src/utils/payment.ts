
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
  // Check if Razorpay is loaded
  if (!window.Razorpay) {
    console.error("Razorpay SDK not loaded!");
    throw new Error("Razorpay SDK not loaded");
  }

  const options = {
    key: "rzp_live_vaLIiJidPPfFlr", // Using the live key
    amount: amount * 100, // Razorpay accepts amount in paise
    currency,
    description,
    name: "Annatya Overseas",
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#3399cc"
    },
    modal: {
      ondismiss: function() {
        console.log("Payment modal closed");
      }
    },
    // Restrict payment methods
    config: {
      display: {
        blocks: {
          banks: {
            name: "Pay via QR Code",
            instruments: [
              {
                method: "upi",
                flow: "qr"
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
    handler: function(response: any) {
      console.log("Payment successful", response);
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
    }
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
    return true;
  } catch (error) {
    console.error("Razorpay error:", error);
    throw error;
  }
};
