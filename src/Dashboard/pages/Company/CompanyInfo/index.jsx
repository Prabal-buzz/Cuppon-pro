import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../../App/auth";
import { CompanyInfoComp } from './components/Info';
import { Document } from './components/Document';
import { SocialData } from './components/Social';
import { saveInfo } from './store/actions';

const CompanyInfo = ({info}) => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext)

  const handleInfoForm = (data) => {
    dispatch(saveInfo(data, currentUser.company[0].id));
  };

  return (
    <>
        <CompanyInfoComp
          onSubmit={handleInfoForm}
          initialValues={{
          name: info?.name,
          currency: info?.currency,
          country: info?.country,
          state: info?.state,
          address: info?.address,
          city: info?.city,
          zip_code: info?.zip_code,
          email: info?.email,
          phone_number: info?.phone_number,
          category: info?.category
          }}
        />
        <Document />
        <SocialData />
    </>
  );
};

export default CompanyInfo;
