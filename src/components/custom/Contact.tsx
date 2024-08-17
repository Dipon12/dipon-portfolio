"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit,reset  } = useForm<FormData>();
  const { toast } = useToast();
  function sendEmail(data: FormData) {
    const apiEndpoint = "/api/email";
   console.log('data` = ' + JSON.stringify(data));
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if(response.error) {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was an error, please try again",
            // action: (
            //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            // ),
          });
          reset();
          return;
        }
        toast({
          variant: "successful",
          title: "Email Sent",
          description: "Thanks for the headsup, will contact you soon",
          // action: (
          //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          // ),
        });
        reset();
        // alert(response.message);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "There was an error, please try again",
          // action: (
          //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          // ),
        })      });
  }

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="name"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <input
              type="text"
              placeholder="Full Name"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="email"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <input
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label
            htmlFor="textarea"
            className="pb-1 text-xs uppercase tracking-wider"
          ></label>
          <textarea
            id="textarea"
            cols={30}
            rows={5}
            placeholder="Write your message..."
            {...register("message", { required: true })}
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 font-xl rounded-md sm:mb-0"
        >
          Send Message
        </button>
      </div>
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div className='mb-5'>
    //     <label
    //       htmlFor='name'
    //       className='mb-3 block text-base font-medium text-black'
    //     >
    //       Full Name
    //     </label>
    //     <input
    //       type='text'
    //       placeholder='Full Name'
    //       className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
    //       {...register('name', { required: true })}
    //     />
    //   </div>
    //   <div className='mb-5'>
    //     <label
    //       htmlFor='email'
    //       className='mb-3 block text-base font-medium text-black'
    //     >
    //       Email Address
    //     </label>
    //     <input
    //       type='email'
    //       placeholder='example@domain.com'
    //       className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
    //       {...register('email', { required: true })}
    //     />
    //   </div>
    //   <div className='mb-5'>
    //     <label
    //       htmlFor='message'
    //       className='mb-3 block text-base font-medium text-black'
    //     >
    //       Message
    //     </label>
    //     <textarea
    //       rows={4}
    //       placeholder='Type your message'
    //       className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
    //       {...register('message', { required: true })}
    //     ></textarea>
    //   </div>
    //   <div>
    //     <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
    //       Submit
    //     </button>
    //   </div>
    // </form>
  );
};

export default Contact;
