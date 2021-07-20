export interface MercadoLibre {
    available_filters: Object[];
    available_sorts: Object[];
    filters: [];
    paging: Object;
    query: string;
    related_results: [];
    results: Results[];
    secondary_results: [];
    site_id: string;
    sort: Object;
}

export interface Results {
    accepts_mercadopago: Boolean;
    address: Object[];
    attributes: Object[];
    available_quantity: Number;
    buying_mode: string;
    catalog_product_id: string;
    category_id: string;
    condition: string;
    currency_id: string;
    domain_id: string;
    id: string;
    installments: Object;
    listing_type_id: string;
    official_store_id: any;
    order_backend: Number;
    original_price: Number;
    permalink: string;
    price: Number;
    prices: Object;
    sale_price: any;
    seller: Object;
    seller_address: Object;
    shipping: Object;
    site_id: string;
    sold_quantity: Number;
    stop_time: string;
    tags: string[];
    thumbnail: string;
    thumbnail_id: string;
    title: string;
    use_thumbnail_id: Boolean;
}