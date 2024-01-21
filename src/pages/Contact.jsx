//?rrd
import { Link } from "react-router-dom";
//?react-icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
//?component
import { Button } from "../components";

const Contact = () => {
  return (
    <div className="myContainer pb-32">
      <span className="flex items-center gap-x-[4px] my-20">
        <Link className="text-[14px] text-gray-500" to="/">
          Home
        </Link>
        /
        <Link className="font-semibold" to="/contact">
          Contact
        </Link>
      </span>
      <div className="flex gap-x-8 justify-center">
        <section className="flex flex-col w-full max-w-[340px] py-10 px-8 border-[3px] border-gray-300">
          <span className="pb-8 mb-8 border-b-[2px] border-gray-600">
            <small className="flex items-baseline gap-4 ">
              <small className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                <IoCallOutline className="w-5 h-5" />
              </small>
              <h4 className="text-[16px] font-medium mb-8">Call To Us</h4>
            </small>
            <p className="text-[14px] mb-2 leading-[21px]">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[14px]">Phone: +998 94 121 33 99</p>
          </span>
          <span className="">
            <small className="flex items-baseline gap-4 ">
              <small className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                <MdOutlineEmail className="w-5 h-5" />
              </small>
              <h4 className="text-[16px] font-medium mb-8">Write To US</h4>
            </small>
            <p className="text-[14px] mb-2 leading-[21px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px]">Emails: customer@exclusive.com</p>
            <p className="text-[14px]">Emails: support@exclusive.com</p>
          </span>
        </section>
        <>
          <form className="py-10 px-8 flex flex-col border-[3px] border-gray-300">
            <div className="flex items-center gap-x-4 mb-8">
              <input
                className="outline-none bg-slate-100 w-full rounded-sm pl-2 max-w-[235px] h-[50px]"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="outline-none bg-slate-100 w-full rounded-sm pl-2 max-w-[235px] h-[50px]"
                type="text"
                placeholder="Your Email *"
              />
              <input
                className="outline-none bg-slate-100 w-full rounded-sm pl-2 max-w-[235px] h-[50px]"
                type="text"
                placeholder="Your Phone *"
              />
            </div>
            <textarea
              className="pl-2 mb-8 h-[207px] w-full bg-slate-100"
              placeholder="Your Massage "
              cols="30"
              rows="10"
            ></textarea>
            <div className="ml-auto">
              <Button name="Send Message" link="#" />
            </div>
          </form>
        </>
      </div>
    </div>
  );
};

export default Contact;
