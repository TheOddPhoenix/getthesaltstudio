import 'server-only';
/** Provider boundary: implement only after approved product samples and sandbox orders. */
export interface FulfillmentOrder {id:string;items:{providerVariantId:string;quantity:number}[];recipient:{name:string;address1:string;city:string;region:string;postalCode:string;country:string}}
export interface FulfillmentProvider {createDraft(order:FulfillmentOrder,idempotencyKey:string):Promise<{providerOrderId:string}>;getStatus(providerOrderId:string):Promise<'draft'|'in_production'|'shipped'|'failed'>}
export class ManualReviewProvider implements FulfillmentProvider {async createDraft(_order:FulfillmentOrder,_key:string):Promise<{providerOrderId:string}>{throw new Error('POD submission disabled. Review paid order and configure a provider adapter.')}async getStatus(_id:string):Promise<'draft'>{return 'draft'}}
