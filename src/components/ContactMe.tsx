import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>(); // useForm<Inputs>() is a generic type that takes in the type of the form data. In this case, the form data is an object with the keys name, email, subject, and message. handleSubmit is a function that takes in a callback function that will be called when the form is submitted. register is a function that registers the input fields with the react-hook-form library.
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center md:text-left md:flex-row">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center md:text-3xl">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+234-903-577-1048</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">adamsfaisal2003@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
