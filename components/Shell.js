const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        margin-top: 0%;
        overflow: hidden;
      }
      @media only screen and (max-width: 600px) {
        .item {
          padding: 5%;
        }
      }
      @media only screen and (max-width: 1410px) {
        .shell {
          margin-top: 0%;
        }
      }

      @media only screen and (max-width: 1100px) {
        .shell {
          margin-top: 0%;
        }
      }
      @media only screen and (max-width: 775px) {
        .logo1 {
          width: 50%;
        }
      }
      @media only screen and (max-width: 615px) {
        .logo1 {
          width: 40%;
        }
      }
      @media only screen and (max-width: 440px) {
        .logo1 {
          width: 30%;
        }
      }
    `}</style>
  </div>
);

export default Shell;
