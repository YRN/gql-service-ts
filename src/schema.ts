import { gql } from 'apollo-server';

export const tipeDefs = gql`

  enum CartStatus {
    ACTIVE
    COMPLETED
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    pin: String!
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    category : String
    description: String
  }

  type Sku {
    id: ID!
    productId: ID!
    product: Product
    stock: Int!
    price: Int!
    unitOfMeasure: String
  }

  type Cart {
    ID: ID!
    status: CartStatus!
    cartItem: [CartItems!]!
  }
  
  type CartItems {
    ID : ID!
    cartId : ID!
    skuId : ID!
    sku : Sku!
    quantity : Int!
    refId : ID
  }

  type Transaction {
    ID: ID!
    cartId: ID!
    userId: ID!
    totalPrice: Float!
    subtotalPrice: Float!
    deductTotalPrice: Float!
    paymentMethod : String!
    user: User
  }

  type TransactionItem {
    ID: ID!
    skuID: ID!
    sku: Sku 
    quantity: Int!
    checkoutPrice: Float!
    normalPrice: Float!
    deductPrice: Float!
    deductSource: String!
  }

  type Payment {
    id: ID!
    user: User!
    status: String!
    paymentExpiredDate: String!
    paymentProvider: String!
    paymentMethod: String!
    amount: Float!
    accountNumber: String!
  }

  type PaymentCallbackLog {
    id: ID!
    payment: Payment!
    requestPayload: String!
    responsePayload: String!
  }

  input CartItemsRequestOnCheckout {
    ID: ID! #id cart
    checkoutPrice : Float
  }
  
  input CheckoutRequest {
    ID: ID!
    cartItems: [CartItemsRequestOnCheckout!]!
  }

  type CheckoutResponse {
    message: String!
  }

  input CartItemRequest {
    cartID: ID
    skuID: ID!
    quantity: Int!
    refID: ID
  }

  type AddToCartAsyncResponse {
    message: String!
  }

  type DeleteCartResponse{
    message : String!
  }

  input TransactionFilterPagination {
    status: String
  }

  input TransactionFilterCursor {
    status: String
    cursor: String!
  }

  input TransactionItemFilterPaginate {
    transactionId: ID!
    page: Int!
  }

  input TransactionItemFilterCursor {
    transactionId: ID!
    cursor: String!
  }

  type TransactionPaginationResponsePageinfo {
    total: Int!
    limit: Int!
    page: Int!
    lastPage: Int!
    count: Int!
  }

  type TransactionItemPaginationResponsePageinfo {
    total: Int!
    limit: Int!
    page: Int!
    lastPage: Int!
    count: Int!
  }

  type TransactionCursorResponsePageinfo {
    nextCursor: String!
    hasNext: Boolean!
  }

  type TransactionItemCursorResponsePageinfo {
    nextCursor: String!
    hasNext: Boolean!
  }
  

  type TransactionCursorResponse {
    meta: TransactionCursorResponsePageinfo
    nodes: [Transaction!]!
  }

  type TransactionPaginationResponse {
    pageInfo: TransactionPaginationResponsePageinfo
    nodes: [Transaction!]!
  }

  type TransactionItemCursorResponse {
    meta: TransactionItemCursorResponsePageinfo
    nodes: [TransactionItem!]!
  }
  
  type TransactionItemPaginationResponse {
    pageInfo: TransactionItemPaginationResponsePageinfo
    nodes: [TransactionItem!]!
  }

  type Query {
    product(id: ID!): Product
    transactionsPagination(filter: TransactionFilterPagination!): TransactionPaginationResponse!
    transactionsCursor(filter: TransactionFilterCursor!): TransactionCursorResponse!
    transactionItemPaginate(filter: TransactionItemFilterPaginate!): TransactionItemPaginationResponse!
    transactionItemCursor(filter: TransactionItemFilterCursor!): TransactionItemCursorResponse!
    transactionDetail(transactionID: ID!): Transaction!
    transactionPaymentDetail(transactionID: ID!): Payment!
    transactionPaymentCallbackLogs(transactionID: ID!): [PaymentCallbackLog!]!
  }


  type Mutation {
    checkout(request: CheckoutRequest!): CheckoutResponse!
    addToCart(request: CartItemRequest!): AddToCartAsyncResponse!
    deleteCart(cartID: ID!): DeleteCartResponse!
  }
`;