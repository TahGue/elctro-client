import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-grid-system";
import { Product } from "../../types/DBTypes";
import CircleLoader from "../../components/loaders/CircleLoader";
import { useProduct } from "../../hooks/products/useProducts";
import Button from "../../ui/Button";
import { useSettings } from "../../hooks/useSettings";
import { AiFillHeart } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";

export default function ProductDetils() {
  const router = useRouter();

  const { slug } = router.query;
  const { currency } = useSettings();

  const { data, isError, isLoading } = useProduct({ slug });

  return (
    <div className="h-screen">
      {isLoading && <CircleLoader />}
      {!isLoading && data && (
        <div className=" min-h-screen ">
          <div>
            <Container className=" ">
              <Row>
                <Col>
                  <div className=" flex justify-center items-center  w-full relative p-4  ">
                    <Image
                      src={data?.image}
                      layout="fixed"
                      width={650}
                      height={450}
                      className=" rounded-8 mr-2 broder-2"
                    />
                  </div>
                </Col>
                <Col className="">
                  <Row className=" border-b-2 border-grey  ">
                    <div className=" ">
                      <div className="  flex text-primary mt-10">
                        <AiFillHeart />
                        <span className="text-xs  ">Add to Wishlist</span>
                      </div>
                      <h3 className=" text-3xl "> {data?.name}</h3>
                      <div className="flex ">
                        <span className="text-xl">{`${data?.price} ${currency}`}</span>
                        <div className="line-through text-sm text-grey   m-2">{`200 ${currency}`}</div>
                      </div>

                      <div className="flex  justify-between w-full m-3 ">
                        <div className="  flex text-primary mt-10">
                          <FaCarSide />
                          <span className="text-xs  ">Free Delivery</span>
                        </div>
                        <div className="  flex text-primary mt-10">
                          <FaCarSide />
                          <span className="text-xs  ">Free Delivery</span>
                        </div>
                        <div className="  flex text-primary mt-10">
                          <FaCarSide />
                          <span className="text-xs  ">Free Delivery</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <h3 className=" text-xl mt-2">description</h3>

                  <div className="mt-5 mb-5  text-sm">
                    <p>{data.description}</p>
                  </div>

                  <div>
                    <Button onClick={() => {}}>Add to cart</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}
