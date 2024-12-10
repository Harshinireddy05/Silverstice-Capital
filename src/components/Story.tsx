import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import ImageCarousel from './ImageCarousel';
import storyImage1 from '../assets/Images/story.png';
import storyImage2 from '../assets/Images/story2.jpeg';
import storyImage3 from '../assets/Images/story3.jpeg';

export function Story() {
    const storyImages = [
        storyImage1,
        storyImage2,
        storyImage3
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-[400px] md:h-[500px]"
                    >
                        <ImageCarousel images={storyImages} autoSlideInterval={5000} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            WHAT DO WE EXACTLY DO?
                        </h2>
                        <p className="text-gray-600 mb-6">
                        Silverstice & Company is a premier global management consulting firm that offers strategic advice and innovative solutions to organizations across various industries. Our expertise spans several key areas, including strategy consulting, where we help businesses develop growth strategies, optimize operations, and navigate industry disruptions. We also specialize in operations and digital transformation, assisting companies in enhancing their operational efficiency through cutting-edge digital technologies. Our organization and talent division reshapes corporate structures and talent strategies to foster innovation and growth. Additionally, we leverage advanced analytics, artificial intelligence, and machine learning to provide data-driven insights that solve complex business challenges. Our mergers and acquisitions team guides companies through strategic alignments, maximizing value in deals and ensuring seamless post-deal integration.
                        </p>
                        <p className="text-gray-600">
                        With a global presence in major cities and a diverse team of experts, Silverstice has built a reputation as a trusted advisor to leading corporations, governments, and nonprofit organizations worldwide. Our firm is renowned for its rigorous problem-solving approach, continuous learning culture, and strong emphasis on teamwork, diversity, and leadership development. At Silverstice, we are committed to delivering high-impact solutions and thought leadership that drive long-term success for our clients, solidifying our legacy as a leader in the consulting industry.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}