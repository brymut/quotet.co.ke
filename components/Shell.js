const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        margin-top: 18%;
      }
      @media only screen and (max-width: 600px) {
        .item {
          padding: 5%;
        }
      }
    `}</style>
  </div>
);

export default Shell;
