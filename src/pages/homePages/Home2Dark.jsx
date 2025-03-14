import React from 'react';
import { useEffect } from 'react';
import BannerV2 from '../../components/banner/BannerV2';
import AboutV2 from '../../components/about/AboutV2';
import ServicesV2 from '../../components/services/ServicesV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TeamV2 from '../../components/team/TeamV1';
import Experience from '../../components/experience/Experience';
import BrandV1 from '../../components/brand/BrandV1';
import ContactV1 from '../../components/contact/ContactV1';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV2 from '../../components/header/HeaderV2';

const Home2Dark = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark');

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>
            <div className="wrapper">
                <HeaderV2 logoColor={true} />
                <BannerV2 />
                <AboutV2 />
                <ServicesV2 />
                <TestimonialV2 />
                <WhyChooseUsV2 />
                <TeamV2 />
                <Experience />
                <BrandV1 />
                <ContactV1 />
                <BlogV1 />
                <FooterV1 />
            </div>
        </>
    );
};

export default Home2Dark;