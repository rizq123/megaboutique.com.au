import Image from 'next/image';

export default function PaymentMethod() {
    return (
      <div className="container mx-auto py-6 border-t">
        <div className="flex justify-center space-x-8">
          <Image src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-visa.png" alt="Visa" width="0"
      height="0"
      sizes="100%"
      className="w-auto h-auto " />
          <Image src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-mastercard.png" alt="Mastercard" width="0"
      height="0"
      sizes="100%"
      className="w-auto h-auto " />
          <Image src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-paypal.png" alt="PayPal" width="0"
      height="0"
      sizes="100%"
      className="w-auto h-auto " />
        </div>
        <div className="flex justify-center">
          <hr className="border-t-1 mt-6 w-[70%]" />
        </div>
      </div>
    );
}
