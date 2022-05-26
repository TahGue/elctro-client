import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import BrandsList from '../../components/brandsList/BrandsList';
import CategoriesList from '../category/categoriesList/CategoriesList';
import CircleLoader from '../../components/loaders/CircleLoader';
import Paginator from '../../components/paginator/Paginator';
import PriceRange from '../../components/priceRange/PriceRange';
import ProductCard from '../../components/product/ProductCard';
import SearchBar from '../../components/searchBar/SearchBar';
import { useShop } from '../product/products/useShop';
import { Brand, Category, Product } from '../../types/DBTypes';
import Collapse from '../../ui/Collapse';

export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const { data, isLoading, refetch } = useShop({
    categories: selectedCategories.map((c) => c.id),
    brands: selectedBrands.map((c) => c.id),
    page,
    searchText,
    priceRange: {
      min: priceRange && priceRange[0] ? priceRange[0] : 0,
      max: priceRange && priceRange[1] ? priceRange[1] : 0,
    },
  });

  const onSelectCategory = (cat: Category) => {
    if (!!selectedCategories.find((c) => c?.id === cat.id)) {
      setSelectedCategories((prev) => prev.filter((c) => c.id !== cat.id));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const onSelectBrand = (brand: Brand) => {
    if (!!selectedBrands.find((c) => c.id === brand.id)) {
      setSelectedBrands((prev) => prev.filter((c) => c.id !== brand.id));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const onChangeText = async (e: any) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col
            sm={12}
            lg={3}
            md={3}
            className='border rounded-md border-lightgreyx2'
          >
            <div className='flex p-2 w-full h-12'>
              <SearchBar value={searchText} onChange={onChangeText} autoFocus />
            </div>
            <div className='mt-2 p-2  max-h-44 overflow-auto  border-t border-lightgreyx2 rounded-sm '>
              <Collapse title='Categories'>
                <CategoriesList
                  onSelect={onSelectCategory}
                  selectedCategories={selectedCategories}
                />
              </Collapse>
            </div>
            <div className='mt-2 p-2 rounded-sm border-t border-lightgreyx2'>
              <Collapse title='Brands'>
                <BrandsList
                  onSelect={onSelectBrand}
                  selectedBrands={selectedBrands}
                />
              </Collapse>
            </div>

            <div className='mt-2 p-2  border-t border-lightgreyx2'>
              <Collapse title='Filter by price'>
                <PriceRange
                  value={priceRange || [0, 1]}
                  onChange={setPriceRange}
                />
              </Collapse>
            </div>
          </Col>
          <Col sm={12} lg={9} md={9} style={{ minHeight: '100vh' }}>
            <Container>
              {isLoading ? (
                <CircleLoader />
              ) : (
                <>
                  <Row>
                    {data?.products?.map((pro: Product) => (
                      <Col key={pro.id} lg={4} md={4} sm={12}>
                        <div className=' p-2'>
                          <ProductCard product={pro} key={pro.id} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </>
              )}
            </Container>
          </Col>
        </Row>
        <Row>
          {!isLoading && data && data.totalCount && (
            <Paginator
              totalItems={data.totalCount}
              perPage={21}
              onSelectPage={(p) => setPage(p)}
              currentPage={page}
            />
          )}
        </Row>
      </Container>
    </div>
  );
}
