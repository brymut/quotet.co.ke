const Info = props => (
  <div className="info">
    <div>
      <h1>About</h1>
      <p>
        Quotet was founded in 2018 whose main objective is to preserve African
        culture while at the same time accessorizing the modern woman to give
        her confidence. We are driven by passion and desire to put a smile on
        the faces of others through uplifting their standards of living by
        empowering them economically. When the founder Salome Mwenda worked for
        the government of Kenya she travelled in many counties and met very many
        communities with diverse culture and skills. She was implementing the
        product development programme funded by the government of Kenya, the
        beneficiaries were Men, Women and youth who developed high quality
        products. After the completion of the programme she did a follow-up
        programme and the question that arose was, “there is no market for my
        improved products and skills” This left me thinking what I could do to
        complete the cycle. When the found left working for the government, she
        chose to do jewellery since she wanted to work with some of the artisans
        she trained so as to create a space for their skills and their products.
        Our labour and supply come from some of the artisans. Quotet is
        empowering these Artists economically and are therefore able to support
        their families.
      </p>
    </div>
    <div>
      <h1>Mission</h1>
      <p>
        To produce functional jewellery that suits the modern woman in every
        occasion and at the same time preserve the African culture.
      </p>
    </div>
    <div>
      <h1>Vision</h1>
      <p>
        To Marry different African cultures and modern beauty to make functional
        accessories from beads.
      </p>
      <ul>
        <li>To be the preferred alternative for accessories made in Africa</li>
        <li>
          To establish a store in one of the high end malls in the next three
          years
        </li>
        <li>
          To align ourselves with agenda four of 2018 and mostly the
          manufacturing
        </li>
        <li>
          To align ourselves with agenda 2063 and in particular the 6th
          aspiration which states “An Africa which is people driven, relying on
          the potential offered by people especially its women and youth and
          caring for children.
        </li>
      </ul>
    </div>
    {/* {props.children} */}
    <style global jsx>{`
      .info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2%;
        padding: 2.5%;
      }
      .info h1 {
        color: #c02014;
      }
      .info div {
        border: solid #c02014;
        padding: 2.5%;
      }
      .info ul {
        list-style: none;
      }

      .info ul li::before {
        content: "\\2022";
        color: #c02014; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
      }
      .info li {
        margin-top: 5%;
      }
      @media only screen and (max-width: 600px) {
        .info {
          grid-template-columns: 1fr;
          width: 90%;
          padding: 5%;
        }
      }
    `}</style>
  </div>
);

export default Info;
