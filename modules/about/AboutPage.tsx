import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { SwiperSlide } from 'swiper/react';
import CustomSlider from '../../components/slider/CustomSlider';

import Image from 'next/image';

function AboutPage() {
  return (
    <div>
      <div className='  justify-center p-4 '>
        <h1 className='text-3xl text-center justify-center p-4'>
          About ElectroMobil
        </h1>
        <p className='text-center justify-center p-4 m-4'>
          Vi på Electromobil vill erbjuda dig som kund så bra service som
          möjligt. Både till för dig och din enhet. När din mobiltelefon,
          surfplatta, laptop behöver repareras behöver du inte oroa dig allt för
          länge. Våra skickliga och kunniga tekniker hjälper dig med allt. Vi
          befinner oss väldig centralt och vill kunna erbjuda vår hjälp så fort
          olyckan är framme. Stig in och få nytt liv på din enhet.
        </p>
        <CustomSlider>
          <SwiperSlide>
            <div className='w-full h-96 bg-lightgrey rounded-xl p-14  '>
              <h3 className=' text-5xl  text-black font-bold'></h3>
              <p className=' text-grey text-2xl mt-5 '></p>
            </div>
          </SwiperSlide>
        </CustomSlider>
      </div>
      <div className='p-4'>
        <h1 className='text-3xl text-center p-4 m-6'>Varför Electromobil?</h1>

        <div>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                Nära Dig
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                Alla Skärmar
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                Reservdelar av högsta Kvalité
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                6 Dagar i veckan
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className='p-4'>
        <h1 className='text-3xl text-center p-4 m-6'>Our Team</h1>
        <div>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Image
                  className='w-5 mr-1'
                  src={'/category.png'}
                  layout='fixed'
                  width={100}
                  height={60}
                  alt=''
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Image
                  className='w-5 mr-1'
                  src={'/category.png'}
                  layout='fixed'
                  width={100}
                  height={60}
                  alt=''
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Image
                  className='w-5 mr-1'
                  src={'/category.png'}
                  layout='fixed'
                  width={100}
                  height={60}
                  alt=''
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div>
                  <Image
                    className='w-5 mr-1'
                    src={'/category.png'}
                    layout='fixed'
                    width={100}
                    height={60}
                    alt=''
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
