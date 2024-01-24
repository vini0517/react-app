import React from "react";
import TestComp1 from "../functionalComponents/testComponent";

class ReiteratorComp extends React.Component {
  render() {
    return (
      <div>
        <TestComp1/>
        <p>Reiterating Class Component</p>
      </div>
    );
  }
}
// class TestClassComp extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>This is a test Class Component.</h1>
//         <p>We are learning C.C</p>
//       </div>
//     );
//   }
// }
export default ReiteratorComp;