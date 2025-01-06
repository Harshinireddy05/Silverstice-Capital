import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <div className="pt-20">
      <motion.section
        className="bg-black text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          >
            CONTACT US
          </motion.h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-gray-300 mb-16 max-w-2xl mx-auto"
          >
            We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Address:</h3>
              <p className="text-gray-300">
                Plot No. 123, Sector 5<br />
                Rushikonda IT Park<br />
                Visakhapatnam, AP 530048
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email:</h3>
              <p className="text-gray-300">srinidhi@silverstice.com</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call us:</h3>
              <p className="text-gray-300">+91 91234 56789</p>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243208.07248262053!2d83.06812176776121!3d17.73129611059667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709726831113!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
