import { fireEvent, render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { recalculateTotal } from "../utils/recalculateTotal";

describe("recalcualte total", () => {
  it("should return the total with a 10% of discount", () => {
    const total = recalculateTotal(dataMock, 10);

    expect(total).toBe(900);
  });

  it("should return the total with a 20% of discount", () => {
    const total = recalculateTotal(dataMock, 20);

    expect(total).toBe(800);
  });

  it("should return the total with a 30% of discount", () => {
    const total = recalculateTotal(dataMock, 30);
    expect(total).toBe(700);
  });
});

const dataMock = [
  {
    product: {
      id: 1,
      title: "test 1",
      price: 500,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    quantity: 1,
  },
  {
    product: {
      id: 2,
      title: "test 2",
      price: 500,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    quantity: 1,
  },
];
