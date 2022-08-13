import React, {useState,useEffect} from 'react'
import { getToken } from '../context/AuthContext';
export default function LastOrders(){
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const TOKEN = getToken();
    let orders = [
      {
          "id": 66,
          "orderNo": "",
          "orderName": "Copy of Emre",
          "fulfillmentType": "",
          "paymentType": "",
          "orderDate": "2021-07-29T13:37:53Z",
          "deliveryDate": "2021-07-30T13:37:53Z",
          "collectionDate": "2021-07-29T13:25:25Z",
          "status": 0,
          "currency": null,
          "currencyCode": null,
          "currencyValue": null,
          "subTotal": 25.05,
          "discountTotal": 0,
          "vatTotal": 0,
          "total": 25.05,
          "notes": null,
          "details": [
              {
                  "id": 174,
                  "product": {
                      "id": 7979,
                      "code": "17979",
                      "description1": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "description2": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "description3": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "2822872",
                      "barcode2": "2400014122732",
                      "barcode3": "2400014122732",
                      "unit1": "KG        ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "Sold by kg",
                      "weight": "1",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "17979",
                      "notes": "",
                      "notes2": "£5.59 p/kg",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:40Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 4,
                              "parcelPrice": 4,
                              "discount": 0,
                              "netPrice": 4,
                              "netParcelPrice": 4
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 21,
                              "name": "Meats",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 8,
                                      "name": "Bulgaria",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 698,
                                      "name": "Ken",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 344,
                                      "name": "Sausages",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 842,
                                      "name": "Yes",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 478,
                                      "name": "Sold by kg",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 14,
                              "name": "Chilled",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1227,
                                      "name": "Chilled",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "KG",
                  "quantity": 4,
                  "price": 4,
                  "vatRate": 0,
                  "subTotal": 16,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 16,
                  "deletedAt": null
              },
              {
                  "id": 175,
                  "product": {
                      "id": 5583,
                      "code": "15583",
                      "description1": "0 Cristim de Sunca Ham Salami (12) 1x450g",
                      "description2": "0 Cristim de Sunca Ham Salami (12pcs/Box)",
                      "description3": "0 Cristim de Sunca Ham Salami (12) 1x450g",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "5941265005742",
                      "barcode2": "127",
                      "barcode3": "",
                      "unit1": "PCS       ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "450g",
                      "weight": "0.45",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "127",
                      "notes": "",
                      "notes2": "£3.79",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:16Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 2.71,
                              "parcelPrice": 2.71,
                              "discount": 0,
                              "netPrice": 2.71,
                              "netParcelPrice": 2.71
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 21,
                              "name": "Meats",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 6,
                                      "name": "Romania",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 230,
                                      "name": "Cristim",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 343,
                                      "name": "Salami",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 842,
                                      "name": "Yes",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 405,
                                      "name": "450g",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 14,
                              "name": "Chilled",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1227,
                                      "name": "Chilled",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 3,
                  "price": 2.71,
                  "vatRate": 0,
                  "subTotal": 8.13,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 8.13,
                  "deletedAt": null
              },
              {
                  "id": 176,
                  "product": {
                      "id": 8962,
                      "code": "18962",
                      "description1": "7 Days 80gx14 Bake Rolls Cheese 14x80g (67035)",
                      "description2": "7 Days Bake Rolls - Cheese",
                      "description3": "7 Days 80gx14 Bake Rolls Cheese 14x80g (67035)",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "5201360671045",
                      "barcode2": "15201360679406",
                      "barcode3": "",
                      "unit1": "PCS       ",
                      "unit2": "BOX",
                      "unitRate1": 14,
                      "pSize": "80g",
                      "weight": "0.101",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "2",
                      "secondaryUnit": "1",
                      "catalogCode": "18962",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:54:04Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 0.92,
                              "parcelPrice": 17.88,
                              "discount": 0,
                              "netPrice": 0.92,
                              "netParcelPrice": 17.88
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 15,
                              "name": "Confectionary",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          },
                          {
                              "id": 31,
                              "name": "7 Days & Croissants",
                              "type": 2,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 108,
                                      "name": "7 Days",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 6,
                                      "name": "Romania",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 427,
                                      "name": "80g",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 306,
                                      "name": "Bread Snacks",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 4,
                              "name": "Variety",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1075,
                                      "name": "Bake Rolls",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 1,
                  "price": 0.92,
                  "vatRate": 0,
                  "subTotal": 0.92,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 0.92,
                  "deletedAt": null
              }
          ],
          "deletedAt": null
      },
      {
          "id": 58,
          "orderNo": "",
          "orderName": "Emre",
          "fulfillmentType": "",
          "paymentType": "",
          "orderDate": "2021-07-12T11:01:47Z",
          "deliveryDate": "2021-07-13T11:01:47Z",
          "collectionDate": "2021-07-12T10:00:01Z",
          "status": 0,
          "currency": null,
          "currencyCode": null,
          "currencyValue": null,
          "subTotal": 4,
          "discountTotal": 0,
          "vatTotal": 0,
          "total": 4,
          "notes": "Emre test",
          "details": [
              {
                  "id": 141,
                  "product": {
                      "id": 7979,
                      "code": "17979",
                      "description1": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "description2": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "description3": "0 Ken Beer Sausages (Approx. 850g) (9) KG",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "2822872",
                      "barcode2": "2400014122732",
                      "barcode3": "2400014122732",
                      "unit1": "KG        ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "Sold by kg",
                      "weight": "1",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "17979",
                      "notes": "",
                      "notes2": "£5.59 p/kg",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:40Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 4,
                              "parcelPrice": 4,
                              "discount": 0,
                              "netPrice": 4,
                              "netParcelPrice": 4
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 21,
                              "name": "Meats",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 8,
                                      "name": "Bulgaria",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 698,
                                      "name": "Ken",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 344,
                                      "name": "Sausages",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 842,
                                      "name": "Yes",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 478,
                                      "name": "Sold by kg",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 14,
                              "name": "Chilled",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1227,
                                      "name": "Chilled",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "KG",
                  "quantity": 1,
                  "price": 4,
                  "vatRate": 0,
                  "subTotal": 4,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 4,
                  "deletedAt": null
              }
          ],
          "deletedAt": null
      },
      {
          "id": 57,
          "orderNo": "",
          "orderName": "Emre",
          "fulfillmentType": "",
          "paymentType": "",
          "orderDate": "2021-07-12T10:03:44Z",
          "deliveryDate": "2021-07-13T10:03:44Z",
          "collectionDate": null,
          "status": 0,
          "currency": null,
          "currencyCode": null,
          "currencyValue": null,
          "subTotal": 16.16,
          "discountTotal": 0,
          "vatTotal": 0.11,
          "total": 16.27,
          "notes": null,
          "details": [
              {
                  "id": 136,
                  "product": {
                      "id": 6568,
                      "code": "16568",
                      "description1": "Barbecue Wooden Skewers  1x1pack (100pcs)",
                      "description2": "BBQ Wooden Skewers (1 pack)",
                      "description3": "Barbecue Wooden Skewers (1 pack) 1x100pcs",
                      "vatCode": "STD",
                      "vat": 20,
                      "barcode1": "6954245564251",
                      "barcode2": "",
                      "barcode3": "",
                      "unit1": "PCS       ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "100pcs",
                      "weight": "0.1",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "16568",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:24Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 0.55,
                              "parcelPrice": 0.55,
                              "discount": 0,
                              "netPrice": 0.55,
                              "netParcelPrice": 0.55
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 23,
                              "name": "Non Foods",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 5,
                                      "name": "Turkey",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 235,
                                      "name": "Barbecue",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 359,
                                      "name": "BBQ",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 599,
                                      "name": "100pcs",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 1,
                  "price": 0.55,
                  "vatRate": 20,
                  "subTotal": 0.55,
                  "discountTotal": 0,
                  "vatTotal": 0.11,
                  "total": 0.66,
                  "deletedAt": null
              },
              {
                  "id": 137,
                  "product": {
                      "id": 7618,
                      "code": "17618",
                      "description1": "zz.Bella Filo Pastry for Baklava Chilled (18) 1x400g",
                      "description2": "Bella Fillo Pastry (Baklavalik Yufka)",
                      "description3": "Bella Filo Pastry for Baklava Chilled (18) 1x400g",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "3800047746285",
                      "barcode2": "3800047750008",
                      "barcode3": "3800047763282",
                      "unit1": "PCS       ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "400g",
                      "weight": "0.350",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "17618",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:35Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 0.85,
                              "parcelPrice": 0.85,
                              "discount": 0,
                              "netPrice": 0.85,
                              "netParcelPrice": 0.85
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 18,
                              "name": "Bread & Pastry",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 8,
                                      "name": "Bulgaria",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 190,
                                      "name": "Bella",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 309,
                                      "name": "Pastry Sheets",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 399,
                                      "name": "400g",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 14,
                              "name": "Chilled",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1227,
                                      "name": "Chilled",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 1,
                  "price": 0.85,
                  "vatRate": 0,
                  "subTotal": 0.85,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 0.85,
                  "deletedAt": null
              },
              {
                  "id": 138,
                  "product": {
                      "id": 4870,
                      "code": "14870",
                      "description1": "zz.Bella Filo Pastry (Yufka 18) 1x400g (922024005)",
                      "description2": "Bella Pastry Sheets (Yufka 18)",
                      "description3": "Bella Pastry Sheets (Yufka 18) 1x400g",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "3800047700706",
                      "barcode2": "3800047764166",
                      "barcode3": "3800047751340",
                      "unit1": "PCS       ",
                      "unit2": "",
                      "unitRate1": 1,
                      "pSize": "400g",
                      "weight": "0.465",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "1",
                      "secondaryUnit": "0",
                      "catalogCode": "14870",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:53:09Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 0.85,
                              "parcelPrice": 0.85,
                              "discount": 0,
                              "netPrice": 0.85,
                              "netParcelPrice": 0.85
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 18,
                              "name": "Bread & Pastry",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 8,
                                      "name": "Bulgaria",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 190,
                                      "name": "Bella",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 309,
                                      "name": "Pastry Sheets",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 397,
                                      "name": "500g",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 14,
                              "name": "Chilled",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1227,
                                      "name": "Chilled",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 1,
                  "price": 0.85,
                  "vatRate": 0,
                  "subTotal": 0.85,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 0.85,
                  "deletedAt": null
              },
              {
                  "id": 139,
                  "product": {
                      "id": 388,
                      "code": "10388",
                      "description1": "Benus (38) Fitness Whole Grain Rye Bread 12x500g",
                      "description2": "Benus Fitness Wholegrain Rye Bread",
                      "description3": "Benus Fitness Wholegrain Rye Bread (38) 12x500g",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "5900585001094",
                      "barcode2": "5900585101091",
                      "barcode3": "",
                      "unit1": "PCS       ",
                      "unit2": "BOX",
                      "unitRate1": 12,
                      "pSize": "500g",
                      "weight": "0.54",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "2",
                      "secondaryUnit": "1",
                      "catalogCode": "10388",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:52:18Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 1.07,
                              "parcelPrice": 12.84,
                              "discount": 0,
                              "netPrice": 1.07,
                              "netParcelPrice": 12.84
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 18,
                              "name": "Bread & Pastry",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 2,
                                      "name": "Poland",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 186,
                                      "name": "Benus",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 322,
                                      "name": "Bread",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 4,
                              "name": "Variety",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1025,
                                      "name": "Rye",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 397,
                                      "name": "500g",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "PCS",
                  "quantity": 1,
                  "price": 1.07,
                  "vatRate": 0,
                  "subTotal": 1.07,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 1.07,
                  "deletedAt": null
              },
              {
                  "id": 140,
                  "product": {
                      "id": 388,
                      "code": "10388",
                      "description1": "Benus (38) Fitness Whole Grain Rye Bread 12x500g",
                      "description2": "Benus Fitness Wholegrain Rye Bread",
                      "description3": "Benus Fitness Wholegrain Rye Bread (38) 12x500g",
                      "vatCode": "ZERO",
                      "vat": 0,
                      "barcode1": "5900585001094",
                      "barcode2": "5900585101091",
                      "barcode3": "",
                      "unit1": "PCS       ",
                      "unit2": "BOX",
                      "unitRate1": 12,
                      "pSize": "500g",
                      "weight": "0.54",
                      "minStock": 0,
                      "saleType": 0,
                      "itemType": "REAL PRODUCT",
                      "defaultUnit": "2",
                      "secondaryUnit": "1",
                      "catalogCode": "10388",
                      "notes": "",
                      "notes2": "",
                      "allowSales": "3",
                      "deletedAt": null,
                      "createdAt": "2020-10-30T15:52:18Z",
                      "isNew": false,
                      "isFavorites": false,
                      "price": {
                          "price": {
                              "priceId": 1,
                              "price": 1.07,
                              "parcelPrice": 12.84,
                              "discount": 0,
                              "netPrice": 1.07,
                              "netParcelPrice": 12.84
                          },
                          "privatePrice": null,
                          "promoPrice": null,
                          "clearancePrice": null
                      },
                      "rawPrices": [],
                      "categories": [
                          {
                              "id": 18,
                              "name": "Bread & Pastry",
                              "type": 1,
                              "index": 1000,
                              "visible": true,
                              "pictureUrl": null,
                              "childCategories": []
                          }
                      ],
                      "attributes": [
                          {
                              "id": 1,
                              "name": "Country",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 2,
                                      "name": "Poland",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "name": "Brand",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 186,
                                      "name": "Benus",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "name": "Type",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 322,
                                      "name": "Bread",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 4,
                              "name": "Variety",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 1025,
                                      "name": "Rye",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 10,
                              "name": "Returns Accepted",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 843,
                                      "name": "No",
                                      "index": 1000
                                  }
                              ]
                          },
                          {
                              "id": 5,
                              "name": "Size",
                              "index": 1000,
                              "visible": true,
                              "values": [
                                  {
                                      "id": 397,
                                      "name": "500g",
                                      "index": 1000
                                  }
                              ]
                          }
                      ],
                      "stockStatus": {
                          "available": true,
                          "suspended": false,
                          "lowStock": false,
                          "saleType": 0
                      },
                      "webPublished": false,
                      "mobilePublished": true
                  },
                  "unit": "BOX",
                  "quantity": 1,
                  "price": 12.84,
                  "vatRate": 0,
                  "subTotal": 12.84,
                  "discountTotal": 0,
                  "vatTotal": 0,
                  "total": 12.84,
                  "deletedAt": null
              }
          ],
          "deletedAt": null
      }
    ];
    setOrders(orders);
    console.log(orders);
  },[]);
  return (
    <>
      <h1>Last Orders</h1>
      {orders.map(order=>{
        let date = new Date(order.orderDate).toLocaleString('en-GB');
        date = date.slice(0,date.length - 3);
      return<div key={order.id} className="accordion" id={'order__'+order.id}>
        <div className="accordion-item mt-3">
          <h2 className="accordion-header d-flex flex-column" id={'heading__'+order.id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse__'+order.id} aria-expanded="false" aria-controls="collapseTwo">
              <span className='fw-bold'>{order.orderName}</span> 
            </button>
          </h2>
          <div id={'collapse__'+order.id} className="accordion-collapse collapse" aria-labelledby={'heading__'+order.id} data-bs-parent={'#order__'+order.id}>
            <div className="accordion-body d-flex flex-column">
            <div className="d-flex">
              <code className='me-auto fw-bold text-dark'>Total: {order.total}</code>
              <code className='ms-auto fw-bold'>{date}</code>
            </div>
            <hr/>
            <h6>Products</h6>
              {
                order.details.map(detail=>{
                  const product = detail.product
                  return<div key={detail.id}>
                          
                          {detail.quantity} x ({product.description2}) {detail.total}
                        </div>
                })
              }
            </div>
          </div>
        </div>
      </div>;
    })}
    </>
  )
}
/*
const query = ` 
      {
        orders(startDate: "string", endDate: "string") {
          id
          orderNo
          orderName
          fulfillmentType
          paymentType
          orderDate
          deliveryDate
          collectionDate
          status
          currency
          currencyCode
          currencyValue
          subTotal
          discountTotal
          vatTotal
          total
          notes
          details {
            id
            product {
              id
              code
              description1
              description2
              description3
              vatCode
              vat
              barcode1
              barcode2
              barcode3
              unit1
              unit2
              unitRate1
              pSize
              weight
              minStock
              saleType
              itemType
              defaultUnit
              secondaryUnit
              catalogCode
              notes
              notes2
              allowSales
              deletedAt
              createdAt
              isNew
              isFavorites
              price {
                price {
                  priceId
                  price
                  parcelPrice
                  discount
                  netPrice
                  netParcelPrice
                }
                privatePrice {
                  priceId
                  price
                  parcelPrice
                  discount
                  netPrice
                  netParcelPrice
                }
                promoPrice {
                  priceId
                  price
                  parcelPrice
                  discount
                  netPrice
                  netParcelPrice
                }
                clearancePrice {
                  priceId
                  price
                  parcelPrice
                  discount
                  netPrice
                  netParcelPrice
                }
              }
              rawPrices {
                priceId
                price
                parcelPrice
                discount
                netPrice
                netParcelPrice
              }
              categories {
                id
                name
                type
                index
                visible
                pictureUrl
                childCategories {
                  id
                  name
                  type
                  index
                  pictureUrl
                  visible
                }
              }
              attributes {
                id
                name
                index
                visible
                values {
                  id
                  name
                  index
                }
              }
              stockStatus {
                available
                suspended
                lowStock
                saleType
              }
              webPublished
              mobilePublished
            }
            unit
            quantity
            price
            vatRate
            subTotal
            discountTotal
            vatTotal
            total
            deletedAt
          }
          deletedAt
        }
      }
    `;
    let bearer = 'Bearer ' + TOKEN;
    fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        body:JSON.stringify({query:query}),
        withCredentials: true,
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    }).then(r=>r.json()).then(response=>{
      console.log(response);
    });
*/