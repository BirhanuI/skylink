import { useEffect, useState } from "react";
const PriceCalculator = () => {
  useEffect(() => {
    setTotalPrice(2000);
  }, []);
  const pricing = {
    webType: [
      { type: "Web Designing", price: 2000, id: 1 },
      { type: "web designing and Development", price: 4000, id: 2 },
      { type: "Web Hosting", price: 3000, id: 3 },
      { type: "Mobile Application", price: 3000, id: 4 },
      { type: "Network Installation", price: 5000, id: 5 },
      { type: "Data Center Solution", price: 4000, id: 6 },
      { type: "Computer Repair and maintenance", price: 2000, id: 7 },
    ],
    pages: [
      { type: "About us", price: 1000, id: 1 },
      { type: "Contact us", price: 1000, id: 2 },
      { type: "Service page", price: 1000, id: 3 },
    ],
    payment: [
      { type: "Telebirr", price: 3000, id: 1 },
      { type: "International Payments", price: 5000, id: 2 },
      { type: "None", price: 0, id: 3 },
    ],
    additional: [
      { type: "Search Engine Optimization", price: 2000, id: 1 },
      { type: "Google Analytics", price: 2000, id: 2 },
      { type: "Website Content Creation", price: 2000, id: 3 },
    ],
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [pageTotalPrice, setPageTotalPrice] = useState(0);
  const [additionalTotalPrice, setAdditionalTotalPrice] = useState(0);

  const [order, setOrder] = useState({
    webType: pricing.webType[0],
    pages: [],
    payment: pricing.payment[2],
    additional: [],
  });
  const updateWebType = (e) => {
    let orderClone = { ...order };
    const index = e.target.value;
    orderClone.webType = pricing.webType[index];
    setTotalPrice(
      totalPrice + pricing.webType[index].price - order.webType.price
    );
    setOrder(orderClone);
  };
  const updatePages = (e, page) => {
    let orderClone = { ...order };
    if (e.target.checked) {
      orderClone.pages = [...orderClone.pages, page];
      setOrder(orderClone);
      setPageTotalPrice(pageTotalPrice + page.price);
      setTotalPrice(totalPrice + page.price);
    } else {
      const filteredpage = orderClone.pages.filter(
        (item) => item.id != page.id
      );
      orderClone.pages = filteredpage;
      setOrder(orderClone);
      setPageTotalPrice(pageTotalPrice - page.price);
      setTotalPrice(totalPrice - page.price);
    }
  };
  const updatePayment = (payment) => {
    let orderClone = { ...order };
    orderClone.payment = payment;
    setOrder(orderClone);
    setTotalPrice(totalPrice + payment.price - order.payment.price);
  };
  const updateAdditionals = (e, additional) => {
    let orderClone = { ...order };
    if (e.target.checked) {
      orderClone.additional = [...orderClone.additional, additional];
      setOrder(orderClone);
      setAdditionalTotalPrice(additionalTotalPrice + additional.price);
      setTotalPrice(totalPrice + additional.price);
    } else {
      const filteredpage = orderClone.additional.filter(
        (item) => item.id != additional.id
      );
      orderClone.additional = filteredpage;
      setOrder(orderClone);
      setAdditionalTotalPrice(additionalTotalPrice - additional.price);
      setTotalPrice(totalPrice - additional.price);
    }
  };
  return (
    <div className="flex justify-center my-10 flex-col">
        <h1 className="p-10 text-4xl text-center text-blue-400">Our Pricing for Software Development</h1>
      <div className="flex justify-center gap-10">
        <div className=" bg-blue-300 p-10 flex justify-center flex-col rounded-xl">
          <div className="">
            <p className="text-white mb-5">website type</p>
            <select
              onChange={updateWebType}
              name=""
              id=""
              className="outline-none py-2 rounded-sm"
            >
              {pricing.webType.map((web, index) => (
                <option key={web.id} value={index}>
                  {web.type}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <p className="text-white mt-6 mb-5">Additional Page</p>
            <div className="flex gap-5 items-center">
              {pricing.pages.map((page) => (
                <label key={page.id}>
                  <input
                    onChange={(e) => {
                      updatePages(e, page);
                    }}
                    type="checkbox"
                    name="page"
                    value={page.id}
                  />{" "}
                  {page.type}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-5 text-white ">Payment Integration</p>
            <div className="flex gap-5">
              {pricing.payment.map((payment) => (
                <label key={payment.id}>
                  <input
                    onChange={() => {
                      updatePayment(payment);
                    }}
                    type="radio"
                    name="payment"
                    value={payment.price}
                  />{" "}
                  {payment.type}
                </label>
              ))}
            </div>
          </div>
          <div className="">
            <p className="text-white mt-6 mb-5">Additional Service</p>
            <div className=" gap-2 items-start flex flex-col">
              {pricing.additional.map((addition) => (
                <label key={addition.id}>
                  <input
                    onChange={(e) => {
                      updateAdditionals(e, addition);
                    }}
                    type="checkbox"
                    name="service"
                    value={addition.price}
                  />{" "}
                  {addition.type}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="w-96 bg-blue-300 p-10 text-whit leading-loose rounded-xl">
          <h1 className="text-center text-white p-5">
            TOTAL SUMMARY WITH OUT VAT
          </h1>
          <div className="flex justify-end">
            <div className="text-lg text-white">Services Type</div>
            <div className="">-----------------</div>
            <div className="">{order.webType.price}.00birr</div>
          </div>
          <div className="flex justify-end">
            <div className="text-lg text-white">Pages</div>
            <div className="">------------------------------</div>
            <div className="">{pageTotalPrice}.00birr</div>
          </div>
          <div className="">
            {order.pages.map((page, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-end flex-col items-end"
                >
                  <div className="flex justify-around items-end">
                    <div className="text-left">{page.type}</div>
                    <div className="">---------------</div>
                    <div className=""> {"  " + page.price}.00birr</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div className="flex justify-end">
              <div className="text-lg text-white">Payment</div>
              <div className="">-----------------------</div>
              <div className="">{order.payment.price || 0}.00birr</div>
            </div>
            <div
              className={`flex justify-end ${
                order.payment.price ? "" : "hidden"
              }`}
            >
              <div className="">{order.payment.type}</div>
              <div className="">---------</div>
              <div className="">{order.payment.price || 0}.00birr</div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="text-lg text-white">Additional Services</div>
            <div className="">----------</div>
            <div className="">{additionalTotalPrice}.00birr</div>
          </div>
          <div className="">
            {order.additional.map((addition, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-end flex-col items-end"
                >
                  <div className="flex justify-around items-end ">
                    <div className="text-left">{addition.type}</div>
                    <div className="">----</div>
                    <div className="">{addition.price}.00birr</div>
                  </div>
                </div>
              );
            })}
          </div>
          <h1 className="text-right text-xl text-white border-t-4 border-white pt-5">
            Total----{totalPrice}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
