// "use server"
// import { redirect } from 'next/navigation';
// // import nodemailer from 'nodemailer';
// import nodemailer from 'nodemailer';
// export const metadata = {
//   title: 'Contact Us',
// };

// async function sendEmail(formData: FormData) {
//   const firstName = formData.get('firstName')?.toString() || '';
//   const lastName = formData.get('lastName')?.toString() || '';
//   const email = formData.get('email')?.toString() || '';
//   const message = formData.get('message')?.toString() || '';

//   if (!email || !message) {
//     throw new Error('Email and Message fields are mandatory.');
//   }

// //   const transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //       user: process.env.GMAIL_USER, // Your Gmail address
// //       pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
// //     },
// //   });

//   const mailOptions = {
//     from: email,
//     to: process.env.GMAIL_USER,
//     subject: `Contact form submission from ${firstName} ${lastName}`,
//     text: message,
//   };

// //   await transporter.sendMail(mailOptions);

//   // Redirect to a success page or show a success message
// //   redirect('/contact/success');
// console.log('mailOptions',mailOptions)
// }

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         action={sendEmail}
//         method="POST"
//         className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="firstName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             First Name
//           </label>
//           <input
//             id="firstName"
//             name="firstName"
//             type="text"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="lastName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Last Name
//           </label>
//           <input
//             id="lastName"
//             name="lastName"
//             type="text"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email (required)
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Your Message (required)
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import Contact from '@/components/custom/Contact';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-white'>
      <Contact />
    </main>
  );
}