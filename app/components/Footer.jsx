import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#0b1840] pt-20 pb-8 mt-20git'>
            <div className="max-w-[1280px] mx-auto">
            <div className="flex md:flex-row flex-col gap-6 justify-between pb-10 sm:pb-14 border-b border-gray-300">
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Address</h3>
                <p className="hover:text-blue-600 duration-300"><a
                  href="https://maps.app.goo.gl/kWt2jtgyUTVtwBDEA"
                  target="blank"
                >New York, USA</a></p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Message Me</h3>
                <p className="hover:text-blue-600 duration-300"><a href="https://www.facebook.com/himuaminofficial?mibextid=gik2fB" target="blank">On Facebook</a></p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Send Me Email</h3>
                <p className="hover:text-blue-600 duration-300"><a href="mailto:himuaminofficial@gmail.com">himuaminofficial@gmail.com</a></p>
                </span>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p className="text-[12px]">© <a className="text-blue-600" href="https://shakiqur-rahman.netlify.app/#" target="blank">Shake</a> - 2023 | All Rights Reserved</p>
                <div className="flex gap-4">
                    <Link className="hover:text-blue-600 duration-300 px-1" href='https://www.facebook.com/himuaminofficial?mibextid=gik2fB' target="blank"></Link>
                    <Link className="hover:text-blue-600 duration-300 px-1" href='https://www.instagram.com/himuamin_official?igshid=NGVhN2U2NjQ0Yg%3D%3D' target="blank"></Link>
                    <Link className="hover:text-blue-600 duration-300 px-1" href='https://twitter.com/himuamin_offic' target="blank"></Link>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;