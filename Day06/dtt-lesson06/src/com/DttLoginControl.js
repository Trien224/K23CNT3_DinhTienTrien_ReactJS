import React from 'react'
import DttLoginComp from './DttLoginComp';
import DttLogoutComp from './DttLogoutComp';

export default function DttLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var DttLoginControl = isLoggedIn?<DttLoginComp />: <DttLogoutComp />;
  return (
    <div>
      {DttLoginControl}
    </div>
  )
}