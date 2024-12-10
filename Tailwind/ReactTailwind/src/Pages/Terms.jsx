const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex justify-center">
          Terms and Conditions
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300 flex justify-center">
          Effective Date: <strong>[Insert Date]</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            By accessing or using <strong>[CYCLE RENTAL]</strong>, you agree to
            be bound by these Terms. If you do not agree, you may not use our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            2. Description of Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>[Cycle Rental]</strong> offers the following services:
          </p>
          <ul className="list-disc list-inside ml-4 mt-4 text-gray-700 dark:text-gray-300">
            <li>Rental Cycles: Book cycles for rent.</li>
            <li>Vehicle Services: Schedule doorstep pickup for servicing.</li>
            <li>
              Community Contributions: Participate in crowdfunding, sponsored
              rides, and charitable campaigns.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            3. User Eligibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            - You must be at least 18 years old or have legal consent from a
            guardian to use our services.
            <br />- Accurate and up-to-date information must be provided during
            registration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            4. Payments
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Payments must be made through the platform’s secure payment gateway.
            All payments are non-refundable unless the service was not delivered
            due to our error.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            5. Prohibited Activities
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            You agree not to use the platform for illegal purposes, tamper with
            rented cycles, or attempt unauthorized access to other users
            accounts or our systems.
          </p>
        </section>

        <p className="mt-8 text-gray-700 dark:text-gray-400">
          For the full terms, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Terms;
