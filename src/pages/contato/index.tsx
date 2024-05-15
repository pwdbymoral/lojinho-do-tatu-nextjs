import Button from '@/components/Button';
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactForm: React.FC = () => {
  return (
    <form action="" method="post">
      <div className="p-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-200 px-1 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="p-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@provedor.com"
          className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-200 px-1 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="p-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Digite sua mensagem"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-200 px-1 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="px-4 py-3 text-right sm:px-6">
        <Button>Enviar</Button>
      </div>
    </form>
  );
  // ... form logic and JSX
};

const ContactInfo: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center p-2">
      <div className="flex w-full flex-col items-center justify-center space-y-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <div className="text-center">
          <h4 className="font-semibold">Endereço</h4>
          <p className="font-normal text-gray-600">
            Rua dos Bobos, Nº 0
            <br />
            Bairro: Centro
            <br />
            Cidade: São Paulo
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <div className="text-center">
          <h4 className="font-semibold">Telefone</h4>
          <p className="font-normal text-gray-600">(79)99999-9999</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        </svg>
        <div className="text-center">
          <h4 className="font-semibold">Email</h4>
          <p className="font-normal text-gray-600">contato@lojinhodotatu.com</p>
        </div>
      </div>
    </div>
  );
};

/**
 * The Products page displays a form and contact informations for costumers.

It consists of the following elements:

- Navbar component
- ContactForm: Displays a form for costumers to send a message to the store.
- ContactInfo: Displays the store address, phone number and email.
- Footer component
 */
const ContatoPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Entre em contato conosco - Lojinho do Tatu</title>
      </Head>
      <Header />
      <main className="container mx-auto flex min-h-[calc(100vh-340px)] w-full flex-col items-center justify-center md:min-h-[calc(100vh-260px)]">
        <div className="mx-auto my-4 flex w-10/12 flex-col rounded-md border bg-gray-50 shadow-lg md:min-h-[55vh]">
          <div className="flex h-16 w-full items-center justify-center justify-self-start rounded-t-md bg-primary md:h-24">
            <h2 className="text-2xl font-semibold text-white">Fale conosco</h2>
          </div>
          <div className="flex w-full grow flex-col divide-y divide-primary p-2 md:flex-row md:space-x-2 md:divide-x md:divide-y-0">
            <div className="flex flex-col justify-center md:w-10/12">
              <h3 className="px-2 text-lg font-bold text-primary">
                Envie-nos uma mensagem:
              </h3>
              <ContactForm />
            </div>
            <div className="px-2 md:flex md:items-center md:px-0 md:pl-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContatoPage;
