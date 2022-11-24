import { expect, it, describe } from "@jest/globals";
import axios from "axios";

const instance = axios.create();

describe("Testing categories service", () => {
  it("should fetch categories", async () => {
    const categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    const response = await instance.get(
      "https://fakestoreapi.com/products/categories"
    );
    expect(response.data).toEqual(categories);
  });
});
