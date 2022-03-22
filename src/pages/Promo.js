import React from "react";
import BreadCrumbs from "../components/breadcrumbs";
import Pagination from "../components/pagination";
import Promo from "../components/promo";

const PromoList = () => {
  return (
    <div className="container">
      <BreadCrumbs />
      <div className="btitle">Акции</div>
      <div className="row mb-8 mb-sm-0">
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
        </div>
        <Pagination/>
    </div>
  );
};

export default PromoList;
